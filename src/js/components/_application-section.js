import Swiper, { Navigation } from 'swiper';

const swiperApplication = new Swiper(".application-section__slider", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 'auto',

    breakpoints: {
        577: {
            loop: false,
            slidesPerView: 3,
        }
    },

    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    }
});