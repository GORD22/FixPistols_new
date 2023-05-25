import Swiper, { Navigation } from 'swiper';
const swiperAbout = new Swiper(".about-section__slider", {
    modules: [Navigation],
    loop: true,
    allowTouchMove: false,
    
    spaceBetween: 30,

    navigation: {
        prevEl: '.btn-prev',
        nextEl: '.btn-next',
    },

});

const btnsBlock = document.querySelector('.about-section__slider .btns-block');
const prevBtn = document.querySelector('.about-section__slider .btn-prev');
const nextBtn = document.querySelector('.about-section__slider .btn-next');
prevBtn.style.display = 'none';

nextBtn.addEventListener('click', () => {
    nextBtn.style.display = 'none';
    prevBtn.style.display = 'block';
    btnsBlock.style.justifyContent = 'start'
})
prevBtn.addEventListener('click', () => {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    btnsBlock.style.justifyContent = 'end'
})

const modalDescr = document.querySelectorAll('.modal-descr');
const btnDetails = document.querySelectorAll('.slide__btn-details');

for (let i = 0; i < btnDetails.length; i++) {
    btnDetails[i].addEventListener('click', () => {
        if (btnDetails[i].textContent == 'detailed') {
            modalDescr[i].classList.add('modal-descr_show');
            btnDetails[i].textContent = 'hide'
            return
        }
        if (btnDetails[i].textContent == 'hide') {
            modalDescr[i].classList.remove('modal-descr_show');
            btnDetails[i].textContent = 'detailed'
            return
        }
    })
}
