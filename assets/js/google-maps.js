function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 10.4957489, lng: -66.9111485};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Caracas , Distrito Capital' // Title Location
    });
}