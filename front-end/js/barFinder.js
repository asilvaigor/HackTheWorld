// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

var map, currentPosition;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 15
    });
    var infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(currentPosition);
            infoWindow.setContent('Current location.');
            infoWindow.open(map);
            map.setCenter(currentPosition);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function findNearbyBars() {
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: currentPosition,
        radius: 500,
        type: ['bar']
    }, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        // Carteando para escolher 3 lugares que teriam desconto naquela hora
        placeBarMarker(results[0], 'Skol latinha', '1.95', '../../IMAGENS/skol.jpg');
        placeBarMarker(results[1], 'Budweiser 600 ml', '5.40', '../../IMAGENS/budweiser.jpg');
        placeBarMarker(results[2], 'Stella Artois long neck', '2.70', '../../IMAGENS/stellaArtois.jpg');
    }
}

function placeBarMarker(place, beerName, beerPrice, imagePath) {
    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        var path = 'https://www.google.com.br/maps/dir/' + currentPosition.lat + ',' +
            currentPosition.lng + '/' + place.geometry.location.lat() + ',' + place.geometry.location.lng() +
            '/@' + currentPosition.lat + ',' + currentPosition.lng;
        infowindow.setContent('<style="background-color:#93B874;" >' + '<br><IMG BORDER="0" ALIGN="Left" SRC=' + imagePath + '>' +
            '<strong><big>' + place.name + '</big></strong><br>'
            + '<font size = 3px>' + beerName + ' R$' + beerPrice + '</font>' +
            ' <a href=' + path + '>Direções</a>');
        infowindow.open(map, this);
    });
}