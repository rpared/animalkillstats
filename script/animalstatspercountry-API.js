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
      // Treat 200 OK and 304 Not Modified (cached) as usable responses
      if (!r.ok && r.status !== 304) throw new Error('CSV fetch failed ' + r.status);
      const txt = await r.text();
      if (!txt || txt.trim() === '') {
        console.warn('CSV fetch returned empty body (status ' + r.status + ') for', csvUrl);
      }
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

    // safe numeric conversion: returns finite number or 0
    const toNum = (v) => {
      const n = Number(v);
      return Number.isFinite(n) ? n : 0;
    };

    // Helper to find a metric value in a parsed record.
    // Accepts explicit long-key candidates and fallback substrings to search keys.
    function findMetric(record, longKeys = [], substrings = []) {
      if (!record || typeof record !== 'object') return undefined;
      for (const k of longKeys) {
        if (Object.prototype.hasOwnProperty.call(record, k) && record[k] !== '') return record[k];
      }
      const keys = Object.keys(record);
      // Prefer keys that explicitly indicate per-capita / kilograms, but only
      // when the caller's substrings or longKeys suggest a per-capita lookup.
      const perCapitaIndicators = ['0645pc', 'kilograms', 'kilogram', 'kg per capita', 'per capita'];
      const callerWantsPerCapita = (
        substrings.some(s => perCapitaIndicators.some(pi => s.toLowerCase().includes(pi))) ||
        longKeys.some(k => perCapitaIndicators.some(pi => k.toLowerCase().includes(pi)))
      );
      if (callerWantsPerCapita) {
        const prioritySubs = perCapitaIndicators;
        for (const p of prioritySubs) {
          const found = keys.find((kk) => kk.toLowerCase().includes(p));
          if (found && record[found] !== '') return record[found];
        }
      }
      // Fallback: search using provided substrings in order.
      // If multiple keys match a substring prefer the most plausible numeric value
      // (per-capita values are small numbers, totals are very large).
      for (const sub of substrings) {
        const matches = keys.filter((kk) => kk.toLowerCase().includes(sub.toLowerCase()));
        if (matches.length === 0) continue;
        // Map matches to numeric values where possible
        const mapped = matches.map((k) => {
          const raw = record[k];
          const n = Number(raw);
          return { key: k, raw, n, ok: Number.isFinite(n) };
        });
        if (callerWantsPerCapita) {
          // Prefer finite numbers under a reasonable per-capita threshold (1000 kg)
          const plausible = mapped.filter(m => m.ok && Math.abs(m.n) < 1000);
          if (plausible.length > 0) {
            // choose the one with smallest absolute value (most likely per-capita)
            plausible.sort((a,b) => Math.abs(a.n) - Math.abs(b.n));
            return record[plausible[0].key];
          }
          // Otherwise choose the smallest finite number if any
          const finite = mapped.filter(m => m.ok);
          if (finite.length > 0) {
            finite.sort((a,b) => Math.abs(a.n) - Math.abs(b.n));
            return record[finite[0].key];
          }
        } else {
          // Caller likely wants totals/production: prefer large numeric values (e.g., tonnes/total counts)
          const large = mapped.filter(m => m.ok && Math.abs(m.n) >= 1000);
          if (large.length > 0) {
            // choose the largest absolute value (most likely total/production)
            large.sort((a,b) => Math.abs(b.n) - Math.abs(a.n));
            return record[large[0].key];
          }
          // Fallback: choose the largest finite number if any
          const finite = mapped.filter(m => m.ok);
          if (finite.length > 0) {
            finite.sort((a,b) => Math.abs(b.n) - Math.abs(a.n));
            return record[finite[0].key];
          }
        }
        // If nothing numeric, return first non-empty textual match
        const textual = mapped.find(m => m.raw !== '');
        if (textual) return record[textual.key];
      }
      return undefined;
    }

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
      ...(data.find((item) => item.Entity === "World" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "World" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "World" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "World" && item.Year === "2022") || {}),
    };
    const argentinaData = {
      ...(data.find((item) => item.Entity === "Argentina" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "Argentina" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Argentina" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Argentina" && item.Year === "2022") || {}),
    };

    const australiaData = {
      ...(data.find((item) => item.Entity === "Australia" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "Australia" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Australia" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Australia" && item.Year === "2022") || {}),
    };

    const brazilData = {
      ...(data.find((item) => item.Entity === "Brazil" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "Brazil" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Brazil" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Brazil" && item.Year === "2022") || {}),
    };

    const canadaData = {
      ...(data.find((item) => item.Entity === "Canada" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "Canada" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Canada" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Canada" && item.Year === "2022") || {}),
    };

    const chinaData = {
      ...(data.find((item) => item.Entity === "China" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "China" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "China" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "China" && item.Year === "2022") || {}),
    };

    const chileData = {
      ...(data.find((item) => item.Entity === "Chile" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "Chile" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Chile" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Chile" && item.Year === "2022") || {}),
    };

    const colombiaData = {
      ...(data.find((item) => item.Entity === "Colombia" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "Colombia" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Colombia" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Colombia" && item.Year === "2022") || {}),
    };

    const ecuadorData = {
      ...(data.find((item) => item.Entity === "Ecuador" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "Ecuador" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Ecuador" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Ecuador" && item.Year === "2022") || {}),
    };

    const franceData = {
      ...(data.find((item) => item.Entity === "France" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "France" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "France" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "France" && item.Year === "2022") || {}),
    };

    const germanyData = {
      ...(data.find((item) => item.Entity === "Germany" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "Germany" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Germany" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Germany" && item.Year === "2022") || {}),
    };

    const indiaData = {
      ...(data.find((item) => item.Entity === "India" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "India" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "India" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "India" && item.Year === "2022") || {}),
    };

    const italyData = {
      ...(data.find((item) => item.Entity === "Italy" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "Italy" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Italy" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Italy" && item.Year === "2022") || {}),
    };

    const iranData = {
      ...(data.find((item) => item.Entity === "Iran" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "Iran" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Iran" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Iran" && item.Year === "2022") || {}),
    };

    const japanData = {
      ...(data.find((item) => item.Entity === "Japan" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "Japan" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Japan" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Japan" && item.Year === "2022") || {}),
    };

    const mexicoData = {
      ...(data.find((item) => item.Entity === "Mexico" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "Mexico" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Mexico" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Mexico" && item.Year === "2022") || {}),
    };

    const russiaData = {
      ...(data.find((item) => item.Entity === "Russia" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "Russia" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Russia" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Russia" && item.Year === "2022") || {}),
    };

    const spainData = {
      ...(data.find((item) => item.Entity === "Spain" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "Spain" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Spain" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Spain" && item.Year === "2022") || {}),
    };

    const southAfricaData = {
      ...(data.find((item) => item.Entity === "South Africa" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "South Africa" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "South Africa" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "South Africa" && item.Year === "2022") || {}),
    };

    const ukData = {
      ...(data.find((item) => item.Entity === "United Kingdom" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "United Kingdom" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "United Kingdom" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "United Kingdom" && item.Year === "2022") || {}),
    };

    const usaData = {
      ...(data.find((item) => item.Entity === "United States" && item.Year === "2023") || {}),
      ...(dataFish.find((item) => item.Entity === "United States" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "United States" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "United States" && item.Year === "2022") || {}),
    };

    //Continents
    const africaData = {
      ...(data.find((item) => item.Year === "2023" && item.Entity === "Africa") || {}),
      ...(dataFish.find((item) => item.Entity === "Africa" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Africa" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Africa" && item.Year === "2022") || {}),
    };

    const asiaData = {
      ...(data.find((item) => item.Year === "2023" && item.Entity === "Asia") || {}),
      ...(dataFish.find((item) => item.Entity === "Asia" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Asia" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Asia" && item.Year === "2022") || {}),
    };

    const americasData = {
      ...(data.find((item) => item.Year === "2023" && item.Entity === "Americas (FAO)") || {}),
      ...(dataFish.find((item) => item.Entity === "Americas (FAO)" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Americas (FAO)" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Americas (FAO)" && item.Year === "2022") || {}),
    };

    const europeData = {
      ...(data.find((item) => item.Year === "2023" && item.Entity === "Europe") || {}),
      ...(dataFish.find((item) => item.Entity === "Europe" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Europe" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Europe" && item.Year === "2022") || {}),
    };

    const oceaniaData = {
      ...(data.find((item) => item.Year === "2023" && item.Entity === "Oceania") || {}),
      ...(dataFish.find((item) => item.Entity === "Oceania" && item.Year === "2022") || {}),
      ...(dataFishPerCapita.find((item) => item.Entity === "Oceania" && item.Year === "2022") || {}),
      ...(dataAnimalsPerCapita.find((item) => item.Entity === "Oceania" && item.Year === "2022") || {}),
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
          const v = toNum(cattle);
          if (v > 0) {
            return {
              yearly: v.toLocaleString(),
              monthly: (v / 12).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              daily: (v / 365).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              hourly: (v / (365 * 24)).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              perMinute: (v / (365 * 24 * 60)).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              perSecond: (v / (365 * 24 * 60 * 60)).toLocaleString(undefined, { maximumFractionDigits: 2 }),
            };
          }
          return noData;
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
          const v = toNum(pigs);
          if (v > 0) {
            return {
              yearly: v.toLocaleString(),
              monthly: (v / 12).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              daily: (v / 365).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              hourly: (v / (365 * 24)).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              perMinute: (v / (365 * 24 * 60)).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              perSecond: (v / (365 * 24 * 60 * 60)).toLocaleString(undefined, { maximumFractionDigits: 2 }),
            };
          }
          return noData;
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
          const v = toNum(sheep);
          if (v > 0) {
            return {
              yearly: v.toLocaleString(),
              monthly: (v / 12).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              daily: (v / 365).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              hourly: (v / (365 * 24)).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              perMinute: (v / (365 * 24 * 60)).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              perSecond: (v / (365 * 24 * 60 * 60)).toLocaleString(undefined, { maximumFractionDigits: 2 }),
            };
          }
          return noData;
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
          const v = toNum(chicken);
          if (v > 0) {
            return {
              yearly: v.toLocaleString(),
              monthly: (v / 12).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              daily: (v / 365).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              hourly: (v / (365 * 24)).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              perMinute: (v / (365 * 24 * 60)).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              perSecond: (v / (365 * 24 * 60 * 60)).toLocaleString(undefined, { maximumFractionDigits: 2 }),
            };
          }
          return noData;
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
          const v = toNum(turkey);
          if (v > 0) {
            return {
              yearly: v.toLocaleString(),
              monthly: (v / 12).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              daily: (v / 365).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              hourly: (v / (365 * 24)).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              perMinute: (v / (365 * 24 * 60)).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              perSecond: (v / (365 * 24 * 60 * 60)).toLocaleString(undefined, { maximumFractionDigits: 2 }),
            };
          }
          return noData;
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
          const v = toNum(fishTonnes);
          if (v > 0) {
            return {
              yearly: v.toLocaleString(),
              monthly: (v / 12).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              daily: (v / 365).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              hourly: (v / (365 * 24)).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              perMinute: (v / (365 * 24 * 60)).toLocaleString(undefined, { maximumFractionDigits: 0 }),
              perSecond: (v / (365 * 24 * 60 * 60)).toLocaleString(undefined, { maximumFractionDigits: 2 }),
            };
          }
          return noData;
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
        const cattle = toNum(findMetric(country.data, [
          "Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"
        ], ['cattle', 'beef']));
        const pigs = toNum(findMetric(country.data, [
          "Meat, pig | 00001035 || Producing or slaughtered animals | 005320 || animals"
        ], ['pig', 'pigs']));
        const sheep = toNum(findMetric(country.data, [
          "Meat, lamb and mutton | 00000977 || Producing or slaughtered animals | 005320 || animals"
        ], ['sheep', 'lamb', 'mutton']));
        const chicken = toNum(findMetric(country.data, [
          "Meat, chicken | 00001058 || Producing or slaughtered animals | 005321 || animals"
        ], ['chicken']));
        const turkey = toNum(findMetric(country.data, [
          "Meat, turkey | 00001080 || Producing or slaughtered animals | 005321 || animals"
        ], ['turkey']));
        const goat = toNum(findMetric(country.data, [
          "Meat, goat | 00001017 || Producing or slaughtered animals | 005320 || animals"
        ], ['goat']));
        const duck = toNum(findMetric(country.data, [
          "Meat, duck | 00001069 || Producing or slaughtered animals | 005321 || animals"
        ], ['duck']));

        fetchHtml[`landAnimals${country.code}`] = cattle + pigs + sheep + chicken + turkey + goat + duck;
      });
       //console.log("World land animals", fetchHtml.landAnimalsWorld);

      /*ANIMALS FORMATTED IN HTML*/
      //////COWS > to retrieve use: fetchHtml.cowsDataWorld
      countries.forEach((country) => {
        const cattleVal = findMetric(country.data, [
          "Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"
        ], ['cattle', 'beef']);
        fetchHtml[`cowsData${country.code}`] = fetchHtml.cowsData.buildCowsDataHTML(country.name, cattleVal);
        fetchHtml[`cowsTotal${country.code}`] = toNum(cattleVal);
      });
      //////PIGS > to retrieve use: fetchHtml.pigsDataWorld
      countries.forEach((country) => {
        const pigsVal = findMetric(country.data, [
          "Meat, pig | 00001035 || Producing or slaughtered animals | 005320 || animals"
        ], ['pig', 'pigs']);
        fetchHtml[`pigsData${country.code}`] = fetchHtml.pigsData.buildPigsDataHTML(country.name, pigsVal);
        fetchHtml[`pigsTotal${country.code}`] = toNum(pigsVal);
      });
      //////SHEEP > to retrieve use: fetchHtml.sheepDataWorld
      countries.forEach((country) => {
        const sheepVal = findMetric(country.data, [
          "Meat, lamb and mutton | 00000977 || Producing or slaughtered animals | 005320 || animals"
        ], ['sheep', 'lamb', 'mutton']);
        fetchHtml[`sheepData${country.code}`] = fetchHtml.sheepData.buildSheepDataHTML(country.name, sheepVal);
        fetchHtml[`sheepTotal${country.code}`] = toNum(sheepVal);
      });
      //////CHICKEN > to retrieve use: fetchHtml.chickenDataWorld
      countries.forEach((country) => {
        const chickenVal = findMetric(country.data, [
          "Meat, chicken | 00001058 || Producing or slaughtered animals | 005321 || animals"
        ], ['chicken']);
        fetchHtml[`chickenData${country.code}`] = fetchHtml.chickenData.buildChickenDataHTML(country.name, chickenVal);
        fetchHtml[`chickenTotal${country.code}`] = toNum(chickenVal);
      });
      //////TURKEY > to retrieve use: fetchHtml.turkeyDataWorld
      countries.forEach((country) => {
        const turkeyVal = findMetric(country.data, [
          "Meat, turkey | 00001080 || Producing or slaughtered animals | 005321 || animals"
        ], ['turkey']);
        fetchHtml[`turkeyData${country.code}`] = fetchHtml.turkeyData.buildTurkeyDataHTML(country.name, turkeyVal);
        fetchHtml[`turkeyTotal${country.code}`] = toNum(turkeyVal);
      });
      //////FISH > to retrieve use: fetchHtml.fishDataWorld
      countries.forEach((country) => {
        const fishVal = findMetric(country.data, [
          "Fish and seafood | 00002960 || Production | 005511 || tonnes"
        ], ['fish', 'seafood']);
        fetchHtml[`fishData${country.code}`] = fetchHtml.fishData.buildFishDataHTML(country.name, fishVal);
        fetchHtml[`fishTotal${country.code}`] = toNum(fishVal);
      });
      /*FISH KG PER CAPITA*/
      //to retrieve: fetchHtml.fishKgPerCapitaWorld
      countries.forEach((country) => {
        const fishKg = findMetric(country.data, [
          "Fish and seafood | 00002960 || Food available for consumption | 0645pc || kilograms per year per capita"
        ], ['0645pc', 'kilograms', 'kilogram', 'kg per capita', 'fish', 'seafood']);
        fetchHtml[`fishKgPerCapita${country.code}`] = toNum(fishKg);
      });

      /*LAND ANIMALS KG PER CAPITA*/
      //to retrieve: fetchHtml."animal"KgPerCapita"country.code"
      countries.forEach((country) => {
        const cowsKg = findMetric(country.data, [
          "Meat, beef and buffalo | 00002731 || Food available for consumption | 0645pc || kilograms per year per capita"
        ], ['0645pc', 'kilograms', 'kilogram', 'kg per capita', 'beef', 'cattle']);
        const pigsKg = findMetric(country.data, [
          "Meat, pig | 00002733 || Food available for consumption | 0645pc || kilograms per year per capita"
        ], ['0645pc', 'kilograms', 'kilogram', 'kg per capita', 'pig', 'pigs']);
        const sheepKg = findMetric(country.data, [
          "Meat, sheep and goat | 00002732 || Food available for consumption | 0645pc || kilograms per year per capita"
        ], ['0645pc', 'kilograms', 'kilogram', 'kg per capita', 'sheep', 'goat', 'mutton']);
        const poultryKg = findMetric(country.data, [
          "Meat, poultry | 00002734 || Food available for consumption | 0645pc || kilograms per year per capita"
        ], ['0645pc', 'kilograms', 'kilogram', 'kg per capita', 'poultry', 'chicken']);
        const othersKg = findMetric(country.data, [
          "Meat, Other | 00002735 || Food available for consumption | 0645pc || kilograms per year per capita"
        ], ['0645pc', 'kilograms', 'kilogram', 'kg per capita', 'other']);

        fetchHtml[`cowsKgPerCapita${country.code}`] = toNum(cowsKg);
        fetchHtml[`pigsKgPerCapita${country.code}`] = toNum(pigsKg);
        fetchHtml[`sheepKgPerCapita${country.code}`] = toNum(sheepKg);
        fetchHtml[`poultryKgPerCapita${country.code}`] = toNum(poultryKg);
        fetchHtml[`othersKgPerCapita${country.code}`] = toNum(othersKg);
      });
    }

    assignAnimalData();

    // Debug: explicitly check presence of the OWID metric keys in worldData
    try {
      const targets = [
        "Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals",
        "Meat, pig | 00001035 || Producing or slaughtered animals | 005320 || animals",
        "Meat, lamb and mutton | 00000977 || Producing or slaughtered animals | 005320 || animals",
        "Meat, chicken | 00001058 || Producing or slaughtered animals | 005321 || animals",
        "Meat, turkey | 00001080 || Producing or slaughtered animals | 005321 || animals",
        "Fish and seafood | 00002960 || Production | 005511 || tonnes",
      ];
      const presence = targets.map((t) => ({
        key: t,
        present: Object.prototype.hasOwnProperty.call(worldData, t),
        value: worldData[t],
      }));
      console.log("AKS debug: target presence", presence);
      console.log("AKS debug: worldData keys length", Object.keys(worldData).length);
      console.log(
        "AKS debug: sample worldData",
        Object.fromEntries(
          Object.keys(worldData)
            .slice(0, 50)
            .map((k) => [k, worldData[k]])
        )
      );
      console.log("AKS debug: fetchHtml sample", {
        landAnimalsWorld: fetchHtml.landAnimalsWorld,
        cowsTotalWorld: fetchHtml.cowsTotalWorld,
        pigsTotalWorld: fetchHtml.pigsTotalWorld,
        sheepTotalWorld: fetchHtml.sheepTotalWorld,
        chickenTotalWorld: fetchHtml.chickenTotalWorld,
        turkeyTotalWorld: fetchHtml.turkeyTotalWorld,
        fishTotalWorld: fetchHtml.fishTotalWorld,
      });
    } catch (e) {
      console.warn("AKS debug failed", e);
    }

    return [data, fetchHtml]; // Return the parsed data and the object holding the html elements
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Expose the fetch promise so other scripts can await or inspect it
window.AKS_dataPromise = fetchData();

// export { fetchData };
