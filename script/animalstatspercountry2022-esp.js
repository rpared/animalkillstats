// Animal Stats per country

async function fetchData() {
  try {
    const [response1, response2, response3, response4] = await Promise.all([
      fetch("./script/LandAnimals2022.json"),
      fetch("./script/Fish2021.json"),
      fetch("./script/FishKilogramsPerCapita2021.json"),
      fetch("./script/LandAnimalsKgPerCapita2021.json"),
    ]);

    if (!response1.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (!response2.ok) {
      throw new Error(
        `HTTP error for second file! status: ${response2.status}`
      );
    }
    if (!response3.ok) {
      throw new Error(
        `HTTP error for second file! status: ${response2.status}`
      );
    }
    if (!response4.ok) {
      throw new Error(
        `HTTP error for second file! status: ${response2.status}`
      );
    }
    const [data, dataFish, dataFishPerCapita, dataAnimalsPerCapita] =
      await Promise.all([
        response1.json(),
        response2.json(),
        response3.json(),
        response4.json(),
      ]); // Parse the JSON response
    //Testing
    // const argentinaData = data.find(
    //   (item) => item.Entity === "Argentina" && item.Year === "2022"
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
      ...data.find((item) => item.Entity === "World" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "World" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "World" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "World" && item.Year === "2021"
      ),
      // Find World data
    };
    const argentinaData = {
      ...data.find(
        (item) => item.Entity === "Argentina" && item.Year === "2022"
      ),
      ...dataFish.find(
        (item) => item.Entity === "Argentina" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Argentina" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Argentina" && item.Year === "2021"
      ),
    }; // Find Argentina data

    const australiaData = {
      ...data.find(
        (item) => item.Entity === "Australia" && item.Year === "2022"
      ),
      ...dataFish.find(
        (item) => item.Entity === "Australia" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Australia" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Australia" && item.Year === "2021"
      ),
    };

    const brazilData = {
      ...data.find((item) => item.Entity === "Brazil" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "Brazil" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Brazil" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Brazil" && item.Year === "2021"
      ),
    };

    const canadaData = {
      ...data.find((item) => item.Entity === "Canada" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "Canada" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Canada" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Canada" && item.Year === "2021"
      ),
    };

    const chinaData = {
      ...data.find((item) => item.Entity === "China" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "China" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "China" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "China" && item.Year === "2021"
      ),
    };

    const colombiaData = {
      ...data.find(
        (item) => item.Entity === "Colombia" && item.Year === "2022"
      ),
      ...dataFish.find(
        (item) => item.Entity === "Colombia" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Colombia" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Colombia" && item.Year === "2021"
      ),
    };

    const chileData = {
      ...data.find((item) => item.Entity === "Chile" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "Chile" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Chile" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Chile" && item.Year === "2021"
      ),
    };

    const ecuadorData = {
      ...data.find((item) => item.Entity === "Ecuador" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "Ecuador" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Ecuador" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Ecuador" && item.Year === "2021"
      ),
    };

    const franceData = {
      ...data.find((item) => item.Entity === "France" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "France" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "France" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "France" && item.Year === "2021"
      ),
    };

    const germanyData = {
      ...data.find((item) => item.Entity === "Germany" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "Germany" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Germany" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Germany" && item.Year === "2021"
      ),
    };

    const indiaData = {
      ...data.find((item) => item.Entity === "India" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "India" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "India" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "India" && item.Year === "2021"
      ),
    };

    const italyData = {
      ...data.find((item) => item.Entity === "Italy" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "Italy" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Italy" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Italy" && item.Year === "2021"
      ),
    };

    const iranData = {
      ...data.find((item) => item.Entity === "Iran" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "Iran" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Iran" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Iran" && item.Year === "2021"
      ),
    };

    const japanData = {
      ...data.find((item) => item.Entity === "Japan" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "Japan" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Japan" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Japan" && item.Year === "2021"
      ),
    };

    const mexicoData = {
      ...data.find((item) => item.Entity === "Mexico" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "Mexico" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Mexico" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Mexico" && item.Year === "2021"
      ),
    };

    const russiaData = {
      ...data.find((item) => item.Entity === "Russia" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "Russia" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Russia" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Russia" && item.Year === "2021"
      ),
    };

    const spainData = {
      ...data.find((item) => item.Entity === "Spain" && item.Year === "2022"),
      ...dataFish.find(
        (item) => item.Entity === "Spain" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Spain" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Spain" && item.Year === "2021"
      ),
    };

    const southAfricaData = {
      ...data.find(
        (item) => item.Entity === "South Africa" && item.Year === "2022"
      ),
      ...dataFish.find(
        (item) => item.Entity === "South Africa" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "South Africa" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "South Africa" && item.Year === "2021"
      ),
    };

    const ukData = {
      ...data.find(
        (item) => item.Entity === "United Kingdom" && item.Year === "2022"
      ),
      ...dataFish.find(
        (item) => item.Entity === "United Kingdom" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "United Kingdom" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "United Kingdom" && item.Year === "2021"
      ),
    };

    const usaData = {
      ...data.find(
        (item) => item.Entity === "United States" && item.Year === "2022"
      ),
      ...dataFish.find(
        (item) => item.Entity === "United States" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "United States" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "United States" && item.Year === "2021"
      ),
    };

    //Continents
    const africaData = {
      ...data.find((item) => item.Year === "2022" && item.Entity === "Africa"),
      ...dataFish.find(
        (item) => item.Entity === "Africa" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Africa" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Africa" && item.Year === "2021"
      ),
    };

    const asiaData = {
      ...data.find((item) => item.Year === "2022" && item.Entity === "Asia"),
      ...dataFish.find(
        (item) => item.Entity === "Asia" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Asia" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Asia" && item.Year === "2021"
      ),
    };

    const americasData = {
      ...data.find(
        (item) => item.Year === "2022" && item.Entity === "Americas (FAO)"
      ),
      ...dataFish.find(
        (item) => item.Entity === "Americas (FAO)" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Americas (FAO)" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Americas (FAO)" && item.Year === "2021"
      ),
    };

    const europeData = {
      ...data.find((item) => item.Year === "2022" && item.Entity === "Europe"),
      ...dataFish.find(
        (item) => item.Entity === "Europe" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Europe" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Europe" && item.Year === "2021"
      ),
    };

    const oceaniaData = {
      ...data.find((item) => item.Year === "2022" && item.Entity === "Oceania"),
      ...dataFish.find(
        (item) => item.Entity === "Oceania" && item.Year === "2021"
      ),
      ...dataFishPerCapita.find(
        (item) => item.Entity === "Oceania" && item.Year === "2021"
      ),
      ...dataAnimalsPerCapita.find(
        (item) => item.Entity === "Oceania" && item.Year === "2021"
      ),
    };

    // console.log("World Fish:",worldData[
    //     "Fish and seafood | 00002960 || Production | 005511 || tonnes"].toLocaleString());

    let fetchHtml = {
      /*Population*/
      Population2020: 7840952880,
      Population2021: 7909295151,
      Population2022: 7975105156,

      /*COWS*/
      cowsData: {
        formatCowsData: function (cattle) {
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
        },

        buildCowsDataHTML: function (country, cowsData) {
          const formattedData = fetchHtml.cowsData.formatCowsData(cowsData);
          return `
          <p>Vacas en ${country}<fn>1</fn><br></p>
          <ul class="list">
            <li>Al año: </li> <div>${formattedData.yearly}</div>
            <li>Al mes: </li> <div>${formattedData.monthly}</div>
            <li>A diario: </li> <div>${formattedData.daily}</div>
            <li>Por hora: </li> <div>${formattedData.hourly}</div>
            <li>Por minuto: </li> <div>${formattedData.perMinute}</div>
            <li>Por segundo: </li> <div>${formattedData.perSecond}</div>
          </ul>
        `;
        },
      },
      /*PIGS*/
      pigsData: {
        formatPigsData: function (pigs) {
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
            perSecond: (pigs / (365 * 24 * 60 * 60)).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            }),
          };
        },

        buildPigsDataHTML: function (country, pigsData) {
          const formattedData = fetchHtml.pigsData.formatPigsData(pigsData);
          return `
          <p>Cerdos en ${country}<fn>1</fn><br></p>
          <ul class="list">
            <li>Al año: </li> <div>${formattedData.yearly}</div>
            <li>Al mes: </li> <div>${formattedData.monthly}</div>
            <li>A diario: </li> <div>${formattedData.daily}</div>
            <li>Por hora: </li> <div>${formattedData.hourly}</div>
            <li>Por minuto: </li> <div>${formattedData.perMinute}</div>
            <li>Por segundo: </li> <div>${formattedData.perSecond}</div>
          </ul>
        `;
        },
      },
      /*SHEEP*/
      sheepData: {
        formatSheepData: function (sheep) {
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
        },

        buildSheepDataHTML: function (country, sheepData) {
          const formattedData = fetchHtml.sheepData.formatSheepData(sheepData);
          return `
          <p>Ovejas en ${country}<fn>1</fn><br></p>
          <ul class="list">
            <li>Al año: </li> <div>${formattedData.yearly}</div>
            <li>Al mes: </li> <div>${formattedData.monthly}</div>
            <li>A diario: </li> <div>${formattedData.daily}</div>
            <li>Por hora: </li> <div>${formattedData.hourly}</div>
            <li>Por minuto: </li> <div>${formattedData.perMinute}</div>
            <li>Por segundo: </li> <div>${formattedData.perSecond}</div>
          </ul>
        `;
        },
      },
      /*CHICKEN*/
      chickenData: {
        formatChickenData: function (chicken) {
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
        },

        buildChickenDataHTML: function (country, chickenData) {
          const formattedData =
            fetchHtml.chickenData.formatChickenData(chickenData);
          return `
          <p>Pollos en ${country}<fn>1</fn><br></p>
          <ul class="list">
            <li>Al año: </li> <div>${formattedData.yearly}</div>
            <li>Al mes: </li> <div>${formattedData.monthly}</div>
            <li>A diario: </li> <div>${formattedData.daily}</div>
            <li>Por hora: </li> <div>${formattedData.hourly}</div>
            <li>Por minuto: </li> <div>${formattedData.perMinute}</div>
            <li>Por segundo: </li> <div>${formattedData.perSecond}</div>
          </ul>
        `;
        },
      },
      /*TURKEY*/
      turkeyData: {
        formatTurkeyData: function (turkey) {
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
        },

        buildTurkeyDataHTML: function (country, turkeyData) {
          const formattedData =
            fetchHtml.turkeyData.formatTurkeyData(turkeyData);
          return `
          <p>Pavos en ${country}<fn>1</fn><br></p>
          <ul class="list">
            <li>Al año: </li> <div>${formattedData.yearly}</div>
            <li>Al mes: </li> <div>${formattedData.monthly}</div>
            <li>A diario: </li> <div>${formattedData.daily}</div>
            <li>Por hora: </li> <div>${formattedData.hourly}</div>
            <li>Por minuto: </li> <div>${formattedData.perMinute}</div>
            <li>Por segundo: </li> <div>${formattedData.perSecond}</div>
          </ul>
        `;
        },
      },
      //Function to format HTML fish data per country
      fishData: {
        formatFishData: function (fishTonnes) {
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
        },

        buildFishDataHTML: function (country, fishTonnesData) {
          const formattedData =
            fetchHtml.fishData.formatFishData(fishTonnesData);
          return `
          <p>Animales marinos en ${country}<br> (medido en Toneladas)<fn>2</fn></p>
          <ul class="list">
            <li>Anual: </li> <div>${formattedData.yearly}</div>
            <li>Mensual: </li> <div>${formattedData.monthly}</div>
            <li>Diario: </li> <div>${formattedData.daily}</div>
            <li>Por hora: </li> <div>${formattedData.hourly}</div>
            <li>Por minuto: </li> <div>${formattedData.perMinute}</div>
            <li>Por segundo: </li> <div>${formattedData.perSecond}</div>
          </ul>
        `;
        },
      },

      capitaMeatKgText: `<h2>Kilogramos consumidos per capita - 2021</h2>
        <div class="chart-container" >
        <canvas id="capitaAnimals"></canvas>
        </div>
        <p class="legend" ><span id="capitaTotal"></span> kg. de animales fueron consumidos por persona en 2021<span id="countryname"></span><fn> 3,4</fn>.</p>`,

      toggleLegend5AnimalsText: `<fn>3,4</fn> Kilogramos de animales consumidos por persona al año. La suma totaliza el Gráfico de Totales.`,

      toggleBtnTextTotal: "Ver Totales",
      toggleBtnTextAnimals: "Ver por Animales",

      toggleLegend5TotalsText: `<fn>3,4</fn>Kilogramos totales de animales (terrestres + marinos) consumidos por persona, <span id="totalKg2020"></span> en <strong>2020</strong>.`,
    };

    /////HTML Formatted inside fetchHtml object

    function assignAnimalData() {
      const countries = [
        { name: "el mundo", data: worldData, code: "World" },
        { name: "África", data: africaData, code: "Africa" },
        { name: "América", data: americasData, code: "Americas" },
        { name: "Asia", data: asiaData, code: "Asia" },
        { name: "Europa", data: europeData, code: "Europe" },
        { name: "Oceanía", data: oceaniaData, code: "Oceania" },
        { name: "Argentina", data: argentinaData, code: "Argentina" },
        { name: "Australia", data: australiaData, code: "Australia" },
        { name: "Brasil", data: brazilData, code: "Brazil" },
        { name: "Canadá", data: canadaData, code: "Canada" },
        { name: "Chile", data: chileData, code: "Chile" },
        { name: "China", data: chinaData, code: "China" },
        { name: "Colombia", data: colombiaData, code: "Colombia" },
        { name: "Ecuador", data: ecuadorData, code: "Ecuador" },
        { name: "Francia", data: franceData, code: "France" },
        { name: "Alemania", data: germanyData, code: "Germany" },
        { name: "India", data: indiaData, code: "India" },
        { name: "Japón", data: japanData, code: "Japan" },
        { name: "México", data: mexicoData, code: "Mexico" },
        { name: "Rusia", data: russiaData, code: "Russia" },
        { name: "Sudáfrica", data: southAfricaData, code: "SouthAfrica" },
        { name: "España", data: spainData, code: "Spain" },
        { name: "el Reino Unido", data: ukData, code: "Uk" },
        { name: "los Estados Unidos", data: usaData, code: "Usa" },
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
            "Meat, beef | 00002731 || Food available for consumption | 0645pc || kilograms per year per capita"
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
