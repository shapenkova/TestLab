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
        //     slideChange: function () {
        //         updateContainerHeight(this);
        //     },
        // },
    });
});
// const updateContainerHeight = function (swiper) {
//     const activeSlide = swiper.slides[swiper.activeIndex];
//     const height = activeSlide.offsetHeight;
//     const paddingBottom = 37; // Паддинг, который нужно учесть
//     swiper.el.style.height = `${height + paddingBottom}px`;
// };

// Здесь вы можете добавить вызов `updateContainerHeight` при инициализации
// updateContainerHeight(swiperInstance);


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