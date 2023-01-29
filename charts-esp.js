const ctx = document.getElementById('LandAnimalsChart');
const ctxFish = document.getElementById('SeaAnimalsChart');
  
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020'],
    datasets: [{
      label: 'Animales Terrestres',
      data: [9405060265, 12461186834, 14992696357, 20272205738, 23830823327, 29610097333, 36719323350, 43381119444, 50442274485, 59854961069, 67474706595, 74275780097
      ],
      borderWidth: 2,
      borderColor: 'rgba(217, 129, 53, 0.9)',
      pointStyle: 'circle',
    },{
    
    label: 'Población Humana',
    data: [3339583597, 3700437046, 4079480606, 4458003514, 4870921740, 5327231061, 5744212979, 6143493823, 6541907027, 6956823603, 7379797139, 7794798739
    ],
    borderWidth: 2,
    borderColor: 'rgba(100, 100, 100, 0.9)',
    pointStyle: 'circle',
  }]
  },
  options: {
    maintainAspectRatio: false,
    aspectRatio: 1|1,
    color: '#555',
  }
});

//Land Animals per person per year Chart
const ctxLandAnimalsPerPerson = document.getElementById('LandAnimalsPerPersonChart');
let LandAnimalsPerPersonArray = [9405060265/3339583597, 12461186834/3700437046, 14992696357/4079480606, 20272205738/4458003514, 23830823327/4870921740, 29610097333/5327231061, 36719323350/5744212979, 43381119444/6143493823, 50442274485/6541907027, 59854961069/6956823603, 67474706595/7379797139, 74275780097/7794798739
];

LandAnimalsPerPersonArray = LandAnimalsPerPersonArray.map(function(each_element){
  return Number (each_element.toFixed(1));
});
  
new Chart(ctxLandAnimalsPerPerson, {
  type: 'line',
  data: {
    labels: ['1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020'],
    datasets: [{
      label: 'Animales terrestres por persona',
      data: LandAnimalsPerPersonArray,
      borderWidth: 2,
      borderColor: 'rgba(217, 129, 53, 0.9)',
      pointStyle: 'circle',
      
    }]
  },
  options: {
    
    maintainAspectRatio: false,
    aspectRatio: 1|1,
    color: '#555',
  }
});


new Chart(ctxFish, {
  type: 'line',
  data: {
    labels: ['1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2019'],
    datasets: [{
      label: 'Animales Marinos en kg.',
      data: [49206392000, 64587352000, 64495600000, 70873936000, 85344640000, 96847704000, 115577856000, 124331952000, 134890976000, 143832096000, 162916064000, 171094560000
      ],
      borderWidth: 2,
      borderColor: 'rgba(217, 129, 53, 0.9)',
      pointStyle: 'circle',
    },{
    
    label: 'Población Humana',
    data: [3339583597, 3700437046, 4079480606, 4458003514, 4870921740, 5327231061, 5744212979, 6143493823, 6541907027, 6956823603, 7379797139, 7713468100
    ],
    borderWidth: 2,
    borderColor: 'rgba(100, 100, 100, 0.9)',
    pointStyle: 'circle',
  }]
  },
  options: {
    maintainAspectRatio: false,
    aspectRatio: 1|1,
    color: '#555',
  }
});

//Sea Animals per person per year Chart
const ctxSeaAnimalsPerPerson = document.getElementById('SeaAnimalsPerPersonChart');
let SeaAnimalsPerPersonArray = [49206392000/3339583597, 64587352000/3700437046, 64495600000/4079480606, 70873936000/4458003514, 85344640000/4870921740, 96847704000/5327231061, 115577856000/5744212979, 124331952000/6143493823, 134890976000/6541907027, 143832096000/6956823603, 162916064000/7379797139, 171094560000/7713468100
];
SeaAnimalsPerPersonArray = SeaAnimalsPerPersonArray.map(function(each_element){
  return Number (each_element.toFixed(1));
} );

new Chart(ctxSeaAnimalsPerPerson, {
  type: 'line',
  data: {
    labels: ['1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2019'],
    datasets: [{
      label: 'Animales marinos (Kg.) por persona al año',
      data: SeaAnimalsPerPersonArray,
      borderWidth: 2,
      borderColor: 'rgba(217, 129, 53, 0.9)',
      pointStyle: 'circle',
    }]
  },
  options: {
    maintainAspectRatio: false,
    aspectRatio: 1|1,
    color: '#555',
  }
});

//Per Capita Charts

let meatKg;
let worldMeatCapita = [8.94,	15.48,	1.97,	15.75,	0.67,	19.75];
let argMeatCapita = [48.09,	14.49,	1.34,	45.10,	1.21,	7.16];
let braMeatCapita = [37.12,	14.35,	0.60,	46.94,	0.54,	8.95];
let canMeatCapita = [26.62,	24.97,	1.00,	41.08,	0.01,	21.84];
let chiMeatCapita = [6.19,	39.11,	3.64,	14.21,	0.53,	38.49];
let colMeatCapita = [14.72,	11.31,	0.22,	35.91,	0.11,	6.86];
let ecuMeatCapita = [13.22, 15.07, 0.35, 17.99, 0.06, 8.35];
let indMeatCapita = [1,	0.26,	0.60,	3.09,	0.00,	6.76];
let mexMeatCapita = [14.85,	18.28,	0.86,	35.61,	0.63,	14.36];
let rusMeatCapita = [13.15,	27.09,	1.40,	31.35,	3.39,	20.06];
let spaMeatCapita = [13.71,	55.21,	2.05,	33.34,	1.63,	42.40];
let usaMeatCapita = [37.66,	30.84,	0.53,	58.60,	0.81,	22.13];



function capitaChart(){

const ctxCapita = document.getElementById('capitaAnimals');

let totalMeatKgEl = document.getElementById('capitaTotal');
let totalMeatKg = meatKg.reduce((partialSum, a) => partialSum + a, 0); 
console.log(totalMeatKg);

totalMeatKgEl.textContent = totalMeatKg.toLocaleString();

new Chart(ctxCapita, {
  type: 'bar',
  data: {
    labels: ['Ganado', 'Cerdos', 'Ovejas', 'Aves', 'Otros', 'Marinos' ],
    datasets: [{
      label: 'Kg. per capita (2019)',
      data: meatKg,
      borderWidth: 2,
      borderColor: 'rgba(217, 129, 53, 0.9)',
      backgroundColor: 'rgba(217, 129, 53, 0.4)',
      pointStyle: 'circle',
      borderSkipped: 'bottom',
      barPercentage: '0.5',
  }]
  },
  options: {
    maintainAspectRatio: false,
    aspectRatio: 1|1,
    color: 'rgba(217, 129, 53, 0.9)',
    scales: {
      x: {
          grid: {offset: true}
          
      }
  }
  }
});
}