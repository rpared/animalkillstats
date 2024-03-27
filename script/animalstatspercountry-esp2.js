// Animal Stats per country

async function fetchData() {
  try {
    const response = await fetch("./script/AnimalKillStats2021.json"); // Replace with your JSON file path
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // Parse the JSON response

    console.log("World Cattle:", data.Worldwide.Cattle.toLocaleString()); // Example usage

    let fetchHtml = {
      /*COWS*/
      cowsData: {
        formatCowsData: function (cattle) {
          return {
            yearly: cattle.toLocaleString(),
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
            yearly: pigs.toLocaleString(),
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
            yearly: sheep.toLocaleString(),
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
            yearly: chicken.toLocaleString(),
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
            yearly: turkey.toLocaleString(),
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

      //FISH

      fishData: {
        formatFishData: function (fishTonnes) {
          return {
            yearly: fishTonnes.toLocaleString(),
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
          <p>Animales marinos en ${country}<br> (measured in Tonnes)<fn>2</fn></p>
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

      capitaMeatKgText: `<h2>Kilogramos consumidos per cápita - 2020</h2>
        <div class="chart-container" >
        <canvas id="capitaAnimals"></canvas>
        </div>
        <p class="legend" ><span id="capitaTotal"></span> kg. de animales fueron consumidos por persona en 2020<span id="countryname"></span><fn> 3,4</fn>.</p>`,

      toggleLegend5AnimalsText: `<fn>3,4</fn>Kilogramos animales consumidos por persona al año. La suma es igual al gráfico de Totales`,

      toggleBtnTextTotal: "Ver Totales",
      toggleBtnTextAnimals: "Ver por Animales",

      toggleLegend5TotalsText: `<fn>3,4</fn>Kilogramos animales totales (terrestres + marinos) consumidos por persona, <span id="totalKg2019"></span> en <strong>2020</strong>.`,
    };

    //COWS data formatted with function inside fetchHtml object
    function assignCowsData() {
      fetchHtml.cowsDataWorld = fetchHtml.cowsData.buildCowsDataHTML(
        "el mundo",
        data.Worldwide.Cattle
      );
      fetchHtml.cowsDataArgentina = fetchHtml.cowsData.buildCowsDataHTML(
        "Argentina",
        data.Argentina.Cattle
      );
      fetchHtml.cowsDataBrazil = fetchHtml.cowsData.buildCowsDataHTML(
        "Brasil",
        data.Brazil.Cattle
      );
      fetchHtml.cowsDataCanada = fetchHtml.cowsData.buildCowsDataHTML(
        "Canadá",
        data.Canada.Cattle
      );
      fetchHtml.cowsDataChina = fetchHtml.cowsData.buildCowsDataHTML(
        "China",
        data.China.Cattle
      );
      fetchHtml.cowsDataColombia = fetchHtml.cowsData.buildCowsDataHTML(
        "Colombia",
        data.Colombia.Cattle
      );
      fetchHtml.cowsDataEcuador = fetchHtml.cowsData.buildCowsDataHTML(
        "Ecuador",
        data.Ecuador.Cattle
      );
      fetchHtml.cowsDataGer = fetchHtml.cowsData.buildCowsDataHTML(
        "Alemania",
        data.Germany.Cattle
      );
      fetchHtml.cowsDataIndia = fetchHtml.cowsData.buildCowsDataHTML(
        "India",
        data.India.Cattle
      );
      fetchHtml.cowsDataMexico = fetchHtml.cowsData.buildCowsDataHTML(
        "México",
        data.Mexico.Cattle
      );
      fetchHtml.cowsDataRussia = fetchHtml.cowsData.buildCowsDataHTML(
        "Rusia",
        data.Russia.Cattle
      );
      fetchHtml.cowsDataSpain = fetchHtml.cowsData.buildCowsDataHTML(
        "España",
        data.Spain.Cattle
      );
      fetchHtml.cowsDataUk = fetchHtml.cowsData.buildCowsDataHTML(
        "el Reino Unido",
        data.UnitedKingdom.Cattle
      );
      fetchHtml.cowsDataUsa = fetchHtml.cowsData.buildCowsDataHTML(
        "los Estados Unidos",
        data.UnitedStates.Cattle
      );
    }
    assignCowsData();
    //PIGS data formatted with function inside fetchHtml object
    function assignPigsData() {
      fetchHtml.pigsDataWorld = fetchHtml.pigsData.buildPigsDataHTML(
        "el mundo",
        data.Worldwide.Pigs
      );
      fetchHtml.pigsDataArgentina = fetchHtml.pigsData.buildPigsDataHTML(
        "Argentina",
        data.Argentina.Pigs
      );
      fetchHtml.pigsDataBrazil = fetchHtml.pigsData.buildPigsDataHTML(
        "Brasil",
        data.Brazil.Pigs
      );
      fetchHtml.pigsDataCanada = fetchHtml.pigsData.buildPigsDataHTML(
        "Canadá",
        data.Canada.Pigs
      );
      fetchHtml.pigsDataChina = fetchHtml.pigsData.buildPigsDataHTML(
        "China",
        data.China.Pigs
      );
      fetchHtml.pigsDataColombia = fetchHtml.pigsData.buildPigsDataHTML(
        "Colombia",
        data.Colombia.Pigs
      );
      fetchHtml.pigsDataEcuador = fetchHtml.pigsData.buildPigsDataHTML(
        "Ecuador",
        data.Ecuador.Pigs
      );
      fetchHtml.pigsDataGer = fetchHtml.pigsData.buildPigsDataHTML(
        "Alemania",
        data.Germany.Pigs
      );
      fetchHtml.pigsDataIndia = fetchHtml.pigsData.buildPigsDataHTML(
        "India",
        data.India.Pigs
      );
      fetchHtml.pigsDataMexico = fetchHtml.pigsData.buildPigsDataHTML(
        "México",
        data.Mexico.Pigs
      );
      fetchHtml.pigsDataRussia = fetchHtml.pigsData.buildPigsDataHTML(
        "Rusia",
        data.Russia.Pigs
      );
      fetchHtml.pigsDataSpain = fetchHtml.pigsData.buildPigsDataHTML(
        "España",
        data.Spain.Pigs
      );
      fetchHtml.pigsDataUk = fetchHtml.pigsData.buildPigsDataHTML(
        "el Reino Unido",
        data.UnitedKingdom.Pigs
      );
      fetchHtml.pigsDataUsa = fetchHtml.pigsData.buildPigsDataHTML(
        "los Estados Unidos",
        data.UnitedStates.Pigs
      );
    }
    assignPigsData();
    //Sheep data formatted with function inside fetchHtml object
    function assignSheepData() {
      fetchHtml.sheepDataWorld = fetchHtml.sheepData.buildSheepDataHTML(
        "el mundo",
        data.Worldwide.Sheep
      );
      fetchHtml.sheepDataArgentina = fetchHtml.sheepData.buildSheepDataHTML(
        "Argentina",
        data.Argentina.Sheep
      );
      fetchHtml.sheepDataBrazil = fetchHtml.sheepData.buildSheepDataHTML(
        "Brasil",
        data.Brazil.Sheep
      );
      fetchHtml.sheepDataCanada = fetchHtml.sheepData.buildSheepDataHTML(
        "Canadá",
        data.Canada.Sheep
      );
      fetchHtml.sheepDataChina = fetchHtml.sheepData.buildSheepDataHTML(
        "China",
        data.China.Sheep
      );
      fetchHtml.sheepDataColombia = fetchHtml.sheepData.buildSheepDataHTML(
        "Colombia",
        data.Colombia.Sheep
      );
      fetchHtml.sheepDataEcuador = fetchHtml.sheepData.buildSheepDataHTML(
        "Ecuador",
        data.Ecuador.Sheep
      );
      fetchHtml.sheepDataGer = fetchHtml.sheepData.buildSheepDataHTML(
        "Alemania",
        data.Germany.Sheep
      );
      fetchHtml.sheepDataIndia = fetchHtml.sheepData.buildSheepDataHTML(
        "India",
        data.India.Sheep
      );
      fetchHtml.sheepDataMexico = fetchHtml.sheepData.buildSheepDataHTML(
        "México",
        data.Mexico.Sheep
      );
      fetchHtml.sheepDataRussia = fetchHtml.sheepData.buildSheepDataHTML(
        "Rusia",
        data.Russia.Sheep
      );
      fetchHtml.sheepDataSpain = fetchHtml.sheepData.buildSheepDataHTML(
        "España",
        data.Spain.Sheep
      );
      fetchHtml.sheepDataUk = fetchHtml.sheepData.buildSheepDataHTML(
        "el Reino Unido",
        data.UnitedKingdom.Sheep
      );
      fetchHtml.sheepDataUsa = fetchHtml.sheepData.buildSheepDataHTML(
        "los Estados Unidos",
        data.UnitedStates.Sheep
      );
    }
    assignSheepData();

    //Chicken data formatted with function inside fetchHtml object
    function assignChickenData() {
      fetchHtml.chickenDataWorld = fetchHtml.chickenData.buildChickenDataHTML(
        "el mundo",
        data.Worldwide.Chicken
      );
      fetchHtml.chickenDataArgentina =
        fetchHtml.chickenData.buildChickenDataHTML(
          "Argentina",
          data.Argentina.Chicken
        );
      fetchHtml.chickenDataBrazil = fetchHtml.chickenData.buildChickenDataHTML(
        "Brasil",
        data.Brazil.Chicken
      );
      fetchHtml.chickenDataCanada = fetchHtml.chickenData.buildChickenDataHTML(
        "Canadá",
        data.Canada.Chicken
      );
      fetchHtml.chickenDataChina = fetchHtml.chickenData.buildChickenDataHTML(
        "China",
        data.China.Chicken
      );
      fetchHtml.chickenDataColombia =
        fetchHtml.chickenData.buildChickenDataHTML(
          "Colombia",
          data.Colombia.Chicken
        );
      fetchHtml.chickenDataEcuador = fetchHtml.chickenData.buildChickenDataHTML(
        "Ecuador",
        data.Ecuador.Chicken
      );
      fetchHtml.chickenDataGer = fetchHtml.chickenData.buildChickenDataHTML(
        "Alemania",
        data.Germany.Chicken
      );
      fetchHtml.chickenDataIndia = fetchHtml.chickenData.buildChickenDataHTML(
        "India",
        data.India.Chicken
      );
      fetchHtml.chickenDataMexico = fetchHtml.chickenData.buildChickenDataHTML(
        "México",
        data.Mexico.Chicken
      );
      fetchHtml.chickenDataRussia = fetchHtml.chickenData.buildChickenDataHTML(
        "Rusia",
        data.Russia.Chicken
      );
      fetchHtml.chickenDataSpain = fetchHtml.chickenData.buildChickenDataHTML(
        "España",
        data.Spain.Chicken
      );
      fetchHtml.chickenDataUk = fetchHtml.chickenData.buildChickenDataHTML(
        "el Reino Unido",
        data.UnitedKingdom.Chicken
      );
      fetchHtml.chickenDataUsa = fetchHtml.chickenData.buildChickenDataHTML(
        "los Estados Unidos",
        data.UnitedStates.Chicken
      );
    }
    assignChickenData();

    //Turkey data formatted with function inside fetchHtml object
    function assignTurkeyData() {
      fetchHtml.turkeyDataWorld = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "el mundo",
        data.Worldwide.Turkey
      );
      fetchHtml.turkeyDataArgentina = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "Argentina",
        data.Argentina.Turkey
      );
      fetchHtml.turkeyDataBrazil = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "Brasil",
        data.Brazil.Turkey
      );
      fetchHtml.turkeyDataCanada = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "Canadá",
        data.Canada.Turkey
      );
      fetchHtml.turkeyDataChina = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "China",
        data.China.Turkey
      );
      fetchHtml.turkeyDataColombia = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "Colombia",
        data.Colombia.Turkey
      );
      fetchHtml.turkeyDataEcuador = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "Ecuador",
        data.Ecuador.Turkey
      );
      fetchHtml.turkeyDataGer = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "Alemania",
        data.Germany.Turkey
      );
      fetchHtml.turkeyDataIndia = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "India",
        data.India.Turkey
      );
      fetchHtml.turkeyDataMexico = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "México",
        data.Mexico.Turkey
      );
      fetchHtml.turkeyDataRussia = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "Rusia",
        data.Russia.Turkey
      );
      fetchHtml.turkeyDataSpain = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "España",
        data.Spain.Turkey
      );
      fetchHtml.turkeyDataUk = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "el Reino Unido",
        data.UnitedKingdom.Turkey
      );
      fetchHtml.turkeyDataUsa = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "los Estados Unidos",
        data.UnitedStates.Turkey
      );
    }
    assignTurkeyData();

    //FISH data formatted with function inside fetchHtml object
    function assignFishData() {
      fetchHtml.fishDataWorld = fetchHtml.fishData.buildFishDataHTML(
        "el mundo",
        data.Worldwide.FishTonnes
      );
      fetchHtml.fishDataArgentina = fetchHtml.fishData.buildFishDataHTML(
        "Argentina",
        data.Argentina.FishTonnes
      );
      fetchHtml.fishDataBrazil = fetchHtml.fishData.buildFishDataHTML(
        "Brasil",
        data.Brazil.FishTonnes
      );
      fetchHtml.fishDataCanada = fetchHtml.fishData.buildFishDataHTML(
        "Canadá",
        data.Canada.FishTonnes
      );
      fetchHtml.fishDataChina = fetchHtml.fishData.buildFishDataHTML(
        "China",
        data.China.FishTonnes
      );
      fetchHtml.fishDataColombia = fetchHtml.fishData.buildFishDataHTML(
        "Colombia",
        data.Colombia.FishTonnes
      );
      fetchHtml.fishDataEcuador = fetchHtml.fishData.buildFishDataHTML(
        "Ecuador",
        data.Ecuador.FishTonnes
      );
      fetchHtml.fishDataGer = fetchHtml.fishData.buildFishDataHTML(
        "Alemania",
        data.Germany.FishTonnes
      );
      fetchHtml.fishDataIndia = fetchHtml.fishData.buildFishDataHTML(
        "India",
        data.India.FishTonnes
      );
      fetchHtml.fishDataMexico = fetchHtml.fishData.buildFishDataHTML(
        "México",
        data.Mexico.FishTonnes
      );
      fetchHtml.fishDataRussia = fetchHtml.fishData.buildFishDataHTML(
        "Rusia",
        data.Russia.FishTonnes
      );
      fetchHtml.fishDataSpain = fetchHtml.fishData.buildFishDataHTML(
        "España",
        data.Spain.FishTonnes
      );
      fetchHtml.fishDataUk = fetchHtml.fishData.buildFishDataHTML(
        "el Reino Unido",
        data.UnitedKingdom.FishTonnes
      );
      fetchHtml.fishDataUsa = fetchHtml.fishData.buildFishDataHTML(
        "los Estados Unidos",
        data.UnitedStates.FishTonnes
      );
    }
    assignFishData();

    return [data, fetchHtml]; // Return the parsed data and the object holding the html elements
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

// export { fetchData };
