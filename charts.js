//Land Animals Chart
const ctx = document.getElementById('LandAnimalsChart');
  
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020'],
    datasets: [{
      label: 'Land Animals',
      data: [9405060265, 12461186834, 14992696357, 20272205738, 23830823327, 29610097333, 36719323350, 43381119444, 50442274485, 59854961069, 67474706595, 74275780097
      ],
      borderWidth: 2,
      borderColor: 'rgba(217, 129, 53, 0.9)',
      pointStyle: 'circle',
    },{
    
    label: 'Human Population',
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
      label: 'Land animals per person per year',
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



//Sea Animals Chart
const ctxFish = document.getElementById('SeaAnimalsChart');

new Chart(ctxFish, {
  type: 'line',
  data: {
    labels: ['1965', '1970', '1975', '1980', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2019'],
    datasets: [{
      label: 'Sea Animals in kg.',
      data: [49206392000, 64587352000, 64495600000, 70873936000, 85344640000, 96847704000, 115577856000, 124331952000, 134890976000, 143832096000, 162916064000, 171094560000
      ],
      borderWidth: 2,
      borderColor: 'rgba(217, 129, 53, 0.9)',
      pointStyle: 'circle',
    },{
    
    label: 'Human Population',
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
      label: 'Sea animal Kg. per person per year',
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

