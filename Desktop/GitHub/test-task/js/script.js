$('.burger-menu').on('click', function (e) {
    e.preventDefault();
    $('.burger-menu').toggleClass('burger-open');
    $('.menu').toggleClass('menu-show');
});

$(document).ready(function () {
    $(".projects-slider").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #005BC1;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #005BC1;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        responsive: {
            320: {
                items: 1,
            },
            480: {
                items: 1,
            }
        }
    });

    $(".rent").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #005BC1;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #005BC1;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    });
});