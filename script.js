var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
})

//add map
function initMap() {
    const place = {
        lat: 52.719531,
        lng: 23.504038
    };
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 13,
            center: place
        });
    var marker = new google.maps.Marker({
        position: place,
        map: map
    });
}