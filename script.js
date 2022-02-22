mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlcGtvZWNoIiwiYSI6ImNrejZ4cHZnajBnM28yd3M4cmhrZTlrYmwifQ.rqWbVVGU9iv13Mg067jCIQ';
  navigator.geolocation.getCurrentPosition(successLocation, errorLocation,{ enableHighAccuracy:true
})
function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])

}
function errorLocation(){
  setupMap([1.2921,36.8219])
}
function setupMap(center){
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:center,
    zoom: 15
  })
  map.addControl(new mapboxgl.NavigationControl());
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlcGtvZWNoIiwiYSI6ImNrejZ4cHZnajBnM28yd3M4cmhrZTlrYmwifQ.rqWbVVGU9iv13Mg067jCIQ';
  
   
  map.addControl(
  new MapboxDirections({
  accessToken: mapboxgl.accessToken
  }),
  'top-left'
  );


}
