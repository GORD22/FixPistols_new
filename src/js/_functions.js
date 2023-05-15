import Swiper, {Navigation} from 'swiper';
export function swiperCreater(swiperName, classNamePath) {
    const swiper = new Swiper(swiperName, {
        modules: [Navigation],
        loop: true,
    
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
        
    });

    return swiper;
}

