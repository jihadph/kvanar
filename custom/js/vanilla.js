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
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        effect: 'slide',
        grabCursor: true,
        speed: 1000,
        preloadImages: true,
        simulateTouch: true,
        updateOnWindowResize: true,
        spaceBetween: 20,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /* AOS */
    AOS.init();

    /* SERVICE NAVIGATION */
    $('.kvanar-service-panel').on('mouseover', function (){
        let $id = $(this).attr('id');
        $('#block-'+$id).fadeIn();
    });

    $('.kvanar-service-panel').on('mouseout', function (){
        $('.kvanar-accordion-content').fadeOut();
    });

    $('.kvanar-accordion-content').hide();
    $('.abc').show();


    /* LOGO UPDATE ON SCROLL */
    $(function() {
        const logo = $("#headerLogo");
        $(window).scroll(function() {
            const scroll = $(window).scrollTop();
            const vh = $("#frontScreen").height();

            if (scroll >= vh) {
                if(!logo.hasClass("dark-logo")) {
                    logo.hide();
                    logo.removeClass('white-logo')
                        .addClass("dark-logo")
                        .attr('src', '/custom/img/logo-kvanar-db-ronshaw.png')
                        .fadeIn( "slow");
                }
            } else {
                if(!logo.hasClass("white-logo")) {
                    logo.hide();
                    logo.removeClass("dark-logo")
                        .addClass('white-logo')
                        .attr('src', '/custom/img/logo-kvanar-db-ronshaw-white.png')
                        .fadeIn( "slow");
                }
            }
        });
    });

    /* SERVICE NAVIGATION - Big Screen */
    $("#item-service1").fadeIn('slow');
    $("#service1").addClass('card-services-active');
    $(".card-services").on("click", function () {
        let $id = $(this).attr('id');
        let $all_services = $('.card-services-description');
        $.when(
            $all_services.fadeOut(),
            $('.card-services').removeClass('card-services-active')
            )
            .done(function () {
                $('#item-'+$id).fadeIn('slow');
                $('#'+$id).addClass('card-services-active')
            });
    });

});