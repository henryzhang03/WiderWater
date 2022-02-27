let delayed;
const pHctx = document.getElementById('pHChart').getContext('2d');
const pHChart = new Chart(pHctx, {
type: 'bar',
data: {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [{
    label: 'Average pH',
    data: [6.8, 7.2, 8.1, 7.9, 8.5, 7.1, 6.2],
    backgroundColor: [
      'rgba(54, 162, 235, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(54, 162, 235, 0.8)',
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(54, 162, 235, 1)'
    ],
    borderWidth: 1
  }]
    
},
options: {
  plugins: {
    title: {
      display: true,
      text: 'pH',
      font: {
        size: 40,
        family: 'raleway',
        weight: 'normal',
      },
    }
  },
  animation: {
    onComplete: () => {
      delayed = true;
    },
    delay: (context) => {
      let delay = 0;
      if (context.type === 'data' && context.mode === 'default' && !delayed) {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      suggestedMax: 10
    }
  }
}
});

const oxygenctx = document.getElementById('oxygenChart').getContext('2d');
  const oxygenChart = new Chart(oxygenctx, {
  type: 'bar',
  data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
          label: 'Average Dissolved Oxygen (mg/L)',
          data: [6.61, 7.13, 8.09, 7.74, 7.32, 6.51, 6.78],
          backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 99, 132, 0.8)',
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
      }]
  },
  
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Dissolved Oxygen',
        font: {
          size: 40,
          family: 'raleway',
          weight: 'normal',
        },
      }
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
          y: {
              beginAtZero: true,
              suggestedMax: 10
          }
      }
  }
});

const ctxturbidity = document.getElementById('turbidityChart').getContext('2d');
    const myChart3 = new Chart(ctxturbidity, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Average Turbidity (NTU)',
            data: [0.12, 0.2, 0.17, 0.14, 0.15, 0.1, 0.19],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 0.8)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
        
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Turbidity',
          font: {
            size: 40,
            family: 'raleway',
            weight: 'normal',
          },
        }
      },
      animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 300 + context.datasetIndex * 100;
          }
          return delay;
        },
      },
      scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 0.3
            }
        }
    }
});
const conductanceUpperBound = {
  type: 'line',
  scaleID: 'y',
  borderWidth: 3,
  borderColor: 'black',
  value: 1000,
  label: {
    content: 'Line annotation at x=0.5',
    enabled: true
  },
};

const annotation2 = {
  type: 'line',
  scaleID: 'y',
  borderWidth: 3,
  borderColor: 'black',
  value: 4,
  label: {
    rotation: 'auto',
    position: 'start',
    backgroundColor: 'black',
    content: 'Line at x=Label 5',
    enabled: true
  }
};
const ctxcon = document.getElementById('conductanceChart').getContext('2d');
  const myChart4 = new Chart(ctxcon, {
  type: 'bar',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Average Specific Conductance (µS/cm at 25°C)',
      data: [829, 782, 893, 982, 860, 940, 920],
      backgroundColor: [
        'rgba(54, 162, 235, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(54, 162, 235, 0.8)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
      
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Specific Conductance',
        font: {
          size: 40,
          family: 'raleway',
          weight: 'normal',
        },
      },
      annotation: {
        annotations: {
          conductanceUpperBound
        }
      }
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
          y: {
              beginAtZero: true,
              suggestedMax: 10
          }
      }
  }
  });