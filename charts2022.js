//Language Function
let language;
let setLanguage = () => {
  const bodyLanguage = $("body").attr("lang"); // Get the "lang" attribute value
  if (bodyLanguage === "en") {
    language = "eng";
  } else if (bodyLanguage === "es") {
    language = "spa";
  }
  // console.log("Language from charts file: ", language);
};
setLanguage();

//Land Animals Chart
var labelLandAnimals;
var labelHumanPopulation;
var labelLandAnimalsPerPerson;
var labelSeaAnimalsInKg;
var labelSeaAnimalKgPerPerson;
var labelTotalKgPerPerson;
var labelAnimalsArray = [];
var labelCattle,
  labelPigs,
  labelSheep,
  labelPoultry,
  labelOthers,
  labelSeaAnimals;
var labelKgPerPerson2021;
const labelTranslation = () => {
  if (language === "eng") {
    labelLandAnimals = "Land Animals";
    labelHumanPopulation = "Human Population";
    labelLandAnimalsPerPerson = "Land animals per person";
    labelSeaAnimalsInKg = "Sea animals in kg.";
    labelSeaAnimalKgPerPerson = "Sea animal kg. per person";
    labelTotalKgPerPerson = "Total kg. per person";
    labelAnimalsArray = [
      "Cattle",
      "Pigs",
      "Sheep & Goat",
      "Poultry",
      "Others",
      "Sea Animals",
    ];
    labelCattle = "Cattle";
    labelPigs = "Pigs";
    labelSheep = "Sheep & Goats";
    labelPoultry = "Poultry";
    labelOthers = "Others";
    labelSeaAnimals = "Sea Animals";
    labelKgPerPerson2021 = "Kg. per person (2021)";
  } else if (language === "spa") {
    labelLandAnimals = "Animales Terrestres";
    labelHumanPopulation = "Población Humana";
    labelLandAnimalsPerPerson = "Animales terrestres por persona";
    labelSeaAnimalsInKg = "Animales marinos en kg.";
    labelSeaAnimalKgPerPerson = "Animales marinos en kg. por persona";
    labelTotalKgPerPerson = "Kg. totales por persona";
    labelAnimalsArray = [
      "Vacas",
      "Cerdos",
      "Ovejas y Chivos",
      "Aves de corral",
      "Otros",
      "Animales marinos",
    ];
    labelCattle = "Vacas";
    labelPigs = "Cerdos";
    labelSheep = "Ovejas y Chivos";
    labelPoultry = "Aves de corral";
    labelOthers = "Otros";
    labelSeaAnimals = "Animales marinos";
    labelKgPerPerson2021 = "Kg. por persona (2021)";
  }
};
labelTranslation();
// console.log("labelLandAnimals is", labelLandAnimals);
const ctx = document.getElementById("LandAnimalsChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "1965",
      "1970",
      "1975",
      "1980",
      "1985",
      "1990",
      "1995",
      "2000",
      "2005",
      "2010",
      "2015",
      "2020",
    ],
    datasets: [
      {
        label: labelLandAnimals,
        data: [
          9405060265, 12461186834, 14992696357, 20272205738, 23830823327,
          29610097333, 36719323350, 43381119444, 50442274485, 59854961069,
          67474706595, 74275780097,
        ],
        borderWidth: 2,
        borderColor: "rgba(217, 129, 53, 0.9)",
        backgroundColor: "rgba(217, 129, 53, 0.9)",
        pointStyle: "circle",
      },
      {
        label: labelHumanPopulation,
        data: [
          3339583597, 3700437046, 4079480606, 4458003514, 4870921740,
          5327231061, 5744212979, 6143493823, 6541907027, 6956823603,
          7379797139, 7840952880,
        ],
        borderWidth: 2,
        borderColor: "rgba(100, 100, 100, 0.9)",
        backgroundColor: "rgba(100, 100, 100, 0.9)",
        pointStyle: "circle",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    aspectRatio: 1 | 1,
    color: "#555",
  },
});

