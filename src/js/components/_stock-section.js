import Swiper, {Navigation} from 'swiper';

const swiperStock = new Swiper(".stock-section__slider", {
    modules: [Navigation],
    loop: true,
    
    slidesPerView: 1,
    spaceBetween: 30,

    breakpoints: {
        577: {
            slidesPerView: 3
        }
    },

    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    }
});