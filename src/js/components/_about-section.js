import Swiper, {Navigation} from 'swiper';
const swiperAbout = new Swiper(".about-section__slider", {
    modules: [Navigation],
    loop: true,

    navigation: {
        nextEl: '.btn-next',
    },
    
});