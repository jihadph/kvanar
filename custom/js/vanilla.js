/* jQuery Functions */
$('document').ready(function () {

    /* SWIPER-FIRST */
    const swiper_first = new Swiper('.swiper-first', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'slide',
        grabCursor: true,
        speed: 1000,
        preloadImages: true,
        simulateTouch: true,
        updateOnWindowResize: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 4000,
        },
    });

    /* SWIPER-SECOND */
    const swiper_second = new Swiper('.swiper-second', {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    /* AOS */
    AOS.init();

    $('.kvanar-service-panel').on('mouseover', function (){
        let $id = $(this).attr('id');
        $('#block-'+$id).fadeIn();
    });

    $('.kvanar-service-panel').on('mouseout', function (){
        $('.kvanar-accordion-content').fadeOut();
    });

});