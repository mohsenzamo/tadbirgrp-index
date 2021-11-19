var galleryCaption = new Swiper('.js--hero-caption', {
    speed: 500,
    spaceBetween: 0,
    slidesPerView: 'auto',
    simulateTouch: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
});

var galleryMedia = new Swiper('.js--hero-media', {
    speed: 500,
    simulateTouch: false,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    thumbs: {
        swiper: galleryCaption,
        slideThumbActiveClass: 'swiper-slide-active'
    }
});
