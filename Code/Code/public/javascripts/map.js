var map;
var marker;
var mon;
var start;
var latlng;

function map() {
  map = L.map("map").setView([38.70736728020726, -9.152443430499575], 11);
  L.tileLayer(
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=nzLBBO7atyb6b5uMflmX",
    {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }
  ).addTo(map);

navigator.geolocation.getCurrentPosition(function(location) {
  latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
   
})


}
function setRide(idx){
  start = latlng
  setRota(idx)
};


function setfinal(idx){
  mon = mons[idx];
  end = L.latLng(mon.M_lat,  mon.M_long)
  console.log(end)
  setRide();
};




function setRota(){
  if (start)
  console.log(start)
  L.Routing.control({
      waypoints: [
          start,
          end,
      ],
      routeWhileDragging: true
  }).addTo(map);
}




monIcon = L.icon({
  iconUrl: "images/Mon.png",
  iconSize:     [30, 30], 
});





async function monMarkers(){
  mons = await $.ajax({
      url:"/API/mons",
      method: "get",
  });
  for (var idx in mons) {
      let mon = mons[idx];
      L.marker({lat: mon.M_lat, lon: mon.M_long}, {icon: monIcon}).bindPopup(`<p>Monumento: ${mon.Nome}</p><img src= ${mon.image} id="imgMon"><p><button id= "reserva" onclick="mostralocalizacao(${idx})">Ver</button><p><button id= "reserva" onclick="setfinal(${idx})">Rota</button>`).addTo(map);
  }
}

function mostralocalizacao(idx) {
  sessionStorage.setItem("mon", JSON.stringify(mons[idx]));
  window.location = "mon.html";
}



window.onload = () => {
  map();
  monMarkers();
};

