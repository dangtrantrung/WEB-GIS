var lat=10.862346;
var long=106.615966; 

// add Stamen Watercolor to map.
//L.tileLayer.provider('Stamen.Watercolor').addTo(map);

var osmMap=L.tileLayer.provider('OpenStreetMap.Mapnik');
var stamenMap=L.tileLayer.provider('Stamen.Watercolor');
var imageryMap=L.tileLayer.provider('Esri.WorldImagery');

var baseMaps={
    OSM: osmMap,
    'Stamen Watercolor':stamenMap,
    'World Imagery':imageryMap
}

var map = L.map('map',{

    center: [lat,long],
    zoom:5,
    layers:[osmMap]

});

var mapLayers=L.control.layers(baseMaps).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/* change maker icon leaflet */
var leafletIcon=L.icon({
 iconUrl:'https://leafletjs.com/examples/custom-icons/leaf-green.png',
 shadowUrl:'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
 iconSize:[38,95],
 iconAnchor:[22,94],
 shadowAnchor:[4,62],
 popupAnchor:[0,-90],
});





var marker = L.marker([lat,long],{icon:leafletIcon}).addTo(map);


var circle = L.circle([lat-0.01,long-0.01], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
var polygon = L.polygon([
    [10.87798,106.591256],
    [10.877814,106.605679],
    [10.861124,106.608941]
]).addTo(map);


 marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();


circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");  

 var popup = L.popup()
    .setLatLng([10.87048,106.619236 ])
    .setContent("I am a standalone popup.")
    .openOn(map);
    
function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick); 

    var popup1 = L.popup();

function onMapClick1(e) {
    popup1
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick1);

