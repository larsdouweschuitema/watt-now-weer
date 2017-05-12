export function setup(charts) {
  const ctx = document.getElementById('graph').getContext('2d');

  const startingData = {
    labels: [],
    datasets: [
      {
        fillColor: 'transparent',
        strokeColor: '#f12d4b88',
        pointColor: 'transparent',
        pointStrokeColor: 'transparent',
        data: []
      },
      {
        fillColor: 'transparent',
        strokeColor: '#f12d4b',
        pointColor: 'transparent',
        pointStrokeColor: 'transparent',
        data: []
      },
      {
        fillColor: 'transparent',
        strokeColor: '#f12d4b',
        pointColor: 'transparent',
        pointStrokeColor: 'transparent',
        data: []
      }
    ]
  };

  const options = {
    animation: false,
    scaleOverride: true,
    scaleSteps: 8,
    scaleStepWidth: 10000,
    scaleStartValue: 0,

    scales: {
      xAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };

  let count = 0;

  const chart = new Chart(ctx).Line(startingData, options);

  const ws = new WebSocket('ws://power.rijks.website:80');

  ws.onmessage = function (message) {
    chart.addData(JSON.parse(message.data), '');
    if (count > 100) {
      chart.removeData();
    }
    count++;
  }
}
