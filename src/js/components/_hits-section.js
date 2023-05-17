import Swiper, {Navigation} from 'swiper';

const swiperHits = new Swiper(".hits-section__slider", {
    modules: [Navigation],
    loop: true,
    
    slidesPerView: 1,

    breakpoints: {
        577: {
            slidesPerView: 4
        }
    },

    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    }
});