import Swiper, {Navigation} from 'swiper';

const swiperHero = new Swiper(".hero__slider", {
    modules: [Navigation],
    loop: true,
    
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    
});