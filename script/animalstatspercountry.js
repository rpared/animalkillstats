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
      // cowsDataWorld: `<p>Cattle Worldwide</p><ul class="list" >
      //   <li>Yearly:</li> <div>${data.Worldwide.Cattle.toLocaleString()}</div>
      //   <li>Monthly:</li> <div>${(data.Worldwide.Cattle / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily:</li> <div>${(data.Worldwide.Cattle / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly:</li> <div>${(
      //     data.Worldwide.Cattle /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute:</li> <div>${(
      //     data.Worldwide.Cattle /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second:</li> <div>${(
      //     data.Worldwide.Cattle /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // cowsDataArgentina: `<p>Cattle in Argentina</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Argentina.Cattle.toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Monthly: </li> <div>${(data.Argentina.Cattle / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Argentina.Cattle / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(
      //     data.Argentina.Cattle /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Argentina.Cattle /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Argentina.Cattle /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // cowsDataBrazil: `<p>Cattle in Brazil</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Brazil.Cattle.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Brazil.Cattle / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Brazil.Cattle / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Brazil.Cattle / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Brazil.Cattle /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Brazil.Cattle /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // cowsDataCanada: `<p>Cattle in Canada</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Canada.Cattle.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Canada.Cattle / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Canada.Cattle / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Canada.Cattle / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Canada.Cattle /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Canada.Cattle /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // cowsDataChina: `<p>Cattle in China</p><ul class="list" >
      // <li>Yearly: </li> <div>${data.China.Cattle.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.China.Cattle / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.China.Cattle / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(data.China.Cattle / 365 / 24).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Per minute: </li> <div>${(
      //   data.China.Cattle /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.China.Cattle /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // </ul>`,
      // cowsDataColombia: `<p>Cattle in Colombia</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Colombia.Cattle.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Colombia.Cattle / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Colombia.Cattle / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(
      //     data.Colombia.Cattle /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Colombia.Cattle /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Colombia.Cattle /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,
      // cowsDataEcuador: `<p>Cattle in Ecuador</p><ul class="list" >
      // <li>Yearly: </li> <div>${data.Ecuador.Cattle.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.Ecuador.Cattle / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.Ecuador.Cattle / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(data.Ecuador.Cattle / 365 / 24).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Per minute: </li> <div>${(
      //   data.Ecuador.Cattle /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.Ecuador.Cattle /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // </ul>`,
      // cowsDataGer: `<p>Cattle in Germany</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Germany.Cattle.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Germany.Cattle / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Germany.Cattle / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(
      //     data.Germany.Cattle /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Germany.Cattle /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Germany.Cattle /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // cowsDataIndia: `<p>Cattle in India</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.India.Cattle.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.India.Cattle / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.India.Cattle / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.India.Cattle / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.India.Cattle /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.India.Cattle /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // cowsDataMexico: `<p>Cattle in Mexico</p><ul class="list" >
      // <li>Yearly: </li> <div>${data.Mexico.Cattle.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.Mexico.Cattle / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.Mexico.Cattle / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(data.Mexico.Cattle / 365 / 24).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Per minute: </li> <div>${(
      //   data.Mexico.Cattle /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.Mexico.Cattle /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // </ul>`,
      // cowsDataRussia: `<p>Cattle in Russia</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Russia.Cattle.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Russia.Cattle / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Russia.Cattle / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Russia.Cattle / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Russia.Cattle /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Russia.Cattle /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // cowsDataSpain: `<p>Cattle in the Spain</p><ul class="list" >
      // <li>Yearly: </li> <div>${data.Spain.Cattle.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.Spain.Cattle / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.Spain.Cattle / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(data.Spain.Cattle / 365 / 24).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Per minute: </li> <div>${(
      //   data.Spain.Cattle /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.Spain.Cattle /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // </ul>`,
      // cowsDataUk: `<p>Cattle in the UK</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.UnitedKingdom.Cattle.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(
      //     data.UnitedKingdom.Cattle / 12
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Daily: </li> <div>${(
      //     data.UnitedKingdom.Cattle / 365
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Hourly: </li> <div>${(
      //     data.UnitedKingdom.Cattle /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.UnitedKingdom.Cattle /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.UnitedKingdom.Cattle /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // cowsDataUsa: `<p>Cattle in the USA</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.UnitedStates.Cattle.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(
      //     data.UnitedStates.Cattle / 12
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Daily: </li> <div>${(data.UnitedStates.Cattle / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(
      //     data.UnitedStates.Cattle /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.UnitedStates.Cattle /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.UnitedStates.Cattle /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      //Pigs
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
      // pigsDataWorld: `<p>Pigs Worldwide</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Worldwide.Pigs.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Worldwide.Pigs / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Worldwide.Pigs / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(
      //     data.Worldwide.Pigs /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Worldwide.Pigs /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Worldwide.Pigs /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // pigsDataArgentina: `<p>Pigs in Argentina</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Argentina.Pigs.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Argentina.Pigs / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Argentina.Pigs / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(
      //     data.Argentina.Pigs /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Argentina.Pigs /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Argentina.Pigs /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // pigsDataBrazil: `<p>Pigs in Brazil</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Brazil.Pigs.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Brazil.Pigs / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Brazil.Pigs / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Brazil.Pigs / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Brazil.Pigs /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Brazil.Pigs /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // pigsDataCanada: `<p>Pigs in Canada</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Canada.Pigs.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Canada.Pigs / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Canada.Pigs / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Canada.Pigs / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Canada.Pigs /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Canada.Pigs /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // pigsDataChina: `<p>Pigs in China</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.China.Pigs.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.China.Pigs / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.China.Pigs / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.China.Pigs / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.China.Pigs /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.China.Pigs /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // pigsDataColombia: `<p>Pigs in Colombia</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Colombia.Pigs.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Colombia.Pigs / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Colombia.Pigs / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Colombia.Pigs / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Colombia.Pigs /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Colombia.Pigs /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,
      // pigsDataEcuador: `<p>Pigs in Ecuador</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Ecuador.Pigs.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Ecuador.Pigs / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Ecuador.Pigs / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Ecuador.Pigs / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Ecuador.Pigs /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Ecuador.Pigs /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // pigsDataGer: `<p>Pigs in Germany</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Germany.Pigs.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Germany.Pigs / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Germany.Pigs / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Germany.Pigs / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Germany.Pigs /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Germany.Pigs /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // pigsDataIndia: `<p>Pigs in India</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.India.Pigs.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.India.Pigs / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.India.Pigs / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.India.Pigs / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.India.Pigs /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.India.Pigs /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // pigsDataMexico: `<p>Pigs in Mexico</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Mexico.Pigs.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Mexico.Pigs / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Mexico.Pigs / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Mexico.Pigs / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Mexico.Pigs /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Mexico.Pigs /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // pigsDataRussia: `<p>Pigs in Russia</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Russia.Pigs.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Russia.Pigs / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Russia.Pigs / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Russia.Pigs / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Russia.Pigs /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Russia.Pigs /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // pigsDataSpain: `<p>Pigs in Spain</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Spain.Pigs.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Spain.Pigs / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Spain.Pigs / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Spain.Pigs / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Spain.Pigs /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Spain.Pigs /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // pigsDataUk: `<p>Pigs in the UK</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.UnitedKingdom.Pigs.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.UnitedKingdom.Pigs / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.UnitedKingdom.Pigs / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(
      //     data.UnitedKingdom.Pigs /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.UnitedKingdom.Pigs /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.UnitedKingdom.Pigs /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      // pigsDataUsa: `<p>Pigs in the USA</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.UnitedStates.Pigs.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.UnitedStates.Pigs / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.UnitedStates.Pigs / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(
      //     data.UnitedStates.Pigs /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.UnitedStates.Pigs /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.UnitedStates.Pigs /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,

      //SHEEP
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
      // sheepDataWorld: `<p>Sheep Worldwide</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Worldwide.Sheep.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Worldwide.Sheep / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Worldwide.Sheep / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(
      //     data.Worldwide.Sheep /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Worldwide.Sheep /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Worldwide.Sheep /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 1 })}</div>
      //   </ul>`,
      // sheepDataArgentina: `<p>Sheep in Argentina</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Argentina.Sheep.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Argentina.Sheep / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Argentina.Sheep / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(
      //     data.Argentina.Sheep /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Argentina.Sheep /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Argentina.Sheep /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,
      // sheepDataBrazil: `<p>Sheep in Brazil</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Brazil.Sheep.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Brazil.Sheep / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Brazil.Sheep / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Brazil.Sheep / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Brazil.Sheep /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Brazil.Sheep /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,
      // sheepDataCanada: `<p>Sheep in Canada</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Canada.Sheep.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Canada.Sheep / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Canada.Sheep / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Canada.Sheep / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Canada.Sheep /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Canada.Sheep /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,
      // sheepDataChina: `<p>Sheep in China</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.China.Sheep.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.China.Sheep / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.China.Sheep / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.China.Sheep / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.China.Sheep /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.China.Sheep /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,
      // sheepDataColombia: `<p>Sheep in Colombia</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Colombia.Sheep.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Colombia.Sheep / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Colombia.Sheep / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(
      //     data.Colombia.Sheep /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Colombia.Sheep /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Colombia.Sheep /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,
      // sheepDataEcuador: `<p>Sheep in Ecuador</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Ecuador.Sheep.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Ecuador.Sheep / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Ecuador.Sheep / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Ecuador.Sheep / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Ecuador.Sheep /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Ecuador.Sheep /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,
      // sheepDataGer: `<p>Sheep in Germany</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Germany.Sheep.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Germany.Sheep / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Germany.Sheep / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Germany.Sheep / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Germany.Sheep /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Germany.Sheep /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,
      // sheepDataIndia: `<p>Sheep in India</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.India.Sheep.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.India.Sheep / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.India.Sheep / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.India.Sheep / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.India.Sheep /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.India.Sheep /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,
      // sheepDataMexico: `<p>Sheep in Mexico</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Mexico.Sheep.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Mexico.Sheep / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Mexico.Sheep / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Mexico.Sheep / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Mexico.Sheep /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Mexico.Sheep /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,
      // sheepDataRussia: `<p>Sheep in Russia</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Russia.Sheep.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Russia.Sheep / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Russia.Sheep / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Russia.Sheep / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Russia.Sheep /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Russia.Sheep /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,
      // sheepDataSpain: `<p>Sheep in Spain</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Spain.Sheep.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Spain.Sheep / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Spain.Sheep / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Spain.Sheep / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Spain.Sheep /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Spain.Sheep /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,
      // sheepDataUk: `<p>Sheep in the UK</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.UnitedKingdom.Sheep.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(
      //     data.UnitedKingdom.Sheep / 12
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Daily: </li> <div>${(data.UnitedKingdom.Sheep / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(
      //     data.UnitedKingdom.Sheep /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.UnitedKingdom.Sheep /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.UnitedKingdom.Sheep /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,
      // sheepDataUsa: `<p>Sheep in the USA</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.UnitedStates.Sheep.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.UnitedStates.Sheep / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.UnitedStates.Sheep / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(
      //     data.UnitedStates.Sheep /
      //     365 /
      //     24
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.UnitedStates.Sheep /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.UnitedStates.Sheep /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //   </ul>`,

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
      //   chickenDataWorld: `<p>Chicken Worldwide</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Worldwide.Chicken.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Worldwide.Chicken / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Worldwide.Chicken / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Worldwide.Chicken /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Worldwide.Chicken /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Worldwide.Chicken /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     </ul>`,
      //   chickenDataArgentina: `<p>Chicken in Argentina</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Argentina.Chicken.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Argentina.Chicken / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Argentina.Chicken / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Argentina.Chicken /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Argentina.Chicken /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Argentina.Chicken /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     </ul>`,
      //   chickenDataBrazil: `<p>Chicken in Brazil</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Brazil.Chicken.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Brazil.Chicken / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Brazil.Chicken / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Brazil.Chicken /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Brazil.Chicken /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Brazil.Chicken /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     </ul>`,
      //   chickenDataCanada: `<p>Chicken in Canada</p><ul class="list" >
      // <li>Yearly: </li> <div>${data.Canada.Chicken.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.Canada.Chicken / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.Canada.Chicken / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(data.Canada.Chicken / 365 / 24).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Per minute: </li> <div>${(
      //   data.Canada.Chicken /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.Canada.Chicken /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // </ul>`,
      //   chickenDataChina: `<p>Chicken in China</p><ul class="list" >
      // <li>Yearly: </li> <div>${data.China.Chicken.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.China.Chicken / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.China.Chicken / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(data.China.Chicken / 365 / 24).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Per minute: </li> <div>${(
      //   data.China.Chicken /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.China.Chicken /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // </ul>`,
      //   chickenDataColombia: `<p>Chicken in Colombia</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Colombia.Chicken.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Colombia.Chicken / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Colombia.Chicken / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Colombia.Chicken /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Colombia.Chicken /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Colombia.Chicken /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     </ul>`,
      //   chickenDataEcuador: `<p>Chicken in Ecuador</p><ul class="list" >
      //   <li>Yearly: </li> <div>${data.Ecuador.Chicken.toLocaleString()}</div>
      //   <li>Monthly: </li> <div>${(data.Ecuador.Chicken / 12).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Daily: </li> <div>${(data.Ecuador.Chicken / 365).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Hourly: </li> <div>${(data.Ecuador.Chicken / 365 / 24).toLocaleString(
      //     undefined,
      //     { maximumFractionDigits: 0 }
      //   )}</div>
      //   <li>Per minute: </li> <div>${(
      //     data.Ecuador.Chicken /
      //     365 /
      //     24 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   <li>Per second: </li> <div>${(
      //     data.Ecuador.Chicken /
      //     365 /
      //     24 /
      //     60 /
      //     60
      //   ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //   </ul>`,
      //   chickenDataGer: `<p>Chicken in Germany</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Germany.Chicken.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Germany.Chicken / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Germany.Chicken / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Germany.Chicken /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Germany.Chicken /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Germany.Chicken /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     </ul>`,
      //   chickenDataIndia: `<p>Chicken in India</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.India.Chicken.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.India.Chicken / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.India.Chicken / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(data.India.Chicken / 365 / 24).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.India.Chicken /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.India.Chicken /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     </ul>`,
      //   chickenDataMexico: `<p>Chicken in Mexico</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Mexico.Chicken.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Mexico.Chicken / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Mexico.Chicken / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Mexico.Chicken /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Mexico.Chicken /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Mexico.Chicken /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     </ul>`,
      //   chickenDataRussia: `<p>Chicken in Russia</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Russia.Chicken.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Russia.Chicken / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Russia.Chicken / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Russia.Chicken /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Russia.Chicken /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Russia.Chicken /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     </ul>`,
      //   chickenDataSpain: `<p>Chicken in Spain</p> <ul class="list" >
      // <li>Yearly: </li> <div>${data.Spain.Chicken.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.Spain.Chicken / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.Spain.Chicken / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(data.Spain.Chicken / 365 / 24).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Per minute: </li> <div>${(
      //   data.Spain.Chicken /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.Spain.Chicken /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // </ul>`,
      //   chickenDataUk: `<p>Chicken in the UK</p><ul class="list" >
      // <li>Yearly: </li> <div>${data.UnitedKingdom.Chicken.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.UnitedKingdom.Chicken / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.UnitedKingdom.Chicken / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(
      //   data.UnitedKingdom.Chicken /
      //   365 /
      //   24
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per minute: </li> <div>${(
      //   data.UnitedKingdom.Chicken /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.UnitedKingdom.Chicken /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // </ul>`,
      //   chickenDataUsa: `<p>Chicken in USA</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.UnitedStates.Chicken.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(
      //       data.UnitedStates.Chicken / 12
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Daily: </li> <div>${(
      //       data.UnitedStates.Chicken / 365
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.UnitedStates.Chicken /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.UnitedStates.Chicken /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.UnitedStates.Chicken /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     </ul>`,

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
      //   turkeyDataWorld: `<p>Turkeys Worldwide</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Worldwide.Turkey.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Worldwide.Turkey / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Worldwide.Turkey / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Worldwide.Turkey /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Worldwide.Turkey /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Worldwide.Turkey /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 1 })}</div>
      //     </ul>`,
      //   turkeyDataArgentina: `<p>Turkeys in Argentina</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Argentina.Turkey.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Argentina.Turkey / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Argentina.Turkey / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Argentina.Turkey /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Argentina.Turkey /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Argentina.Turkey /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,
      //   turkeyDataBrazil: `<p>Turkeys in Brazil</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Brazil.Turkey.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Brazil.Turkey / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Brazil.Turkey / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(data.Brazil.Turkey / 365 / 24).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Brazil.Turkey /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Brazil.Turkey /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,
      //   turkeyDataCanada: `<p>Turkeys in Canada</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Canada.Turkey.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Canada.Turkey / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Canada.Turkey / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(data.Canada.Turkey / 365 / 24).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Canada.Turkey /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Canada.Turkey /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,
      //   turkeyDataChina: `<p>Turkeys in China</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.China.Turkey.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.China.Turkey / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.China.Turkey / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(data.China.Turkey / 365 / 24).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.China.Turkey /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.China.Turkey /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,
      //   turkeyDataColombiaYear: "no data on this 😞",
      //   turkeyDataColombia: `<p>Turkeys in Colombia</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Colombia.Turkey.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${data.Colombia.Turkey.toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${data.Colombia.Turkey.toLocaleString(undefined, {
      //       maximumFractionDigits: 0,
      //     })}</div>
      //     <li>Hourly: </li> <div>${data.Colombia.Turkey.toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Per minute: </li> <div>${data.Colombia.Turkey.toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Per second: </li> <div>${data.Colombia.Turkey.toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 2 }
      //     )}</div>
      //     </ul>`,
      //   turkeyDataEcuador: `<p>Turkeys in Ecuador</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Ecuador.Turkey.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Ecuador.Turkey / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Ecuador.Turkey / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Ecuador.Turkey /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Ecuador.Turkey /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Ecuador.Turkey /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,
      //   turkeyDataGer: `<p>Turkeys in Germany</p> <ul class="list" >
      //     <li>Yearly: </li> <div>${data.Germany.Turkey.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Germany.Turkey / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Germany.Turkey / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.Germany.Turkey /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Germany.Turkey /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Germany.Turkey /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,
      //   turkeyDataIndia: `<p>Turkeys in India</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.India.Turkey.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${data.India.Turkey.toLocaleString(undefined, {
      //       maximumFractionDigits: 0,
      //     })}</div>
      //     <li>Daily: </li> <div>${data.India.Turkey.toLocaleString(undefined, {
      //       maximumFractionDigits: 0,
      //     })}</div>
      //     <li>Hourly: </li> <div>${data.India.Turkey.toLocaleString(undefined, {
      //       maximumFractionDigits: 0,
      //     })}</div>
      //     <li>Per minute: </li> <div>${data.India.Turkey.toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Per second: </li> <div>${data.India.Turkey.toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 2 }
      //     )}</div>
      //     </ul>`,
      //   turkeyDataMexico: `<p>Turkeys in Mexico</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Mexico.Turkey.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(data.Mexico.Turkey / 12).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Daily: </li> <div>${(data.Mexico.Turkey / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(data.Mexico.Turkey / 365 / 24).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.Mexico.Turkey /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.Mexico.Turkey /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,
      //   turkeyDataRussiaYear: "no data on this 😞",
      //   turkeyDataRussia: `<p>Turkeys in Russia</p><ul class="list" >
      //     <li>Yearly: </li> <div>${data.Russia.Turkey.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${data.Russia.Turkey.toLocaleString(undefined, {
      //       maximumFractionDigits: 0,
      //     })}</div>
      //     <li>Daily: </li> <div>${data.Russia.Turkey.toLocaleString(undefined, {
      //       maximumFractionDigits: 0,
      //     })}</div>
      //     <li>Hourly: </li> <div>${data.Russia.Turkey.toLocaleString(undefined, {
      //       maximumFractionDigits: 0,
      //     })}</div>
      //     <li>Per minute: </li> <div>${data.Russia.Turkey.toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Per second: </li> <div>${data.Russia.Turkey.toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 2 }
      //     )}</div>
      //     </ul>`,
      //   turkeyDataSpain: `<p>Turkeys in Spain</p><ul class="list" >
      // <li>Yearly: </li> <div>${data.Spain.Turkey.toLocaleString()}</div>
      // <li>Monthly: </li> <div>${(data.Spain.Turkey / 12).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Daily: </li> <div>${(data.Spain.Turkey / 365).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Hourly: </li> <div>${(data.Spain.Turkey / 365 / 24).toLocaleString(
      //   undefined,
      //   { maximumFractionDigits: 0 }
      // )}</div>
      // <li>Per minute: </li> <div>${(
      //   data.Spain.Turkey /
      //   365 /
      //   24 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      // <li>Per second: </li> <div>${(
      //   data.Spain.Turkey /
      //   365 /
      //   24 /
      //   60 /
      //   60
      // ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      // </ul>`,

      //   turkeyDataUk: `<p>Turkeys in the UK</p> <ul class="list" >
      //     <li>Yearly: </li> <div>${data.UnitedKingdom.Turkey.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(
      //       data.UnitedKingdom.Turkey / 12
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Daily: </li> <div>${(
      //       data.UnitedKingdom.Turkey / 365
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.UnitedKingdom.Turkey /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.UnitedKingdom.Turkey /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.UnitedKingdom.Turkey /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,

      //   turkeyDataUsa: `<p>Turkeys in the USA</p> <ul class="list" >
      //     <li>Yearly: </li> <div>${data.UnitedStates.Turkey.toLocaleString()}</div>
      //     <li>Monthly: </li> <div>${(
      //       data.UnitedStates.Turkey / 12
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Daily: </li> <div>${(data.UnitedStates.Turkey / 365).toLocaleString(
      //       undefined,
      //       { maximumFractionDigits: 0 }
      //     )}</div>
      //     <li>Hourly: </li> <div>${(
      //       data.UnitedStates.Turkey /
      //       365 /
      //       24
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per minute: </li> <div>${(
      //       data.UnitedStates.Turkey /
      //       365 /
      //       24 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
      //     <li>Per second: </li> <div>${(
      //       data.UnitedStates.Turkey /
      //       365 /
      //       24 /
      //       60 /
      //       60
      //     ).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
      //     </ul>`,

      //Function to format HTML fish data per country

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

      capitaMeatKgText: `<h2>Kilograms consumed per capita - 2020</h2>
        <div class="chart-container" >
        <canvas id="capitaAnimals"></canvas>
        </div>
        <p class="legend" ><span id="capitaTotal"></span> kg. of animals were consumed per person in 2020<span id="countryname"></span><fn> 3,4</fn>.</p>`,

      toggleLegend5AnimalsText: `<fn>3,4</fn>Animal kilograms consumed per person yearly. The sum equals the Chart by Totals.`,

      toggleBtnTextTotal: "Display chart by totals",
      toggleBtnTextAnimals: "Display chart by animals",

      toggleLegend5TotalsText: `<fn>3,4</fn>Total animal kilograms (land + sea animals) consumed per person, <span id="totalKg2019"></span> in <strong>2020</strong>.`,
    };

    //COWS data formatted with function inside fetchHtml object
    function assignCowsData() {
      fetchHtml.cowsDataWorld = fetchHtml.cowsData.buildCowsDataHTML(
        "the World",
        data.Worldwide.Cattle
      );
      fetchHtml.cowsDataArgentina = fetchHtml.cowsData.buildCowsDataHTML(
        "Argentina",
        data.Argentina.Cattle
      );
      fetchHtml.cowsDataBrazil = fetchHtml.cowsData.buildCowsDataHTML(
        "Brazil",
        data.Brazil.Cattle
      );
      fetchHtml.cowsDataCanada = fetchHtml.cowsData.buildCowsDataHTML(
        "Canada",
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
        "Germany",
        data.Germany.Cattle
      );
      fetchHtml.cowsDataIndia = fetchHtml.cowsData.buildCowsDataHTML(
        "India",
        data.India.Cattle
      );
      fetchHtml.cowsDataMexico = fetchHtml.cowsData.buildCowsDataHTML(
        "Mexico",
        data.Mexico.Cattle
      );
      fetchHtml.cowsDataRussia = fetchHtml.cowsData.buildCowsDataHTML(
        "Russia",
        data.Russia.Cattle
      );
      fetchHtml.cowsDataSpain = fetchHtml.cowsData.buildCowsDataHTML(
        "Spain",
        data.Spain.Cattle
      );
      fetchHtml.cowsDataUk = fetchHtml.cowsData.buildCowsDataHTML(
        "the United Kingdom",
        data.UnitedKingdom.Cattle
      );
      fetchHtml.cowsDataUsa = fetchHtml.cowsData.buildCowsDataHTML(
        "the USA",
        data.UnitedStates.Cattle
      );
    }
    assignCowsData();
    //PIGS data formatted with function inside fetchHtml object
    function assignPigsData() {
      fetchHtml.pigsDataWorld = fetchHtml.pigsData.buildPigsDataHTML(
        "the World",
        data.Worldwide.Pigs
      );
      fetchHtml.pigsDataArgentina = fetchHtml.pigsData.buildPigsDataHTML(
        "Argentina",
        data.Argentina.Pigs
      );
      fetchHtml.pigsDataBrazil = fetchHtml.pigsData.buildPigsDataHTML(
        "Brazil",
        data.Brazil.Pigs
      );
      fetchHtml.pigsDataCanada = fetchHtml.pigsData.buildPigsDataHTML(
        "Canada",
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
        "Germany",
        data.Germany.Pigs
      );
      fetchHtml.pigsDataIndia = fetchHtml.pigsData.buildPigsDataHTML(
        "India",
        data.India.Pigs
      );
      fetchHtml.pigsDataMexico = fetchHtml.pigsData.buildPigsDataHTML(
        "Mexico",
        data.Mexico.Pigs
      );
      fetchHtml.pigsDataRussia = fetchHtml.pigsData.buildPigsDataHTML(
        "Russia",
        data.Russia.Pigs
      );
      fetchHtml.pigsDataSpain = fetchHtml.pigsData.buildPigsDataHTML(
        "Spain",
        data.Spain.Pigs
      );
      fetchHtml.pigsDataUk = fetchHtml.pigsData.buildPigsDataHTML(
        "the United Kingdom",
        data.UnitedKingdom.Pigs
      );
      fetchHtml.pigsDataUsa = fetchHtml.pigsData.buildPigsDataHTML(
        "the USA",
        data.UnitedStates.Pigs
      );
    }
    assignPigsData();
    //Sheep data formatted with function inside fetchHtml object
    function assignSheepData() {
      fetchHtml.sheepDataWorld = fetchHtml.sheepData.buildSheepDataHTML(
        "the World",
        data.Worldwide.Sheep
      );
      fetchHtml.sheepDataArgentina = fetchHtml.sheepData.buildSheepDataHTML(
        "Argentina",
        data.Argentina.Sheep
      );
      fetchHtml.sheepDataBrazil = fetchHtml.sheepData.buildSheepDataHTML(
        "Brazil",
        data.Brazil.Sheep
      );
      fetchHtml.sheepDataCanada = fetchHtml.sheepData.buildSheepDataHTML(
        "Canada",
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
        "Germany",
        data.Germany.Sheep
      );
      fetchHtml.sheepDataIndia = fetchHtml.sheepData.buildSheepDataHTML(
        "India",
        data.India.Sheep
      );
      fetchHtml.sheepDataMexico = fetchHtml.sheepData.buildSheepDataHTML(
        "Mexico",
        data.Mexico.Sheep
      );
      fetchHtml.sheepDataRussia = fetchHtml.sheepData.buildSheepDataHTML(
        "Russia",
        data.Russia.Sheep
      );
      fetchHtml.sheepDataSpain = fetchHtml.sheepData.buildSheepDataHTML(
        "Spain",
        data.Spain.Sheep
      );
      fetchHtml.sheepDataUk = fetchHtml.sheepData.buildSheepDataHTML(
        "the United Kingdom",
        data.UnitedKingdom.Sheep
      );
      fetchHtml.sheepDataUsa = fetchHtml.sheepData.buildSheepDataHTML(
        "the USA",
        data.UnitedStates.Sheep
      );
    }
    assignSheepData();

    //Chicken data formatted with function inside fetchHtml object
    function assignChickenData() {
      fetchHtml.chickenDataWorld = fetchHtml.chickenData.buildChickenDataHTML(
        "the World",
        data.Worldwide.Chicken
      );
      fetchHtml.chickenDataArgentina =
        fetchHtml.chickenData.buildChickenDataHTML(
          "Argentina",
          data.Argentina.Chicken
        );
      fetchHtml.chickenDataBrazil = fetchHtml.chickenData.buildChickenDataHTML(
        "Brazil",
        data.Brazil.Chicken
      );
      fetchHtml.chickenDataCanada = fetchHtml.chickenData.buildChickenDataHTML(
        "Canada",
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
        "Germany",
        data.Germany.Chicken
      );
      fetchHtml.chickenDataIndia = fetchHtml.chickenData.buildChickenDataHTML(
        "India",
        data.India.Chicken
      );
      fetchHtml.chickenDataMexico = fetchHtml.chickenData.buildChickenDataHTML(
        "Mexico",
        data.Mexico.Chicken
      );
      fetchHtml.chickenDataRussia = fetchHtml.chickenData.buildChickenDataHTML(
        "Russia",
        data.Russia.Chicken
      );
      fetchHtml.chickenDataSpain = fetchHtml.chickenData.buildChickenDataHTML(
        "Spain",
        data.Spain.Chicken
      );
      fetchHtml.chickenDataUk = fetchHtml.chickenData.buildChickenDataHTML(
        "the United Kingdom",
        data.UnitedKingdom.Chicken
      );
      fetchHtml.chickenDataUsa = fetchHtml.chickenData.buildChickenDataHTML(
        "the USA",
        data.UnitedStates.Chicken
      );
    }
    assignChickenData();

    //Turkey data formatted with function inside fetchHtml object
    function assignTurkeyData() {
      fetchHtml.turkeyDataWorld = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "the World",
        data.Worldwide.Turkey
      );
      fetchHtml.turkeyDataArgentina = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "Argentina",
        data.Argentina.Turkey
      );
      fetchHtml.turkeyDataBrazil = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "Brazil",
        data.Brazil.Turkey
      );
      fetchHtml.turkeyDataCanada = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "Canada",
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
        "Germany",
        data.Germany.Turkey
      );
      fetchHtml.turkeyDataIndia = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "India",
        data.India.Turkey
      );
      fetchHtml.turkeyDataMexico = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "Mexico",
        data.Mexico.Turkey
      );
      fetchHtml.turkeyDataRussia = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "Russia",
        data.Russia.Turkey
      );
      fetchHtml.turkeyDataSpain = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "Spain",
        data.Spain.Turkey
      );
      fetchHtml.turkeyDataUk = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "the United Kingdom",
        data.UnitedKingdom.Turkey
      );
      fetchHtml.turkeyDataUsa = fetchHtml.turkeyData.buildTurkeyDataHTML(
        "the USA",
        data.UnitedStates.Turkey
      );
    }
    assignTurkeyData();

    //FISH data formatted with function inside fetchHtml object
    function assignFishData() {
      fetchHtml.fishDataWorld = fetchHtml.fishData.buildFishDataHTML(
        "the World",
        data.Worldwide.FishTonnes
      );
      fetchHtml.fishDataArgentina = fetchHtml.fishData.buildFishDataHTML(
        "Argentina",
        data.Argentina.FishTonnes
      );
      fetchHtml.fishDataBrazil = fetchHtml.fishData.buildFishDataHTML(
        "Brazil",
        data.Brazil.FishTonnes
      );
      fetchHtml.fishDataCanada = fetchHtml.fishData.buildFishDataHTML(
        "Canada",
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
        "Germany",
        data.Germany.FishTonnes
      );
      fetchHtml.fishDataIndia = fetchHtml.fishData.buildFishDataHTML(
        "India",
        data.India.FishTonnes
      );
      fetchHtml.fishDataMexico = fetchHtml.fishData.buildFishDataHTML(
        "Mexico",
        data.Mexico.FishTonnes
      );
      fetchHtml.fishDataRussia = fetchHtml.fishData.buildFishDataHTML(
        "Russia",
        data.Russia.FishTonnes
      );
      fetchHtml.fishDataSpain = fetchHtml.fishData.buildFishDataHTML(
        "Spain",
        data.Spain.FishTonnes
      );
      fetchHtml.fishDataUk = fetchHtml.fishData.buildFishDataHTML(
        "the United Kingdom",
        data.UnitedKingdom.FishTonnes
      );
      fetchHtml.fishDataUsa = fetchHtml.fishData.buildFishDataHTML(
        "the USA",
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
