export const data = {
  labels: ['Creatine consumed', 'Creatine Remaining'],
  datasets: [{
    label: 'Creatine Remaining',
    data: [10, 15],
    backgroundColor: ['white', 'green'],
    borderColor: ['white', 'green']
  }]
};

export const options = {
  plugins: {
    legend: {
      labels: {
        color: 'white',
      }
    }
  }
};