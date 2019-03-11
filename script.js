var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
})

