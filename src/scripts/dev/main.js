'use strict'

const root = document.documentElement;

//Шапка сайта при скролле
document.addEventListener('scroll', function() {
    let headerLink = document.querySelector('.page-header');
    window.scrollY > 50 
        ? headerLink.classList.add('scrolled') 
        : headerLink.classList.remove('scrolled');
});

//Главное навигационное меню
const navToggle = document.querySelector("#js-navToggle");
const header = document.querySelector(".page-header");

navToggle.addEventListener("click", function () {
    root.classList.toggle("show-nav");
    navToggle.classList.toggle("active");
    header.classList.toggle("header-white");
});

//Слайдер
const swipers = document.querySelectorAll(".js-swiper");
swipers.forEach(function (swpr) {
    const swiperInstance = new Swiper(swpr, {
        updateOnWindowResize: true,
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 0,
        speed: 500,
        grabCursor: true,
        keyboard: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-arrow-next",
            prevEl: ".swiper-arrow-prev",
            disabledClass: "arrow--disabled"
        },
    });

    function adjustContainerHeight() {
        const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
        const slideHeight = activeSlide.clientHeight;
        swiperInstance.el.style.height = slideHeight + 'px';     
        swiperInstance.el.style.paddingBottom = '60px'; 
    }
    adjustContainerHeight();

    window.addEventListener('resize', function() {
        if (window.innerWidth < 350) {
            adjustContainerHeight(); 
        }
    });

    swiperInstance.on('slideChange', adjustContainerHeight);
});


//Аккордеон
const boxes = Array.from(document.querySelectorAll(".box")); 

boxes.forEach((box) => {
    box.addEventListener("click", boxHandler); 
});

function boxHandler(e) {
    e.preventDefault(); 
    let currentBox = e.target.closest(".box"); 
    let currentContent = e.target.nextElementSibling; 
    currentBox.classList.toggle("active");

    currentContent.style.maxHeight = currentBox.classList.contains("active") 
    ? currentContent.scrollHeight + "px" 
    : "0";
}
//Маска для телефона
const mobileMask = $('.js-mobileMask');
if (mobileMask.length) {
    mobileMask.mask('+7 (000) 000 00 00');
}