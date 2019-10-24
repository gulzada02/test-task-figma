$('.burger-menu').on('click', function (e) {
    e.preventDefault();
    $('.burger-menu').toggleClass('burger-open');
    $('.menu').toggleClass('menu-show');
});

$(document).ready(function () {
    $(".projects-slider").owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        navText: ''
    });
});