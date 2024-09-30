'use strict'

//Шапка сайта при скролле
document.addEventListener('scroll', function() {
    let headerLink = document.querySelector('.page-header');
    window.scrollY > 50 
        ? headerLink.classList.add('scrolled') 
        : headerLink.classList.remove('scrolled');
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
            clickable: true
        },
        navigation: {
        nextEl: ".swiper-arrow-next",
        prevEl: ".swiper-arrow-prev",
        disabledClass: "arrow--disabled"
        }
    });
});

//Аккордеон
const boxes = Array.from(document.querySelectorAll(".box")); // считываем все элементы аккордеона в массив

boxes.forEach((box) => {
  box.addEventListener("click", boxHandler); // при нажатии на бокс вызываем ф-ию boxHanlder
});

function boxHandler(e) {
  e.preventDefault(); // сбрасываем стандартное поведение
  let currentBox = e.target.closest(".box"); // определяем текущий бокс
  let currentContent = e.target.nextElementSibling; // находим скрытый контент
  currentBox.classList.toggle("active"); // присваиваем ему активный класс
  if (currentBox.classList.contains("active")) {
    // если класс активный ..
    currentContent.style.maxHeight = currentContent.scrollHeight + "px"; // открываем контент
  } else {
    // в противном случае
    currentContent.style.maxHeight = 0; // скрываем контент
  }
}