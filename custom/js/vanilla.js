/* jQuery Functions */
$('document').ready(function () {

    /* SWIPER-FIRST: Section 1 Introduction */
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
            delay: 4000
        },
    });

    /* SWIPER-SECOND: Projects */
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
        let top_position = $(window).scrollTop();

        const $navbarDesktop = $("#navbarDesktop");
        const $navbarLess = $("#navbarLess992");

        $(window).scroll(function() {
            /* Scroll position in pixels from top of screen */
            const scroll_position = $(window).scrollTop();

            /* Height of First Div Section */
            const vh = ($("#firstSection").height())/2;

            // If scroll direction is down, hide header
            // If scroll direction is up and outside first section, show header with white background
            // else show header with transparent background

            // Background:
            // Text: add .text-bg-dark to the .offcanvas
            // Close Button: .btn-close-white to .btn-close

            // When scroll-position is greater than top position,
            // FLAG AS SCROLL DOWN.
            const $header_selector = $("#newHeader");
            const $hamburger = $("#hamburger");
            const $hamburgerButton = $("#hamburgerButton");
            if (scroll_position > top_position && scroll_position >= vh) {
                $header_selector.slideUp("slow");
            }
            // FLAG AS SCROLL UP
            else {
                if (scroll_position >= vh) {
                    // DESKTOP NAVBAR
                    if ($(window).outerWidth() >= 992) {
                        $navbarDesktop.removeClass("kv-link-white");
                        $navbarDesktop.addClass("kv-link-dark");
                    }
                    // END

                    // Change Logo to Gray
                    logo.attr('src', '/custom/img/logo-kvanar-db-ronshaw.png');
                    // Set header to white background then show
                    $header_selector.addClass("kvanar-header-white");
                    $header_selector.addClass("kv-header-nav-link-dark");
                    $hamburger.addClass("navbar-toggler-icon-dark");
                    $hamburgerButton.addClass("navbar-toggler-dark");
                    //$header_selector.removeClass("navbar-dark");
                    //$header_selector.addClass("bg-dark");
                } else {
                    // DESKTOP NAVBAR
                    if ($(window).outerWidth() >= 992) {
                        $navbarDesktop.addClass("kv-link-white");
                        $navbarDesktop.removeClass("kv-link-dark");
                    }
                    // END

                    // Change Logo to White
                    logo.attr('src', '/custom/img/logo-kvanar-db-ronshaw-white.png');
                    // Set header to transparrent background
                    $header_selector.removeClass("kvanar-header-white");
                    $header_selector.removeClass("kv-header-nav-link-dark");
                    $hamburger.removeClass("navbar-toggler-icon-dark");
                    $hamburgerButton.removeClass("navbar-toggler-dark");
                    //$header_selector.removeClass("kv-header-nav-link-dark");
                    //$header_selector.addClass("navbar-dark");
                    //$header_selector.removeClass("bg-dark");
                }
                $header_selector.slideDown("slow");
            }
            top_position = scroll_position;
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