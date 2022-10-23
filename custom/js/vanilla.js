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

    /* AOS */
    AOS.init();

    /* LOGO UPDATE ON SCROLL */
    $(function() {
        // Get element of logo image
        const logo = $("#headerLogo");
        // Get scroll position
        let top_position = $(window).scrollTop();
        // Get element of navigation bar for desktop
        const $navbarDesktop = $("#navbarDesktop");
        // Get element of navigation bar for small devices
        const $navbarLess = $("#navbarLess992");
        // Get value of indput#pageIdentifier
        const $pageIdentifier = $("input#pageIdentifier").val();

        // Function to trigger on scroll
        $(window).scroll(function() {
            /* Scroll position in pixels from top of screen */
            const scroll_position = $(window).scrollTop();

            /* Height of First Div Section */
            const vh = ($("#OnScrollSection").height())/2;

            // If scroll direction is down, hide header
            // If scroll direction is up and outside first section, show header with white background
            // else show header with transparent background

            // Background:
            // Text: add .text-bg-dark to the .offcanvas
            // Close Button: .btn-close-white to .btn-close

            // FLAG AS SCROLL DOWN,
            // Hide header when scroll-position is greater than top position.
            const $header_selector = $("#newHeader");
            const $hamburger = $("#hamburger");
            const $hamburgerButton = $("#hamburgerButton");
            if (scroll_position > top_position && scroll_position >= vh) {
                $header_selector.fadeOut("slow");
            }
            // FLAG AS SCROLL UP
            else {
                // Scroll position is greater than on-scroll-Section
                if (scroll_position >= vh) {
                    if ($pageIdentifier === 'landing-page') {
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
                    }
                }
                // Scroll position is less than on-scroll-section
                else {
                    if ($pageIdentifier === 'landing-page') {
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
                    }
                }
                $header_selector.slideDown("slow");
            }
            top_position = scroll_position;
        });
    });

    /* ENABLE TOOLTIPS */
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});