//Land Animals per person per year Chart
const ctxLandAnimalsPerPerson = document.getElementById(
  "LandAnimalsPerPersonChart"
);
let LandAnimalsPerPersonArray = [
  9405060265 / 3339583597,
  12461186834 / 3700437046,
  14992696357 / 4079480606,
  20272205738 / 4458003514,
  23830823327 / 4870921740,
  29610097333 / 5327231061,
  36719323350 / 5744212979,
  43381119444 / 6143493823,
  50442274485 / 6541907027,
  59854961069 / 6956823603,
  67474706595 / 7379797139,
  74275780097 / 7840952880,
];

LandAnimalsPerPersonArray = LandAnimalsPerPersonArray.map(function (
  each_element
) {
  return Number(each_element.toFixed(1));
});

new Chart(ctxLandAnimalsPerPerson, {
  type: "line",
  data: {
    labels: [
      "1965",
      "1970",
      "1975",
      "1980",
      "1985",
      "1990",
      "1995",
      "2000",
      "2005",
      "2010",
      "2015",
      "2020",
    ],
    datasets: [
      {
        label: labelLandAnimalsPerPerson,
        data: LandAnimalsPerPersonArray,
        borderWidth: 2,
        borderColor: "rgba(217, 129, 53, 0.9)",
        backgroundColor: "rgba(217, 129, 53, 0.9)",
        pointStyle: "circle",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    aspectRatio: 1 | 1,
    color: "#555",
  },
});

//Sea Animals Chart
const ctxFish = document.getElementById("SeaAnimalsChart");

new Chart(ctxFish, {
  type: "line",
  data: {
    labels: [
      "1965",
      "1970",
      "1975",
      "1980",
      "1985",
      "1990",
      "1995",
      "2000",
      "2005",
      "2010",
      "2015",
      "2020",
    ],
    datasets: [
      {
        label: labelSeaAnimalsInKg,
        data: [
          49206392000, 64587352000, 64495600000, 70873936000, 85344640000,
          96847704000, 115577856000, 124331952000, 134890976000, 143832096000,
          162916064000, 176592620000,
        ],
        borderWidth: 2,
        borderColor: "rgba(217, 129, 53, 0.9)",
        backgroundColor: "rgba(217, 129, 53, 0.9)",
        pointStyle: "circle",
      },
      {
        label: labelHumanPopulation,
        data: [
          3339583597, 3700437046, 4079480606, 4458003514, 4870921740,
          5327231061, 5744212979, 6143493823, 6541907027, 6956823603,
          7379797139, 7840952880,
        ],
        borderWidth: 2,
        borderColor: "rgba(100, 100, 100, 0.9)",
        backgroundColor: "rgba(100, 100, 100, 0.9)",
        pointStyle: "circle",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    aspectRatio: 1 | 1,
    color: "#555",
  },
});

//Sea Animals per person per year Chart
const ctxSeaAnimalsPerPerson = document.getElementById(
  "SeaAnimalsPerPersonChart"
);
let SeaAnimalsPerPersonArray = [
  9.87, 10.73, 11.56, 11.37, 12.41, 13.39, 14.87, 15.67, 16.71, 18.27, 19.7,
  20.25,
];
SeaAnimalsPerPersonArray = SeaAnimalsPerPersonArray.map(function (
  each_element
) {
  return Number(each_element.toFixed(1));
});

new Chart(ctxSeaAnimalsPerPerson, {
  type: "line",
  data: {
    labels: [
      "1965",
      "1970",
      "1975",
      "1980",
      "1985",
      "1990",
      "1995",
      "2000",
      "2005",
      "2010",
      "2015",
      "2020",
    ],
    datasets: [
      {
        label: labelSeaAnimalKgPerPerson,
        data: SeaAnimalsPerPersonArray,
        borderWidth: 2,
        borderColor: "rgba(217, 129, 53, 0.9)",
        backgroundColor: "rgba(217, 129, 53, 0.9)",
        pointStyle: "circle",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    aspectRatio: 1 | 1,
    color: "#555",
  },
});

//Per Capita COUNTRY BAR Charts

fetchData().then(([data, fetchHtml]) => {
  const countries = [
    "World",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Argentina",
    "Australia",
    "Brazil",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Ecuador",
    "Germany",
    "France",
    "India",
    "Japan",
    "Mexico",
    "Russia",
    "SouthAfrica",
    "Spain",
    "Uk",
    "Usa",
  ];

  const meatData = {}; // Store meat data for all countries

  countries.forEach((country) => {
    meatData[`meatKgCapita${country}`] = [
      fetchHtml[`cowsKgPerCapita${country}`],
      fetchHtml[`pigsKgPerCapita${country}`],
      fetchHtml[`sheepKgPerCapita${country}`],
      fetchHtml[`poultryKgPerCapita${country}`],
      fetchHtml[`othersKgPerCapita${country}`],
      fetchHtml[`fishKgPerCapita${country}`],
    ];
  });

  processMeatData(meatData); // Pass meat data object to the processing function
});
var worldMeatKgCapita,
  africaMeatKgCapita,
  americasMeatKgCapita,
  asiaMeatKgCapita,
  europeMeatKgCapita,
  oceaniaMeatKgCapita,
  argMeatKgCapita,
  ausMeatKgCapita,
  braMeatKgCapita,
  canMeatKgCapita,
  chileMeatKgCapita,
  chiMeatKgCapita,
  colMeatKgCapita,
  ecuMeatKgCapita,
  fraMeatKgCapita,
  gerMeatKgCapita,
  indMeatKgCapita,
  japMeatKgCapita,
  mexMeatKgCapita,
  rusMeatKgCapita,
  southAfricaMeatKgCapita,
  spaMeatKgCapita,
  ukMeatKgCapita,
  usaMeatKgCapita;

function processMeatData(meatData) {
  worldMeatKgCapita = meatData[`meatKgCapitaWorld`];
  africaMeatKgCapita = meatData[`meatKgCapitaAfrica`];
  americasMeatKgCapita = meatData[`meatKgCapitaAmericas`];
  asiaMeatKgCapita = meatData[`meatKgCapitaAsia`];
  europeMeatKgCapita = meatData[`meatKgCapitaEurope`];
  oceaniaMeatKgCapita = meatData[`meatKgCapitaOceania`];
  argMeatKgCapita = meatData[`meatKgCapitaArgentina`];
  ausMeatKgCapita = meatData[`meatKgCapitaAustralia`];
  braMeatKgCapita = meatData[`meatKgCapitaBrazil`];
  canMeatKgCapita = meatData[`meatKgCapitaCanada`];
  chileMeatKgCapita = meatData[`meatKgCapitaChile`];
  chiMeatKgCapita = meatData[`meatKgCapitaChina`];
  colMeatKgCapita = meatData[`meatKgCapitaColombia`];
  ecuMeatKgCapita = meatData[`meatKgCapitaEcuador`];
  fraMeatKgCapita = meatData[`meatKgCapitaFrance`];
  gerMeatKgCapita = meatData[`meatKgCapitaGermany`];
  indMeatKgCapita = meatData[`meatKgCapitaIndia`];
  japMeatKgCapita = meatData[`meatKgCapitaJapan`];
  mexMeatKgCapita = meatData[`meatKgCapitaMexico`];
  rusMeatKgCapita = meatData[`meatKgCapitaRussia`];
  southAfricaMeatKgCapita = meatData[`meatKgCapitaSouthAfrica`];
  spaMeatKgCapita = meatData[`meatKgCapitaSpain`];
  ukMeatKgCapita = meatData[`meatKgCapitaUk`];
  usaMeatKgCapita = meatData[`meatKgCapitaUsa`];

  // console.log("-------World meat data Per Capita:", worldMeatKgCapita);
  // console.log(
  //   `Meat kg per capita in South Africa at the chart file:`,
  //   southAfricaMeatKgCapita
  // );
}

let meatKg;
/*OLD 2020 data:*/
// let worldMeatKgCapita = [8.98, 14.45, 1.96, 16.21, 0.66, 20.25];
// let argMeatKgCapita = [47.1, 14.47, 1.43, 46.39, 1.15, 6.8];
// let braMeatKgCapita = [35.3, 14.15, 0.65, 48.25, 0.51, 8.06];
// let canMeatKgCapita = [27.39, 21.31, 1.06, 39.94, 0.5, 20.65];
// let chiMeatKgCapita = [6.74, 35.7, 3.8, 15.13, 0.53, 40.33];
// let colMeatKgCapita = [13.67, 10.51, 0.02, 33.75, 0.11, 8.88];
// let ecuMeatKgCapita = [13.3, 12.93, 0.31, 18.94, 0.06, 8.25];
// let gerMeatKgCapita = [14.7, 44.25, 0.97, 18.44, 0.83, 12.66];
// let indMeatKgCapita = [1.13, 0.24, 0.59, 2.57, 0.0, 7.89];
// let mexMeatKgCapita = [14.93, 19.52, 0.84, 33.77, 0.64, 13.95];
// let rusMeatKgCapita = [12.9, 28.26, 1.47, 30.85, 3.39, 21.76];
// let spaMeatKgCapita = [12.33, 51.88, 1.88, 33.17, 1.5, 40.3];
// let ukMeatKgCapita = [17.56, 24.34, 3.99, 33.13, 1.05, 18.13];
// let usaMeatKgCapita = [37.31, 30.19, 0.6, 57.83, 0.8, 22.45];

function capitaChart() {
  const ctxCapita = document.getElementById("capitaAnimals");

  let totalMeatKgEl = document.getElementById("capitaTotal");
  var totalMeatKg = meatKg.reduce((partialSum, a) => partialSum + a, 0);
  // console.log("***Total World Meat KG in 2021", totalMeatKg);
  totalMeatKgEl.textContent = totalMeatKg.toLocaleString();

  new Chart(ctxCapita, {
    type: "bar",
    data: {
      labels: labelAnimalsArray,
      datasets: [
        {
          label: labelKgPerPerson2021,
          data: meatKg,
          borderWidth: 2,
          borderColor: "rgba(217, 129, 53, 0.9)",
          backgroundColor: "rgba(217, 129, 53, 0.4)",
          pointStyle: "circle",
          borderSkipped: "bottom",
          barPercentage: "0.5",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      aspectRatio: 1 | 1,
      color: "rgba(217, 129, 53, 0.9)",
      scales: {
        x: {
          grid: { offset: true },
        },
      },
    },
  });
}

//Per Capita Total World Chart with toggle function

//For the Total Kg. per capita Sum from 1965 to 2020:
var cattlePerCapita = [
  9.84, 10.66, 10.98, 10.48, 10.3, 10.2, 9.47, 9.37, 9.23, 9.23, 8.79, 8.98,
];
var pigsPerCapita = [
  9.2, 9.41, 10.12, 11.71, 12.21, 12.86, 13.26, 13.89, 14.13, 15.35, 15.02,
  14.45,
];
var sheepPerCapita = [
  1.79, 1.76, 1.6, 1.57, 1.59, 1.72, 1.73, 1.77, 1.83, 1.76, 1.96, 1.96,
];
var poultryPerCapita = [
  3.24, 4.01, 4.52, 5.69, 6.24, 7.54, 9.23, 10.76, 11.93, 13.8, 15.02, 16.21,
];
var OthersPerCapita = [
  0.81, 0.82, 0.8, 0.77, 0.74, 0.66, 0.75, 0.75, 0.77, 0.79, 0.83, 0.66,
];
var seaAnimalsPerCapita = [
  9.87, 10.73, 11.56, 11.37, 12.41, 13.39, 14.87, 15.67, 16.71, 18.27, 19.7,
  20.25,
];

var totalKgPerCapita = [];

// Iterate through the arrays using a for loop
for (var i = 0; i < 12; i++) {
  // Sum the values at the current index (i) of all arrays
  var sum =
    cattlePerCapita[i] +
    pigsPerCapita[i] +
    sheepPerCapita[i] +
    poultryPerCapita[i] +
    OthersPerCapita[i] +
    seaAnimalsPerCapita[i];
  // Push the sum into the totalKgPerCapita array
  totalKgPerCapita.push(sum);
}
function updateTotalKg2020Legend() {
  let totalKg2020 = document.getElementById("totalKg2020");
  totalKg2020.textContent = totalKgPerCapita.slice(-1) + " Kg.";
}

function chart5Toggle() {
  let yearsTill2020 = [
    "1965",
    "1970",
    "1975",
    "1980",
    "1985",
    "1990",
    "1995",
    "2000",
    "2005",
    "2010",
    "2015",
    "2020",
  ];

  if (chart5 == "total") {
    let chartStatus = Chart.getChart("capitaYearly"); // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    let ctxCapitaYearly = document.getElementById("capitaYearly");

    new Chart(ctxCapitaYearly, {
      type: "line",
      data: {
        labels: yearsTill2020,
        datasets: [
          {
            label: labelTotalKgPerPerson,
            data: totalKgPerCapita,
            borderWidth: 2,
            borderColor: "rgba(217, 129, 53, 0.9)",
            backgroundColor: "rgba(217, 129, 53, 0.9)",
            pointStyle: "circle",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        aspectRatio: 1 | 1,
        color: "#555",
      },
    });

    // console.log (Total2019);

    //Per Capita Per Animal World Chart
  } else if (chart5 == "per animal") {
    let chartStatus = Chart.getChart("capitaYearly"); // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    let ctxCapitaYearlyAnimal = document.getElementById("capitaYearly");

    new Chart(ctxCapitaYearlyAnimal, {
      type: "line",
      data: {
        labels: yearsTill2020,
        datasets: [
          {
            label: labelCattle,
            data: cattlePerCapita,
            borderWidth: 2,
            borderColor: "#ff000080",
            backgroundColor: "#ff000080",
            pointStyle: "circle",
          },
          {
            label: labelPigs,
            data: pigsPerCapita,
            borderWidth: 2,
            borderColor: "#ff00e180",
            backgroundColor: "#ff00e180",
            pointStyle: "circle",
          },
          {
            label: labelSheep,
            data: sheepPerCapita,
            borderWidth: 2,
            borderColor: "#5500ff80",
            backgroundColor: "#5500ff80",
            pointStyle: "circle",
          },
          {
            label: labelPoultry,
            data: poultryPerCapita,
            borderWidth: 2,
            borderColor: "#006aff80",
            backgroundColor: "#006aff80",
            pointStyle: "circle",
          },
          {
            label: labelOthers,
            data: OthersPerCapita,
            borderWidth: 2,
            borderColor: "#00ffbf80",
            backgroundColor: "#00ffbf80",
            pointStyle: "circle",
          },
          {
            label: labelSeaAnimals,
            data: seaAnimalsPerCapita,
            borderWidth: 2,
            borderColor: "#00ff0880",
            backgroundColor: "#00ff0880",
            pointStyle: "circle",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        aspectRatio: 1 | 1,
        color: "#555",
      },
    });
  }
  console.log("chart5toggle function completed");
}
$("#collapse2-TotalCapita").on("click", chart5Toggle);