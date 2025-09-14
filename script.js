$(document).ready(() => {
  $("#toggle-nav").click(() => {
    $("#toggle-nav i").toggleClass("fa-xmark fa-bars");
    $("nav ul li").slideToggle("slow");
  });
});

// map
const SHOP_LOCATION = [52.19051955682796, 20.893846989849326];
const DEFAULT_ZOOM = 16;

const TILE_LAYER = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const ATTRIBUTION =
  '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const map = L.map("map").setView(SHOP_LOCATION, DEFAULT_ZOOM);

const tiles = L.tileLayer(TILE_LAYER, {
  maxZoom: 19,
  attribution: ATTRIBUTION,
}).addTo(map);

const iconUrl = "imgs/red-brick.png";

const redBrickIcon = new L.Icon({
  iconUrl: iconUrl,
  iconSize: [50, 50],
  iconAnchor: [25, 25],
  popupAnchor: [0, -20],
});

const popupMarker = L.marker(SHOP_LOCATION, { icon: redBrickIcon }).addTo(map);

popupMarker.bindPopup("Nasz sklep<br>ul. Kolorowa 8, Warszawa").openPopup();
