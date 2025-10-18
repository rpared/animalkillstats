// Animal Stats per country

// Helper: fetch OWID metadata JSON, then find and fetch the actual data (direct array or CSV URL)
async function fetchOwIDData(metadataUrl, localFallbackUrl = null) {
  // Robust CSV parser (handles quoted fields and commas inside quotes)
  function parseCSV(text) {
    // Split into lines, preserve empty lines for safety
    const lines = text.split(/\r?\n/);
    if (lines.length === 0) return [];

    // Parse a CSV line into fields (handles quotes)
    function parseLine(line) {
      const fields = [];
      let field = '';
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
          if (inQuotes && line[i + 1] === '"') {
            // escaped quote
            field += '"';
            i++; // skip next quote
          } else {
            inQuotes = !inQuotes;
          }
        } else if (ch === ',' && !inQuotes) {
          fields.push(field);
          field = '';
        } else {
          field += ch;
        }
      }
      fields.push(field);
      return fields;
    }

    // find first non-empty line to be header
    let headerLineIndex = 0;
    while (headerLineIndex < lines.length && lines[headerLineIndex].trim() === '') headerLineIndex++;
    if (headerLineIndex >= lines.length) return [];

    const headers = parseLine(lines[headerLineIndex]);
    const records = [];
    for (let i = headerLineIndex + 1; i < lines.length; i++) {
      if (lines[i].trim() === '') continue;
      const cols = parseLine(lines[i]);
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        const key = headers[j] || `col${j}`;
        obj[key] = cols[j] === undefined ? '' : cols[j];
      }
      records.push(obj);
    }

    // Normalize header names so code using Entity/Year still works
    // Find mapping from lowercase header -> canonical name
    const normalizeKey = (k) => {
      if (!k) return k;
      const kk = k.trim().toLowerCase();
      if (['entity', 'country', 'country name', 'location'].includes(kk)) return 'Entity';
      if (['year', 'time', 'date'].includes(kk)) return 'Year';
      return k; // keep original
    };

    // If headers need normalization, produce mapped records
    const first = records[0];
    if (first) {
      const headerMap = {};
      for (const h of Object.keys(first)) headerMap[h] = normalizeKey(h);
      // if any header was changed, remap all objects
      const anyChanged = Object.keys(headerMap).some(k => headerMap[k] !== k);
      if (anyChanged) {
        return records.map(rec => {
          const out = {};
          for (const [orig, mapped] of Object.entries(headerMap)) {
            out[mapped] = rec[orig];
          }
          return out;
        });
      }
    }

    return records;
  }

  async function tryFetchCsv(csvUrl) {
    try {
      const r = await fetch(csvUrl);
      if (!r.ok) throw new Error('CSV fetch failed ' + r.status);
      const txt = await r.text();
      return parseCSV(txt);
    } catch (err) {
      console.warn('CSV fetch/parse failed for', csvUrl, err);
      throw err;
    }
  }

  try {
    // If caller passed a CSV URL directly, skip metadata discovery and parse CSV
    if (typeof metadataUrl === 'string' && metadataUrl.toLowerCase().includes('.csv')) {
      return await tryFetchCsv(metadataUrl);
    }
    const metaResp = await fetch(metadataUrl);
    if (!metaResp.ok) throw new Error('Metadata fetch failed ' + metaResp.status);
    const meta = await metaResp.json();

    // If metadata directly contains a data array
    if (Array.isArray(meta.data)) return meta.data;
    if (Array.isArray(meta.values)) return meta.values;

    // If metadata contains structured data (columns/rows)
    // e.g. meta.data = { columns: [{name: 'Entity'}, ...], rows: [[...],[...]] }
    if (meta.data && typeof meta.data === 'object') {
      const d = meta.data;
      if (Array.isArray(d.columns) && Array.isArray(d.rows)) {
        const headers = d.columns.map(c => (c && c.name) ? c.name : String(c));
        return d.rows.map(row => {
          const obj = {};
          for (let i = 0; i < headers.length; i++) obj[headers[i]] = row[i] === undefined ? '' : row[i];
          return obj;
        });
      }
      // If meta.data is an object of arrays (columnName -> array of values)
      const keys = Object.keys(d);
      if (keys.length > 0) {
        const isColumnArrays = keys.every(k => Array.isArray(d[k]));
        if (isColumnArrays) {
          const len = d[keys[0]].length;
          const records = [];
          for (let i = 0; i < len; i++) {
            const obj = {};
            for (const k of keys) obj[k] = d[k][i];
            records.push(obj);
          }
          return records;
        }
      }
    }

    // Try common metadata fields for a CSV or data URL
    const candidates = [];
    if (meta.csv_url) candidates.push(meta.csv_url);
    if (meta.data_url) candidates.push(meta.data_url);
    if (meta.resources && Array.isArray(meta.resources)) {
      meta.resources.forEach(r => {
        if (r.path && r.path.endsWith('.csv')) candidates.push(r.path);
      });
    }
    // Also check for strings that include '.csv'
    for (const v of Object.values(meta)) {
      if (typeof v === 'string' && v.includes('.csv')) candidates.push(v);
    }

    // Normalize candidate URLs (some are relative)
    const resolved = candidates.map(u => {
      try {
        return new URL(u, metadataUrl).toString();
      } catch (e) {
        return u;
      }
    });

    for (const csvUrl of resolved) {
      try {
        const parsed = await tryFetchCsv(csvUrl);
        console.info('Loaded OWID CSV from', csvUrl);
        // quick validation: ensure parsed records contain Entity/Year or log helpful info
        if (parsed.length > 0) {
          const keys = Object.keys(parsed[0]);
          const hasEntity = keys.some(k => k.toLowerCase() === 'entity' || k.toLowerCase() === 'country' || k.toLowerCase() === 'location');
          const hasYear = keys.some(k => k.toLowerCase() === 'year' || k.toLowerCase() === 'time' || k.toLowerCase() === 'date');
          if (!hasEntity || !hasYear) {
            console.warn('OWID CSV parsed but does not contain Entity/Year headers. Keys found:', keys.slice(0,10));
          }
        } else {
          console.warn('OWID CSV parsed but returned 0 records for', csvUrl);
        }
        return parsed;
      } catch (err) {
        // try next
      }
    }

    throw new Error('No usable data found in metadata');
  } catch (err) {
    console.warn('fetchOwIDData error for', metadataUrl, err);
    if (localFallbackUrl) {
      try {
        const r2 = await fetch(localFallbackUrl);
        if (!r2.ok) throw new Error('Local fallback fetch failed ' + r2.status);
        const j = await r2.json();
        console.info('Using local fallback data for', localFallbackUrl);
        return j;
      } catch (err2) {
        console.error('Local fallback also failed', err2);
        throw err2;
      }
    }
    throw err;
  }
}

