import Swiper, {Navigation} from 'swiper';
export function swiperCreater(swiperName) {
    const swiper = new Swiper(swiperName, {
        modules: [Navigation],
        loop: true,
        
        slidesPerView: 1,
        spaceBetween: 30,

       /*  breakpoints: {
            577: {
                slidesPerView: 3
            }
        }, */

        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        }
    });

    return swiper;
}

