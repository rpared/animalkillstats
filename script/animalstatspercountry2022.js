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
      //   fishDataWorld: `<p>Sea animals Worldwide<br> (measured in Tonnes)<fn>2</fn></p> <ul class="list" >
      //     <li>Yearly: </li> <div>${data.Worldwide.FishTonnes.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(
      //       data.Worldwide.FishTonnes / 12
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Daily: </li> <div>${(
      //       data.Worldwide.FishTonnes / 365
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Worldwide.FishTonnes /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Worldwide.FishTonnes /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Worldwide.FishTonnes /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,
      //   fishDataArgentina: `<p>Sea animals in Argentina<br> (measured in Tonnes)<fn>2</fn></p> <ul class="list" >
      //     <li>Yearly: </li> <div>${data.Argentina.FishTonnes.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(
      //       data.Argentina.FishTonnes / 12
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Daily: </li> <div>${(
      //       data.Argentina.FishTonnes / 365
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Argentina.FishTonnes /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Argentina.FishTonnes /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Argentina.FishTonnes /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,
      //   fishDataBrazil: `<p>Sea animals in Brazil<br> (measured in Tonnes)<fn>2</fn></p> <ul class="list" >
      //     <li>Yearly: </li> <div>${data.Brazil.FishTonnes.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Brazil.FishTonnes / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Brazil.FishTonnes / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Brazil.FishTonnes /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Brazil.FishTonnes /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Brazil.FishTonnes /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,
      //   fishDataCanada: `<p>Sea animals in Canada<br> (measured in Tonnes)<fn>2</fn></p> <ul class="list" >
      //     <li>Yearly: </li> <div>${data.Canada.FishTonnes.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Canada.FishTonnes / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Canada.FishTonnes / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Canada.FishTonnes /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Canada.FishTonnes /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Canada.FishTonnes /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,
      //   fishDataChina: `<p>Sea animals in China<br> (measured in Tonnes)<fn>2</fn></p> <ul class="list" >
      // <li>Yearly: </li> <div>${data.China.FishTonnes.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.China.FishTonnes / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.China.FishTonnes / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(data.China.FishTonnes / 365 / 24).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Per minute: </li> <div>${(
      //   data.China.FishTonnes /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.China.FishTonnes /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      // </ul>`,
      //   fishDataColombia: `<p>Sea animals in Colombia<br> (measured in Tonnes)<fn>2</fn></p> <ul class="list" >
      // <li>Yearly: </li> <div>${data.Colombia.FishTonnes.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.Colombia.FishTonnes / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.Colombia.FishTonnes / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(
      //   data.Colombia.FishTonnes /
      //   365 /
      //   24
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per minute: </li> <div>${(
      //   data.Colombia.FishTonnes /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.Colombia.FishTonnes /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      // </ul>`,
      //   fishDataEcuador: `<p>Sea animals in Ecuador<br> (measured in Tonnes)<fn>2</fn></p> <ul class="list" >
      // <li>Yearly: </li> <div>${data.Ecuador.FishTonnes.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.Ecuador.FishTonnes / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.Ecuador.FishTonnes / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(
      //   data.Ecuador.FishTonnes /
      //   365 /
      //   24
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per minute: </li> <div>${(
      //   data.Ecuador.FishTonnes /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.Ecuador.FishTonnes /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      // </ul>`,

      //   fishDataGer: `<p>Sea animals in Germany<br> (measured in Tonnes)<fn>2</fn></p> <ul class="list" >
      // <li>Yearly: </li> <div>${data.Germany.FishTonnes.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.Germany.FishTonnes / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.Germany.FishTonnes / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(
      //   data.Germany.FishTonnes /
      //   365 /
      //   24
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per minute: </li> <div>${(
      //   data.Germany.FishTonnes /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.Germany.FishTonnes /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      // </ul>`,

      //   fishDataIndia: `<p>Sea animals in India<br> (measured in Tonnes)<fn>2</fn></p> <ul class="list" >
      // <li>Yearly: </li> <div>${data.India.FishTonnes.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.India.FishTonnes / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.India.FishTonnes / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(data.India.FishTonnes / 365 / 24).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Per minute: </li> <div>${(
      //   data.India.FishTonnes /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.India.FishTonnes /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      // </ul>`,
      //   fishDataMexico: `<p>Sea animals in Mexico<br> (measured in Tonnes)<fn>2</fn></p> <ul class="list" >
      // <li>Yearly: </li> <div>${data.Mexico.FishTonnes.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.Mexico.FishTonnes / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.Mexico.FishTonnes / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(data.Mexico.FishTonnes / 365 / 24).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Per minute: </li> <div>${(
      //   data.Mexico.FishTonnes /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.Mexico.FishTonnes /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      // </ul>`,
      //   fishDataSpain: `<p>Sea animals in Spain<br> (measured in Tonnes)<fn>2</fn></p> <ul class="list" >
      // <li>Yearly: </li> <div>${data.Spain.FishTonnes.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.Spain.FishTonnes / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.Spain.FishTonnes / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(data.Spain.FishTonnes / 365 / 24).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Per minute: </li> <div>${(
      //   data.Spain.FishTonnes /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.Spain.FishTonnes /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      // </ul>`,
      //   fishDataRussia: `<p>Sea animals in Russia<br> (measured in Tonnes)<fn>2</fn></p> <ul class="list" >
      //     <li>Yearly: </li> <div>${data.Russia.FishTonnes.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Russia.FishTonnes / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Russia.FishTonnes / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Russia.FishTonnes /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Russia.FishTonnes /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Russia.FishTonnes /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,

      //   fishDataUk: `<p>Sea animals in the UK<br> (measured in Tonnes)<fn>2</fn></p> <ul class="list" >
      //     <li>Yearly: </li> <div>${data.UnitedKingdom.FishTonnes.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(
      //       data.UnitedKingdom.FishTonnes / 12
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Daily: </li> <div>${(
      //       data.UnitedKingdom.FishTonnes / 365
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.UnitedKingdom.FishTonnes /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.UnitedKingdom.FishTonnes /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.UnitedKingdom.FishTonnes /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,

      //   fishDataUsa: `<p>Sea animals in the USA<br> (measured in Tonnes)<fn>2</fn></p> <ul class="list" >
      //     <li>Yearly: </li> <div>${data.UnitedStates.FishTonnes.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(
      //       data.UnitedStates.FishTonnes / 12
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Daily: </li> <div>${(
      //       data.UnitedStates.FishTonnes / 365
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.UnitedStates.FishTonnes /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.UnitedStates.FishTonnes /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.UnitedStates.FishTonnes /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,

      capitaMeatKgText: `<h2>Kilograms consumed per capita - 2021</h2>
        <div class="chart-container" >
        <canvas id="capitaAnimals"></canvas>
        </div>
        <p class="legend" ><span id="capitaTotal"></span> kg. of animals were consumed per person in 2021<span id="countryname"></span><fn> 3,4</fn>.</p>`,

      toggleLegend5AnimalsText: `<fn>3,4</fn>Animal kilograms consumed per person yearly. The sum equals the Chart by Totals.`,

      toggleBtnTextTotal: "Display chart by totals",
      toggleBtnTextAnimals: "Display chart by animals",

      toggleLegend5TotalsText: `<fn>3,4</fn>Total animal kilograms (land + sea animals) consumed per person, <span id="totalKg2020"></span> in <strong>2020</strong>.`,
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
      // console.log("World land animals", fetchHtml.landAnimalsWorld);

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

    //Testing
    // console.log(`Pigs in Usa:`, fetchHtml.pigsDataUsa);
    // console.log(`Fish in World Total at the end:`, fetchHtml.fishTotalWorld);
    // console.log(
    //   `Fish kg per capita in South Africa at the end:`,
    //   fetchHtml.fishKgPerCapitaSouthAfrica
    // );
    // console.log(`Fish in World Html at the end:`, fetchHtml.fishDataWorld);

    // function assignCowsData() {
    //   fetchHtml.cowsDataWorld = fetchHtml.cowsData.buildCowsDataHTML(
    //     "the World",
    //     worldData["Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"]
    //   );
    //   fetchHtml.cowsDataArgentina = fetchHtml.cowsData.buildCowsDataHTML(
    //     "Argentina",
    //     argentinaData["Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"]
    //   );
    //   fetchHtml.cowsDataBrazil = fetchHtml.cowsData.buildCowsDataHTML(
    //     "Brazil",
    //     brazilData["Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"]
    //   );
    //   fetchHtml.cowsDataCanada = fetchHtml.cowsData.buildCowsDataHTML(
    //     "Canada",
    //     canadaData["Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"]
    //   );
    //   fetchHtml.cowsDataChina = fetchHtml.cowsData.buildCowsDataHTML(
    //     "China",
    //     chinaData["Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"]
    //   );
    //   fetchHtml.cowsDataColombia = fetchHtml.cowsData.buildCowsDataHTML(
    //     "Colombia",
    //     colombiaData["Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"]
    //   );
    //   fetchHtml.cowsDataEcuador = fetchHtml.cowsData.buildCowsDataHTML(
    //     "Ecuador",
    //     ecuadorData["Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"]
    //   );
    //   fetchHtml.cowsDataGer = fetchHtml.cowsData.buildCowsDataHTML(
    //     "Germany",
    //     germanyData["Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"]
    //   );
    //   fetchHtml.cowsDataIndia = fetchHtml.cowsData.buildCowsDataHTML(
    //     "India",
    //     indiaData["Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"]
    //   );
    //   fetchHtml.cowsDataMexico = fetchHtml.cowsData.buildCowsDataHTML(
    //     "Mexico",
    //     mexicoData["Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"]
    //   );
    //   fetchHtml.cowsDataRussia = fetchHtml.cowsData.buildCowsDataHTML(
    //     "Russia",
    //     russiaData["Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"]
    //   );
    //   fetchHtml.cowsDataSpain = fetchHtml.cowsData.buildCowsDataHTML(
    //     "Spain",
    //     spainData["Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"]
    //   );
    //   fetchHtml.cowsDataUk = fetchHtml.cowsData.buildCowsDataHTML(
    //     "the United Kingdom",
    //     ukData["Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"]
    //   );
    //   fetchHtml.cowsDataUsa = fetchHtml.cowsData.buildCowsDataHTML(
    //     "the USA",
    //     usaData["Meat of cattle with the bone, fresh or chilled | 00000867 || Producing or slaughtered animals | 005320 || animals"]
    //   );
    // }

    //PIGS data formatted with function inside fetchHtml object
    // function assignPigsData() {
    //   fetchHtml.pigsDataWorld = fetchHtml.pigsData.buildPigsDataHTML(
    //     "the World",
    //     data.Worldwide.Pigs
    //   );
    //   fetchHtml.pigsDataArgentina = fetchHtml.pigsData.buildPigsDataHTML(
    //     "Argentina",
    //     data.Argentina.Pigs
    //   );
    //   fetchHtml.pigsDataBrazil = fetchHtml.pigsData.buildPigsDataHTML(
    //     "Brazil",
    //     data.Brazil.Pigs
    //   );
    //   fetchHtml.pigsDataCanada = fetchHtml.pigsData.buildPigsDataHTML(
    //     "Canada",
    //     data.Canada.Pigs
    //   );
    //   fetchHtml.pigsDataChina = fetchHtml.pigsData.buildPigsDataHTML(
    //     "China",
    //     data.China.Pigs
    //   );
    //   fetchHtml.pigsDataColombia = fetchHtml.pigsData.buildPigsDataHTML(
    //     "Colombia",
    //     data.Colombia.Pigs
    //   );
    //   fetchHtml.pigsDataEcuador = fetchHtml.pigsData.buildPigsDataHTML(
    //     "Ecuador",
    //     data.Ecuador.Pigs
    //   );
    //   fetchHtml.pigsDataGer = fetchHtml.pigsData.buildPigsDataHTML(
    //     "Germany",
    //     data.Germany.Pigs
    //   );
    //   fetchHtml.pigsDataIndia = fetchHtml.pigsData.buildPigsDataHTML(
    //     "India",
    //     data.India.Pigs
    //   );
    //   fetchHtml.pigsDataMexico = fetchHtml.pigsData.buildPigsDataHTML(
    //     "Mexico",
    //     data.Mexico.Pigs
    //   );
    //   fetchHtml.pigsDataRussia = fetchHtml.pigsData.buildPigsDataHTML(
    //     "Russia",
    //     data.Russia.Pigs
    //   );
    //   fetchHtml.pigsDataSpain = fetchHtml.pigsData.buildPigsDataHTML(
    //     "Spain",
    //     data.Spain.Pigs
    //   );
    //   fetchHtml.pigsDataUk = fetchHtml.pigsData.buildPigsDataHTML(
    //     "the United Kingdom",
    //     data.UnitedKingdom.Pigs
    //   );
    //   fetchHtml.pigsDataUsa = fetchHtml.pigsData.buildPigsDataHTML(
    //     "the USA",
    //     data.UnitedStates.Pigs
    //   );
    // }
    // assignPigsData();
    // //Sheep data formatted with function inside fetchHtml object
    // function assignSheepData() {
    //   fetchHtml.sheepDataWorld = fetchHtml.sheepData.buildSheepDataHTML(
    //     "the World",
    //     data.Worldwide.Sheep
    //   );
    //   fetchHtml.sheepDataArgentina = fetchHtml.sheepData.buildSheepDataHTML(
    //     "Argentina",
    //     data.Argentina.Sheep
    //   );
    //   fetchHtml.sheepDataBrazil = fetchHtml.sheepData.buildSheepDataHTML(
    //     "Brazil",
    //     data.Brazil.Sheep
    //   );
    //   fetchHtml.sheepDataCanada = fetchHtml.sheepData.buildSheepDataHTML(
    //     "Canada",
    //     data.Canada.Sheep
    //   );
    //   fetchHtml.sheepDataChina = fetchHtml.sheepData.buildSheepDataHTML(
    //     "China",
    //     data.China.Sheep
    //   );
    //   fetchHtml.sheepDataColombia = fetchHtml.sheepData.buildSheepDataHTML(
    //     "Colombia",
    //     data.Colombia.Sheep
    //   );
    //   fetchHtml.sheepDataEcuador = fetchHtml.sheepData.buildSheepDataHTML(
    //     "Ecuador",
    //     data.Ecuador.Sheep
    //   );
    //   fetchHtml.sheepDataGer = fetchHtml.sheepData.buildSheepDataHTML(
    //     "Germany",
    //     data.Germany.Sheep
    //   );
    //   fetchHtml.sheepDataIndia = fetchHtml.sheepData.buildSheepDataHTML(
    //     "India",
    //     data.India.Sheep
    //   );
    //   fetchHtml.sheepDataMexico = fetchHtml.sheepData.buildSheepDataHTML(
    //     "Mexico",
    //     data.Mexico.Sheep
    //   );
    //   fetchHtml.sheepDataRussia = fetchHtml.sheepData.buildSheepDataHTML(
    //     "Russia",
    //     data.Russia.Sheep
    //   );
    //   fetchHtml.sheepDataSpain = fetchHtml.sheepData.buildSheepDataHTML(
    //     "Spain",
    //     data.Spain.Sheep
    //   );
    //   fetchHtml.sheepDataUk = fetchHtml.sheepData.buildSheepDataHTML(
    //     "the United Kingdom",
    //     data.UnitedKingdom.Sheep
    //   );
    //   fetchHtml.sheepDataUsa = fetchHtml.sheepData.buildSheepDataHTML(
    //     "the USA",
    //     data.UnitedStates.Sheep
    //   );
    // }
    // assignSheepData();

    // //Chicken data formatted with function inside fetchHtml object
    // function assignChickenData() {
    //   fetchHtml.chickenDataWorld = fetchHtml.chickenData.buildChickenDataHTML(
    //     "the World",
    //     data.Worldwide.Chicken
    //   );
    //   fetchHtml.chickenDataArgentina =
    //     fetchHtml.chickenData.buildChickenDataHTML(
    //       "Argentina",
    //       data.Argentina.Chicken
    //     );
    //   fetchHtml.chickenDataBrazil = fetchHtml.chickenData.buildChickenDataHTML(
    //     "Brazil",
    //     data.Brazil.Chicken
    //   );
    //   fetchHtml.chickenDataCanada = fetchHtml.chickenData.buildChickenDataHTML(
    //     "Canada",
    //     data.Canada.Chicken
    //   );
    //   fetchHtml.chickenDataChina = fetchHtml.chickenData.buildChickenDataHTML(
    //     "China",
    //     data.China.Chicken
    //   );
    //   fetchHtml.chickenDataColombia =
    //     fetchHtml.chickenData.buildChickenDataHTML(
    //       "Colombia",
    //       data.Colombia.Chicken
    //     );
    //   fetchHtml.chickenDataEcuador = fetchHtml.chickenData.buildChickenDataHTML(
    //     "Ecuador",
    //     data.Ecuador.Chicken
    //   );
    //   fetchHtml.chickenDataGer = fetchHtml.chickenData.buildChickenDataHTML(
    //     "Germany",
    //     data.Germany.Chicken
    //   );
    //   fetchHtml.chickenDataIndia = fetchHtml.chickenData.buildChickenDataHTML(
    //     "India",
    //     data.India.Chicken
    //   );
    //   fetchHtml.chickenDataMexico = fetchHtml.chickenData.buildChickenDataHTML(
    //     "Mexico",
    //     data.Mexico.Chicken
    //   );
    //   fetchHtml.chickenDataRussia = fetchHtml.chickenData.buildChickenDataHTML(
    //     "Russia",
    //     data.Russia.Chicken
    //   );
    //   fetchHtml.chickenDataSpain = fetchHtml.chickenData.buildChickenDataHTML(
    //     "Spain",
    //     data.Spain.Chicken
    //   );
    //   fetchHtml.chickenDataUk = fetchHtml.chickenData.buildChickenDataHTML(
    //     "the United Kingdom",
    //     data.UnitedKingdom.Chicken
    //   );
    //   fetchHtml.chickenDataUsa = fetchHtml.chickenData.buildChickenDataHTML(
    //     "the USA",
    //     data.UnitedStates.Chicken
    //   );
    // }
    // assignChickenData();

    // //Turkey data formatted with function inside fetchHtml object
    // function assignTurkeyData() {
    //   fetchHtml.turkeyDataWorld = fetchHtml.turkeyData.buildTurkeyDataHTML(
    //     "the World",
    //     data.Worldwide.Turkey
    //   );
    //   fetchHtml.turkeyDataArgentina = fetchHtml.turkeyData.buildTurkeyDataHTML(
    //     "Argentina",
    //     data.Argentina.Turkey
    //   );
    //   fetchHtml.turkeyDataBrazil = fetchHtml.turkeyData.buildTurkeyDataHTML(
    //     "Brazil",
    //     data.Brazil.Turkey
    //   );
    //   fetchHtml.turkeyDataCanada = fetchHtml.turkeyData.buildTurkeyDataHTML(
    //     "Canada",
    //     data.Canada.Turkey
    //   );
    //   fetchHtml.turkeyDataChina = fetchHtml.turkeyData.buildTurkeyDataHTML(
    //     "China",
    //     data.China.Turkey
    //   );
    //   fetchHtml.turkeyDataColombia = fetchHtml.turkeyData.buildTurkeyDataHTML(
    //     "Colombia",
    //     data.Colombia.Turkey
    //   );
    //   fetchHtml.turkeyDataEcuador = fetchHtml.turkeyData.buildTurkeyDataHTML(
    //     "Ecuador",
    //     data.Ecuador.Turkey
    //   );
    //   fetchHtml.turkeyDataGer = fetchHtml.turkeyData.buildTurkeyDataHTML(
    //     "Germany",
    //     data.Germany.Turkey
    //   );
    //   fetchHtml.turkeyDataIndia = fetchHtml.turkeyData.buildTurkeyDataHTML(
    //     "India",
    //     data.India.Turkey
    //   );
    //   fetchHtml.turkeyDataMexico = fetchHtml.turkeyData.buildTurkeyDataHTML(
    //     "Mexico",
    //     data.Mexico.Turkey
    //   );
    //   fetchHtml.turkeyDataRussia = fetchHtml.turkeyData.buildTurkeyDataHTML(
    //     "Russia",
    //     data.Russia.Turkey
    //   );
    //   fetchHtml.turkeyDataSpain = fetchHtml.turkeyData.buildTurkeyDataHTML(
    //     "Spain",
    //     data.Spain.Turkey
    //   );
    //   fetchHtml.turkeyDataUk = fetchHtml.turkeyData.buildTurkeyDataHTML(
    //     "the United Kingdom",
    //     data.UnitedKingdom.Turkey
    //   );
    //   fetchHtml.turkeyDataUsa = fetchHtml.turkeyData.buildTurkeyDataHTML(
    //     "the USA",
    //     data.UnitedStates.Turkey
    //   );
    // }
    // assignTurkeyData();

    //FISH data formatted with function inside fetchHtml object
    // function assignFishData() {
    //   fetchHtml.fishDataWorld = fetchHtml.fishData.buildFishDataHTML(
    //     "the World",
    //     data.Worldwide.FishTonnes
    //   );
    //   fetchHtml.fishDataArgentina = fetchHtml.fishData.buildFishDataHTML(
    //     "Argentina",
    //     data.Argentina.FishTonnes
    //   );
    //   fetchHtml.fishDataBrazil = fetchHtml.fishData.buildFishDataHTML(
    //     "Brazil",
    //     data.Brazil.FishTonnes
    //   );
    //   fetchHtml.fishDataCanada = fetchHtml.fishData.buildFishDataHTML(
    //     "Canada",
    //     data.Canada.FishTonnes
    //   );
    //   fetchHtml.fishDataChina = fetchHtml.fishData.buildFishDataHTML(
    //     "China",
    //     data.China.FishTonnes
    //   );
    //   fetchHtml.fishDataColombia = fetchHtml.fishData.buildFishDataHTML(
    //     "Colombia",
    //     data.Colombia.FishTonnes
    //   );
    //   fetchHtml.fishDataEcuador = fetchHtml.fishData.buildFishDataHTML(
    //     "Ecuador",
    //     data.Ecuador.FishTonnes
    //   );
    //   fetchHtml.fishDataGer = fetchHtml.fishData.buildFishDataHTML(
    //     "Germany",
    //     data.Germany.FishTonnes
    //   );
    //   fetchHtml.fishDataIndia = fetchHtml.fishData.buildFishDataHTML(
    //     "India",
    //     data.India.FishTonnes
    //   );
    //   fetchHtml.fishDataMexico = fetchHtml.fishData.buildFishDataHTML(
    //     "Mexico",
    //     data.Mexico.FishTonnes
    //   );
    //   fetchHtml.fishDataRussia = fetchHtml.fishData.buildFishDataHTML(
    //     "Russia",
    //     data.Russia.FishTonnes
    //   );
    //   fetchHtml.fishDataSpain = fetchHtml.fishData.buildFishDataHTML(
    //     "Spain",
    //     data.Spain.FishTonnes
    //   );
    //   fetchHtml.fishDataUk = fetchHtml.fishData.buildFishDataHTML(
    //     "the United Kingdom",
    //     data.UnitedKingdom.FishTonnes
    //   );
    //   fetchHtml.fishDataUsa = fetchHtml.fishData.buildFishDataHTML(
    //     "the USA",
    //     data.UnitedStates.FishTonnes
    //   );
    // }
    // assignFishData();

    return [data, fetchHtml]; // Return the parsed data and the object holding the html elements
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

// export { fetchData };
