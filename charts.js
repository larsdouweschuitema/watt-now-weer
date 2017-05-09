export function setup(charts) {
  const myRequest = new Request('data.json');
  fetch('/data.json')
    .then(
      response => {
        if (response.status !== 200) {
          console.log('blegh');
          return;
        }

        response.json().then(data => {
          const ctx = document.getElementById("myChart");
          const myChart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: data.charts.generators.labels,
              datasets:
              [
                {
                  label: 'Stroomverbruik',
                  fillColor: 'rgba(172,194,132,0.4)',
                  strokeColor: '#ACC26D',
                  pointColor: '#fff',
                  pointStrokeColor: '#9DB86D',
                  pointBorderColor: 'rgba(75,192,192,1)',
                  data: data.charts.generators.usage
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false
            }
          });
        });
      }
    );
}
