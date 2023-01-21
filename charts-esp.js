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