async function fetchData() {
  try {
    const [data, dataFish, dataFishPerCapita, dataAnimalsPerCapita] = await Promise.all([
      fetchOwIDData('https://ourworldindata.org/grapher/animals-slaughtered-for-meat.csv?v=1&csvType=full&useColumnShortNames=false'),
      fetchOwIDData('https://ourworldindata.org/grapher/fish-seafood-production.csv?v=1&csvType=full&useColumnShortNames=false'),
      fetchOwIDData('https://ourworldindata.org/grapher/fish-and-seafood-consumption-per-capita.csv?v=1&csvType=full&useColumnShortNames=false'),
      fetchOwIDData('https://ourworldindata.org/grapher/per-capita-meat-consumption-by-type-kilograms-per-year.csv?v=1&csvType=full&useColumnShortNames=false'),
    ]);

    // data variables already resolved via fetchOwIDData above
    //Testing
    // const argentinaData = data.find(
    //   (item) => item.Entity === "Argentina" && item.Year === "2023"
    // ); // Find Argentina data
    // // const goatCountArg= ["Meat, goat | 00001017 || Producing or slaughtered animals | 005320 || animals"]
    // console.log(
    //   `Meat, goat animals in Argentina:`,
    //   argentinaData[
    //     "Meat, goat | 00001017 || Producing or slaughtered animals | 005320 || animals"
    //   ]
    // );
    //Assigning each Country data from the new Json file

    const worldData = {
      ...data.find((item) => item.Entity === "World" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "World" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "World" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "World" && item.Year === "2022"
      ),
      // Find World data
    };
    const argentinaData = {
      ...data.find(
        (item) => item.Entity === "Argentina" && item.Year === "2023"
      ),
      ...dataFish.find(
        (item) => item.Entity === "Argentina" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Argentina" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Argentina" && item.Year === "2022"
      ),
    }; // Find Argentina data

    const australiaData = {
      ...data.find(
        (item) => item.Entity === "Australia" && item.Year === "2023"
      ),
      ...dataFish.find(
        (item) => item.Entity === "Australia" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Australia" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Australia" && item.Year === "2022"
      ),
    };

    const brazilData = {
      ...data.find((item) => item.Entity === "Brazil" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "Brazil" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Brazil" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Brazil" && item.Year === "2022"
      ),
    };

    const canadaData = {
      ...data.find((item) => item.Entity === "Canada" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "Canada" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Canada" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Canada" && item.Year === "2022"
      ),
    };

    const chinaData = {
      ...data.find((item) => item.Entity === "China" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "China" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "China" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "China" && item.Year === "2022"
      ),
    };

    const chileData = {
      ...data.find((item) => item.Entity === "Chile" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "Chile" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Chile" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Chile" && item.Year === "2022"
      ),
    };

    const colombiaData = {
      ...data.find(
        (item) => item.Entity === "Colombia" && item.Year === "2023"
      ),
      ...dataFish.find(
        (item) => item.Entity === "Colombia" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Colombia" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Colombia" && item.Year === "2022"
      ),
    };

    const ecuadorData = {
      ...data.find((item) => item.Entity === "Ecuador" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "Ecuador" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Ecuador" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Ecuador" && item.Year === "2022"
      ),
    };

    const franceData = {
      ...data.find((item) => item.Entity === "France" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "France" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "France" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "France" && item.Year === "2022"
      ),
    };

    const germanyData = {
      ...data.find((item) => item.Entity === "Germany" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "Germany" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Germany" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Germany" && item.Year === "2022"
      ),
    };

    const indiaData = {
      ...data.find((item) => item.Entity === "India" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "India" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "India" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "India" && item.Year === "2022"
      ),
    };

    const italyData = {
      ...data.find((item) => item.Entity === "Italy" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "Italy" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Italy" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Italy" && item.Year === "2022"
      ),
    };

    const iranData = {
      ...data.find((item) => item.Entity === "Iran" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "Iran" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Iran" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Iran" && item.Year === "2022"
      ),
    };

    const japanData = {
      ...data.find((item) => item.Entity === "Japan" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "Japan" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Japan" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Japan" && item.Year === "2022"
      ),
    };

    const mexicoData = {
      ...data.find((item) => item.Entity === "Mexico" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "Mexico" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Mexico" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Mexico" && item.Year === "2022"
      ),
    };

    const russiaData = {
      ...data.find((item) => item.Entity === "Russia" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "Russia" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Russia" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Russia" && item.Year === "2022"
      ),
    };

    const spainData = {
      ...data.find((item) => item.Entity === "Spain" && item.Year === "2023"),
      ...dataFish.find(
        (item) => item.Entity === "Spain" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Spain" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Spain" && item.Year === "2022"
      ),
    };

    const southAfricaData = {
      ...data.find(
        (item) => item.Entity === "South Africa" && item.Year === "2023"
      ),
      ...dataFish.find(
        (item) => item.Entity === "South Africa" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "South Africa" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "South Africa" && item.Year === "2022"
      ),
    };

    const ukData = {
      ...data.find(
        (item) => item.Entity === "United Kingdom" && item.Year === "2023"
      ),
      ...dataFish.find(
        (item) => item.Entity === "United Kingdom" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "United Kingdom" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "United Kingdom" && item.Year === "2022"
      ),
    };

    const usaData = {
      ...data.find(
        (item) => item.Entity === "United States" && item.Year === "2023"
      ),
      ...dataFish.find(
        (item) => item.Entity === "United States" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "United States" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "United States" && item.Year === "2022"
      ),
    };

    //Continents
    const africaData = {
      ...data.find((item) => item.Year === "2023" && item.Entity === "Africa"),
      ...dataFish.find(
        (item) => item.Entity === "Africa" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Africa" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Africa" && item.Year === "2022"
      ),
    };

    const asiaData = {
      ...data.find((item) => item.Year === "2023" && item.Entity === "Asia"),
      ...dataFish.find(
        (item) => item.Entity === "Asia" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Asia" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Asia" && item.Year === "2022"
      ),
    };

    const americasData = {
      ...data.find(
        (item) => item.Year === "2023" && item.Entity === "Americas (FAO)"
      ),
      ...dataFish.find(
        (item) => item.Entity === "Americas (FAO)" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Americas (FAO)" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Americas (FAO)" && item.Year === "2022"
      ),
    };

    const europeData = {
      ...data.find((item) => item.Year === "2023" && item.Entity === "Europe"),
      ...dataFish.find(
        (item) => item.Entity === "Europe" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Europe" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Europe" && item.Year === "2022"
      ),
    };

    const oceaniaData = {
      ...data.find((item) => item.Year === "2023" && item.Entity === "Oceania"),
      ...dataFish.find(
        (item) => item.Entity === "Oceania" && item.Year === "2022"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Oceania" && item.Year === "2022"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Oceania" && item.Year === "2022"
      ),
    };

    // console.log("Americas Fish:",americasData[
    // "Fish and seafood | 00002960 || Production | 005511 || tonnes"].toLocaleString());

    let noData = {
      yearly: "No data on this 😔",
      monthly: "No data on this 😔",
      daily: "No data on this 😔",
      hourly: "No data on this 😔",
      perMinute: "No data on this 😔",
      perSecond: "No data on this 😔",
    };

    let fetchHtml = {
      /*Population*/
  Population2020: 7840952880,
  Population2021: 7909295151,
  Population2022: 7975105156,
  Population2023: 8091734930,

      //Functions to format HTML data per country:
      /*COWS*/
      cowsData: {
        formatCowsData: function (cattle) {
          if (cattle) {
            return {
              yearly: Number(cattle).toLocaleString(),
              monthly: (cattle / 12).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              daily: (cattle / 365).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              hourly: (cattle / (365 * 24)).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              perMinute: (cattle / (365 * 24 * 60)).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              perSecond: (cattle / (365 * 24 * 60 * 60)).toLocaleString(
                undefined,
                { maximumFractionDigits: 2 }
              ),
            };
          } else if (cattle == 0) {
            return noData;
          }
        },

        buildCowsDataHTML: function (country, cowsData) {
          const formattedData = fetchHtml.cowsData.formatCowsData(cowsData);
          return `
          <p>Cattle in ${country}<fn>1</fn><br></p>
          <ul class="list">
            <li>Yearly: </li> <div>${formattedData.yearly}</div>
            <li>Monthly: </li> <div>${formattedData.monthly}</div>
            <li>Daily: </li> <div>${formattedData.daily}</div>
            <li>Hourly: </li> <div>${formattedData.hourly}</div>
            <li>Per minute: </li> <div>${formattedData.perMinute}</div>
            <li>Per second: </li> <div>${formattedData.perSecond}</div>
          </ul>
        `;
        },
      },
      /*PIGS*/
      pigsData: {
        formatPigsData: function (pigs) {
          if (pigs) {
            return {
              yearly: Number(pigs).toLocaleString(),
              monthly: (pigs / 12).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              daily: (pigs / 365).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              hourly: (pigs / (365 * 24)).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              perMinute: (pigs / (365 * 24 * 60)).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              perSecond: (pigs / (365 * 24 * 60 * 60)).toLocaleString(
                undefined,
                {
                  maximumFractionDigits: 2,
                }
              ),
            };
          } else if (pigs == 0) {
            return noData;
          }
        },

        buildPigsDataHTML: function (country, pigsData) {
          const formattedData = fetchHtml.pigsData.formatPigsData(pigsData);
          return `
          <p>Pigs in ${country}<fn>1</fn><br></p>
          <ul class="list">
            <li>Yearly: </li> <div>${formattedData.yearly}</div>
            <li>Monthly: </li> <div>${formattedData.monthly}</div>
            <li>Daily: </li> <div>${formattedData.daily}</div>
            <li>Hourly: </li> <div>${formattedData.hourly}</div>
            <li>Per minute: </li> <div>${formattedData.perMinute}</div>
            <li>Per second: </li> <div>${formattedData.perSecond}</div>
          </ul>
        `;
        },
      },
      /*SHEEP*/
      sheepData: {
        formatSheepData: function (sheep) {
          if (sheep) {
            return {
              yearly: Number(sheep).toLocaleString(),
              monthly: (sheep / 12).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              daily: (sheep / 365).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              hourly: (sheep / (365 * 24)).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              perMinute: (sheep / (365 * 24 * 60)).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              perSecond: (sheep / (365 * 24 * 60 * 60)).toLocaleString(
                undefined,
                {
                  maximumFractionDigits: 2,
                }
              ),
            };
          } else if (sheep == 0) {
            return noData;
          }
        },

        buildSheepDataHTML: function (country, sheepData) {
          const formattedData = fetchHtml.sheepData.formatSheepData(sheepData);
          return `
          <p>Sheep in ${country}<fn>1</fn><br></p>
          <ul class="list">
            <li>Yearly: </li> <div>${formattedData.yearly}</div>
            <li>Monthly: </li> <div>${formattedData.monthly}</div>
            <li>Daily: </li> <div>${formattedData.daily}</div>
            <li>Hourly: </li> <div>${formattedData.hourly}</div>
            <li>Per minute: </li> <div>${formattedData.perMinute}</div>
            <li>Per second: </li> <div>${formattedData.perSecond}</div>
          </ul>
        `;
        },
      },
      /*CHICKEN*/
      chickenData: {
        formatChickenData: function (chicken) {
          if (chicken) {
            return {
              yearly: Number(chicken).toLocaleString(),
              monthly: (chicken / 12).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              daily: (chicken / 365).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              hourly: (chicken / (365 * 24)).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              perMinute: (chicken / (365 * 24 * 60)).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              perSecond: (chicken / (365 * 24 * 60 * 60)).toLocaleString(
                undefined,
                {
                  maximumFractionDigits: 2,
                }
              ),
            };
          } else if (chicken == 0) {
            return noData;
          }
        },

        buildChickenDataHTML: function (country, chickenData) {
          const formattedData =
            fetchHtml.chickenData.formatChickenData(chickenData);
          return `
          <p>Chicken in ${country}<fn>1</fn><br></p>
          <ul class="list">
            <li>Yearly: </li> <div>${formattedData.yearly}</div>
            <li>Monthly: </li> <div>${formattedData.monthly}</div>
            <li>Daily: </li> <div>${formattedData.daily}</div>
            <li>Hourly: </li> <div>${formattedData.hourly}</div>
            <li>Per minute: </li> <div>${formattedData.perMinute}</div>
            <li>Per second: </li> <div>${formattedData.perSecond}</div>
          </ul>
        `;
        },
      },
      /*TURKEY*/
      turkeyData: {
        formatTurkeyData: function (turkey) {
          if (turkey) {
            return {
              yearly: Number(turkey).toLocaleString(),
              monthly: (turkey / 12).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              daily: (turkey / 365).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              hourly: (turkey / (365 * 24)).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              perMinute: (turkey / (365 * 24 * 60)).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              perSecond: (turkey / (365 * 24 * 60 * 60)).toLocaleString(
                undefined,
                {
                  maximumFractionDigits: 2,
                }
              ),
            };
          } else if (turkey == 0) {
            return noData;
          }
        },

        buildTurkeyDataHTML: function (country, turkeyData) {
          const formattedData =
            fetchHtml.turkeyData.formatTurkeyData(turkeyData);
          return `
          <p>Turkey in ${country}<fn>1</fn><br></p>
          <ul class="list">
            <li>Yearly: </li> <div>${formattedData.yearly}</div>
            <li>Monthly: </li> <div>${formattedData.monthly}</div>
            <li>Daily: </li> <div>${formattedData.daily}</div>
            <li>Hourly: </li> <div>${formattedData.hourly}</div>
            <li>Per minute: </li> <div>${formattedData.perMinute}</div>
            <li>Per second: </li> <div>${formattedData.perSecond}</div>
          </ul>
        `;
        },
      },
      /*FISH*/
      fishData: {
        formatFishData: function (fishTonnes) {
          if (fishTonnes) {
            return {
              yearly: Number(fishTonnes).toLocaleString(),
              monthly: (fishTonnes / 12).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              daily: (fishTonnes / 365).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              hourly: (fishTonnes / (365 * 24)).toLocaleString(undefined, {
                maximumFractionDigits: 0,
              }),
              perMinute: (fishTonnes / (365 * 24 * 60)).toLocaleString(
                undefined,
                { maximumFractionDigits: 0 }
              ),
              perSecond: (fishTonnes / (365 * 24 * 60 * 60)).toLocaleString(
                undefined,
                { maximumFractionDigits: 2 }
              ),
            };
          } else if (fishTonnes == 0) {
            return noData;
          }
        },

        buildFishDataHTML: function (country, fishTonnesData) {
          const formattedData =
            fetchHtml.fishData.formatFishData(fishTonnesData);
          return `
          <p>Sea animals in ${country}<br> (measured in Tonnes)<fn>2</fn></p>
          <ul class="list">
            <li>Yearly: </li> <div>${formattedData.yearly}</div>
            <li>Monthly: </li> <div>${formattedData.monthly}</div>
            <li>Daily: </li> <div>${formattedData.daily}</div>
            <li>Hourly: </li> <div>${formattedData.hourly}</div>
            <li>Per minute: </li> <div>${formattedData.perMinute}</div>
            <li>Per second: </li> <div>${formattedData.perSecond}</div>
          </ul>
        `;
        },
      },

      capitaMeatKgText: `<h2 class="centered-title">Kilograms consumed per capita - 2022</h2>
        <div class="chart-container" >
        <canvas id="capitaAnimals"></canvas>
        </div>
        <p class="legend" ><span id="capitaTotal"></span> kg. of animals were consumed per person in 2022<span id="countryname"></span><fn> 3,4</fn>.</p>`,

      toggleLegend5AnimalsText: `<fn>3,4</fn>Animal kilograms consumed per person yearly. The sum equals the Chart by Totals.`,

      toggleBtnTextTotal: "Display chart by totals",
      toggleBtnTextAnimals: "Display chart by animals",

      toggleLegend5TotalsText: `<fn>3,4</fn>Total animal kilograms (land + sea animals) consumed per person, <span id="totalKg2022"></span> in <strong>2022</strong>.`,
    };

    /////HTML Formatted inside fetchHtml object

    function assignAnimalData() {
      const countries = [
        { name: "the World", data: worldData, code: "World" },
        { name: "Africa", data: africaData, code: "Africa" },
        { name: "the Americas", data: americasData, code: "Americas" },
        { name: "Asia", data: asiaData, code: "Asia" },
        { name: "Europe", data: europeData, code: "Europe" },
        { name: "Oceania", data: oceaniaData, code: "Oceania" },
        { name: "Argentina", data: argentinaData, code: "Argentina" },
        { name: "Australia", data: australiaData, code: "Australia" },
        { name: "Brazil", data: brazilData, code: "Brazil" },
        { name: "Canada", data: canadaData, code: "Canada" },
        { name: "Chile", data: chileData, code: "Chile" },
        { name: "China", data: chinaData, code: "China" },
        { name: "Colombia", data: colombiaData, code: "Colombia" },
        { name: "Ecuador", data: ecuadorData, code: "Ecuador" },
        { name: "France", data: franceData, code: "France" },
        { name: "Germany", data: germanyData, code: "Germany" },
        { name: "India", data: indiaData, code: "India" },
        { name: "Japan", data: japanData, code: "Japan" },
        { name: "Mexico", data: mexicoData, code: "Mexico" },
        { name: "Russia", data: russiaData, code: "Russia" },
        { name: "Spain", data: spainData, code: "Spain" },
        { name: "South Africa", data: southAfricaData, code: "SouthAfrica" },
        { name: "the United Kingdom", data: ukData, code: "Uk" },
        { name: "the United States", data: usaData, code: "Usa" },
      ];

      /*LAND ANIMALS TOTAL > to retrieve use: fetchHtml.landAnimalsCountry */
      countries.forEach((country) => {
        fetchHtml[`landAnimals${country.code}`] =
          Number(
            country.data[
              "Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"
            ]
          ) +
          Number(
            country.data[
              "Meat, pig | 00001035 || Producing or slaughtered animals | 005320 || animals"
            ]
          ) +
          Number(
            country.data[
              "Meat, lamb and mutton | 00000977 || Producing or slaughtered animals | 005320 || animals"
            ]
          ) +
          Number(
            country.data[
              "Meat, chicken | 00001058 || Producing or slaughtered animals | 005321 || animals"
            ]
          ) +
          Number(
            country.data[
              "Meat, turkey | 00001080 || Producing or slaughtered animals | 005321 || animals"
            ]
          ) +
          Number(
            country.data[
              "Meat, goat | 00001017 || Producing or slaughtered animals | 005320 || animals"
            ]
          ) +
          Number(
            country.data[
              "Meat, duck | 00001069 || Producing or slaughtered animals | 005321 || animals"
            ]
          );
      });
       //console.log("World land animals", fetchHtml.landAnimalsWorld);

      /*ANIMALS FORMATTED IN HTML*/
      //////COWS > to retrieve use: fetchHtml.cowsDataWorld
      countries.forEach((country) => {
        fetchHtml[`cowsData${country.code}`] =
          fetchHtml.cowsData.buildCowsDataHTML(
            country.name,
            country.data[
              "Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"
            ]
          );
        fetchHtml[`cowsTotal${country.code}`] =
          country.data[
            "Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"
          ];
      });
      //////PIGS > to retrieve use: fetchHtml.pigsDataWorld
      countries.forEach((country) => {
        fetchHtml[`pigsData${country.code}`] =
          fetchHtml.pigsData.buildPigsDataHTML(
            country.name,
            country.data[
              "Meat, pig | 00001035 || Producing or slaughtered animals | 005320 || animals"
            ]
          );
        fetchHtml[`pigsTotal${country.code}`] =
          country.data[
            "Meat, pig | 00001035 || Producing or slaughtered animals | 005320 || animals"
          ];
      });
      //////SHEEP > to retrieve use: fetchHtml.sheepDataWorld
      countries.forEach((country) => {
        fetchHtml[`sheepData${country.code}`] =
          fetchHtml.sheepData.buildSheepDataHTML(
            country.name,
            country.data[
              "Meat, lamb and mutton | 00000977 || Producing or slaughtered animals | 005320 || animals"
            ]
          );
        fetchHtml[`sheepTotal${country.code}`] =
          country.data[
            "Meat, lamb and mutton | 00000977 || Producing or slaughtered animals | 005320 || animals"
          ];
      });
      //////CHICKEN > to retrieve use: fetchHtml.chickenDataWorld
      countries.forEach((country) => {
        fetchHtml[`chickenData${country.code}`] =
          fetchHtml.chickenData.buildChickenDataHTML(
            country.name,
            country.data[
              "Meat, chicken | 00001058 || Producing or slaughtered animals | 005321 || animals"
            ]
          );
        fetchHtml[`chickenTotal${country.code}`] =
          country.data[
            "Meat, chicken | 00001058 || Producing or slaughtered animals | 005321 || animals"
          ];
      });
      //////TURKEY > to retrieve use: fetchHtml.turkeyDataWorld
      countries.forEach((country) => {
        fetchHtml[`turkeyData${country.code}`] =
          fetchHtml.turkeyData.buildTurkeyDataHTML(
            country.name,
            country.data[
              "Meat, turkey | 00001080 || Producing or slaughtered animals | 005321 || animals"
            ]
          );
        fetchHtml[`turkeyTotal${country.code}`] =
          country.data[
            "Meat, turkey | 00001080 || Producing or slaughtered animals | 005321 || animals"
          ];
      });
      //////FISH > to retrieve use: fetchHtml.fishDataWorld
      countries.forEach((country) => {
        fetchHtml[`fishData${country.code}`] =
          fetchHtml.fishData.buildFishDataHTML(
            country.name,

            country.data[
              "Fish and seafood | 00002960 || Production | 005511 || tonnes"
            ]
          );
        fetchHtml[`fishTotal${country.code}`] =
          country.data[
            "Fish and seafood | 00002960 || Production | 005511 || tonnes"
          ];
      });
      /*FISH KG PER CAPITA*/
      //to retrieve: fethcHtml.fishKgPerCapitaWorld
      countries.forEach((country) => {
        fetchHtml[`fishKgPerCapita${country.code}`] = Number(
          country.data[
            "Fish and seafood | 00002960 || Food available for consumption | 0645pc || kilograms per year per capita"
          ]
        );
      });

      /*LAND ANIMALS KG PER CAPITA*/
      //to retrieve: fetchHtml."animal"KgPerCapita"country.code"
      countries.forEach((country) => {
        fetchHtml[`cowsKgPerCapita${country.code}`] = Number(
          country.data[
            "Meat, beef and buffalo | 00002731 || Food available for consumption | 0645pc || kilograms per year per capita"
          ]
        );
        fetchHtml[`pigsKgPerCapita${country.code}`] = Number(
          country.data[
            "Meat, pig | 00002733 || Food available for consumption | 0645pc || kilograms per year per capita"
          ]
        );
        fetchHtml[`sheepKgPerCapita${country.code}`] = Number(
          country.data[
            "Meat, sheep and goat | 00002732 || Food available for consumption | 0645pc || kilograms per year per capita"
          ]
        );
        fetchHtml[`poultryKgPerCapita${country.code}`] = Number(
          country.data[
            "Meat, poultry | 00002734 || Food available for consumption | 0645pc || kilograms per year per capita"
          ]
        );
        fetchHtml[`othersKgPerCapita${country.code}`] = Number(
          country.data[
            "Meat, Other | 00002735 || Food available for consumption | 0645pc || kilograms per year per capita"
          ]
        );
      });
    }

    assignAnimalData();

    return [data, fetchHtml]; // Return the parsed data and the object holding the html elements
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

// export { fetchData };
