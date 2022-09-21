/* jQuery Functions */
$('document').ready(function () {
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 0,
        preloadImages: true,
        simulateTouch: true,
        updateOnWindowResize: true,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});