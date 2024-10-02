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

//Swiper
const swipers = document.querySelectorAll(".js-swiper");
swipers.forEach(function (swpr) {
    new Swiper(swpr, {
        updateOnWindowResize: true,
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 0,
        speed: 500,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
        nextEl: ".swiper-arrow-next",
        prevEl: ".swiper-arrow-prev",
        disabledClass: "arrow--disabled"
        },
        // on: {
        //     slideChange: function() {
        //         adjustContainerHeight();
        //     }
        // }
    });
});

// function adjustContainerHeight() {
//     const activeSlide = document.querySelector('.swiper-slide-active');
//     const container = document.querySelector('.swiper-wrapper');
    
//     // Устанавливаем высоту контейнера по высоте активного слайда
//     container.style.height = `${activeSlide.clientHeight}px`;
// }

// Инициализация высоты при загрузке страницы
// window.onload = adjustContainerHeight;

// // Инициализация высоты при изменении размера окна
// window.onresize = adjustContainerHeight;

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