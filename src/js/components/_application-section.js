import Swiper, { Grid, Navigation } from 'swiper';

const swiperApplication = new Swiper(".application-section__slider", {
    modules: [Navigation, Grid],
    loop: true,
    slidesPerView: 'auto',

    breakpoints: {
        577: {
            loop: false,
            slidesPerView: 3,
            spaceBetween: 99,
            grid: {
                rows: 3,
                fill: 'row'
            },
        }
    },

    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    }
});