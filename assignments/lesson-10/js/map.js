let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 42.099099, lng: - 111.877750},
        zoom: 8
    });
}