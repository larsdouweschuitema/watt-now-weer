import {setup as setupCharts} from './charts.js';
import initMap from './map.js';

setupCharts(document.querySelector('charts'));
initMap(document.getElementById('map'));
