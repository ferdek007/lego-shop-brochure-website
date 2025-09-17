$(document).ready(() => {
  $("#toggle-nav").click(() => {
    $("#toggle-nav i").toggleClass("fa-xmark fa-bars");
    $("nav ul li").slideToggle();
  });
  $(".nav-item").click(() => {
    $("#toggle-nav i").toggleClass("fa-xmark fa-bars");
    $("nav ul li").slideToggle();
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

popupMarker
  .bindPopup(
    `<a href="https://www.google.com/maps/place/SKLEP+Z+KLOCKAMI+LEGO/@52.1905181,20.8912748,17z/data=!3m1!5s0x471934e9aca246a3:0xae6264b4b4151766!4m10!1m2!2m1!1skostrop!3m6!1s0x471935dbcfc3b175:0x49bdca88f38219d8!8m2!3d52.1905148!4d20.8938497!15sCgdrb3N0cm9wkgEJdG95X3N0b3Jl4AEA!16s%2Fg%2F11nnzb1rl2?entry=ttu&g_ep=EgoyMDI1MDkxNS4wIKXMDSoASAFQAw%3D%3D"><i class="fa-solid fa-location-dot"></i>&nbsp;Nasz sklep</a><br>ul. Kolorowa 8, Warszawa`
  )
  .openPopup();
