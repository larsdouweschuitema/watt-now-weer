export default function initMap(element) {
  const map = L.map('map', {
    crs: L.CRS.Simple
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

  L.marker([100, 200], {icon: iconEnergy}).addTo(map).bindPopup(`
  <h3>Powerzone #3</h3>
  <dl>
    <dt>Verbruik</dt>
    <dd>Niet veel</dd>
    <dt>Generatoren</dt>
    <dd>Type A (3)</dd>
    <dd>Type B (1)</dd>
  </dl>
  `);
  L.marker([150, 75], {icon: iconFood}).addTo(map).bindPopup('I\'m another marker');


  map.fitBounds(bounds);
}
