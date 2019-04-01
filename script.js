var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');
var navbar = document.getElementById('navbar');
var counter = document.getElementById('counter');

hamburger.addEventListener('click', function () {
  this.classList.toggle('active');
  menu.classList.toggle('active');
});

//hide nav
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-70px';
  }
  prevScrollpos = currentScrollPos;
};
// arrow
$(document).ready(function() {
	$('a.arrow').hide();

	$(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('a.arrow').fadeIn();
			} else {
				$('a.arrow').fadeOut();
			}
		});

		$('a.arrow').click(function() {
			$('html, body').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
	});
});

//number counter
var a = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }

        });
    });
    a = 1;
  }

});

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