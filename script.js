$(document).ready(function () {
    $(".header_title .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplaySpeed: 800,
        lazyLoad: true,
        slideTransition: 'ease-in-out',
    });

    $("main .owl-carousel").owlCarousel({
        loop: true,
        autoplayTimeout: 3500,
        autoplaySpeed: 800,
        autoplay: true,
        lazyLoad: true,
        margin: 10,
        slideTransition: 'ease-in-out',
        nav: true,
        dots: false,
        navSpeed: 800,
        // responsiveClass: true,
        responsive: {
            320: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },

            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }

    });
});
