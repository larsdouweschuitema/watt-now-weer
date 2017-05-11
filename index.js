import {setup as setupCharts} from './charts.js';
import initMap from './map.js';

if (document.body.classList.contains('index')) {
  setupCharts(document.querySelector('charts'));
}

initMap(document.getElementById('map'));
