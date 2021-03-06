export default function initMap(element) {
  const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 1
  });

  const bounds = [[0, 0], [200, 400]];
  const image = L.imageOverlay('/img/demo-map.png', bounds).addTo(map);

  const marker = L.Icon.extend({
    options: {
      iconSize: [25, 25],
      popupAnchor: [0, -15]
    }
  });

  const iconEnergy = new marker({iconUrl: '/img/icon-energy.svg'});
  const iconFood = new marker({iconUrl: '/img/icon-food.svg'});

  // Radius around powerzone 3
  L.circle([100, 200], {
    color: 'grey',
    fillColor: 'grey',
    fillOpacity: 0.3,
    radius: 50
  }).addTo(map);

  L.marker([100, 200], {icon: iconEnergy, draggable: true}).addTo(map).bindPopup(`
  <h3>Powerzone #3</h3>
  <dl>
    <dt>Verbruik</dt>
    <dd>Niet veel</dd>
    <dt>Generatoren</dt>
    <dd>Type A (3)</dd>
    <dd>Type B (1)</dd>
  </dl>
  `);

  // Radius powerzone 2
  L.circle([150, 310], {
    color: 'grey',
    fillColor: 'grey',
    fillOpacity: 0.3,
    radius: 50
  }).addTo(map);

  L.marker([150, 310], {icon: iconEnergy, draggable: true}).addTo(map).bindPopup(`
  <h3>Powerzone #2</h3>
  <dl>
    <dt>Verbruik</dt>
    <dd>Overkill</dd>
    <dt>Generatoren</dt>
    <dd>Type A (2)</dd>
  </dl>
  `);

  // Radius powerzone 1
  L.circle([50, 320], {
    color: 'grey',
    fillColor: 'grey',
    fillOpacity: 0.3,
    radius: 50
  }).addTo(map);

  L.marker([50, 320], {icon: iconEnergy, draggable: true}).addTo(map).bindPopup(`
  <h3>Powerzone #1</h3>
  <dl>
    <dt>Verbruik</dt>
    <dd>Matig</dd>
    <dt>Generatoren</dt>
    <dd>Type D (3)</dd>
  </dl>
  `);

  L.marker([150, 75], {icon: iconFood, draggable: true}).addTo(map).bindPopup('I\'m another marker');

  map.fitBounds(bounds);
}
