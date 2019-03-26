var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');
var navbar = document.getElementById('navbar')

hamburger.addEventListener('click', function() {
  this.classList.toggle('active');
  menu.classList.toggle('active');
});

//hide nav
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-70px';
  }
  prevScrollpos = currentScrollPos;
};

//add map
function initMap() {
  const place = {
    lat: 52.719531,
    lng: 23.504038
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: place
  });
  var marker = new google.maps.Marker({
    position: place,
    map: map
  });
}
