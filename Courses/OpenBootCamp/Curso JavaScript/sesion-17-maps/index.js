let marker, map;

function initMap() {
    // console.log("Inicializando mapa")
    const posiciones = [
        {
            lat: -25.363,
            lng: 131.044,
        },
        {
            lat: 30.00944,
            lng: 31.20861,
        },
        {
            lat: 40.7484405,
            lng: -73.9856644,
        },
    ];

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: posiciones[0],
    });

    marker = new google.maps.Marker({
        position: posiciones[0],
        map,
        title: "Posición Inicial",
    });

    marker = new google.maps.Marker({
        position: posiciones[1],
        map,
        title: "Posición Inicial",
    });

    marker = new google.maps.Marker({
        position: posiciones[2],
        map,
        title: "Posición Inicial",
    });
    // Obtener la geolocalización
    // marker.setPosition({ lat, lng })
    geoPosiciona();
}

function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation;
        const watchPos = geoLoc.watchPosition(centraMapa, onError);
    } else {
        alert("Tu navegador no admite geolocalización");
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    };
    marker.setPosition(nuevaPos);
    map.setCenter(nuevaPos);
}

function onError(error) {
    console.log("Se ha producido un error y lo hemos gestionado");
    console.error(error);
}
