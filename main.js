const prevBtn = document.querySelector(".slider__btn--left");
const nextBtn = document.querySelector(".slider__btn--right");
const sliderImgs = document.querySelectorAll(".slider__img");
const sliderText = document.querySelectorAll(".slider__text");

//Slider btns//
// const prevSlide = function () {
//   const currentImg = document.querySelector(".active-photo");
//   const currentText = document.querySelector(".active-text");

//   currentImg.classList.remove("active-photo");
//   currentText.classList.remove("active-text");

//   if (
//     currentImg.previousElementSibling &&
//     currentImg.previousElementSibling.classList.contains("slider__img")
//   ) {
//     currentImg.previousElementSibling.classList.add("active-photo");
//     currentText.previousElementSibling.classList.add("active-text");
//   } else {
//     sliderImgs[sliderImgs.length - 1].classList.add("active-photo");
//     sliderText[sliderText.length - 1].classList.add("active-text");
//   }
// };

// const nextSlide = function () {
//   const currentImg = document.querySelector(".active-photo");
//   const currentText = document.querySelector(".active-text");

//   currentImg.classList.remove("active-photo");
//   currentText.classList.remove("active-text");

//   if (
//     currentImg.nextElementSibling &&
//     currentImg.nextElementSibling.classList.contains("slider__img")
//   ) {
//     currentImg.nextElementSibling.classList.add("active-photo");
//     currentText.nextElementSibling.classList.add("active-text");
//   } else {
//     sliderImgs[0].classList.add("active-photo");
//     sliderText[0].classList.add("active-text");
//   }
// };

// prevBtn.addEventListener("click", prevSlide);
// nextBtn.addEventListener("click", nextSlide);

//Navigation//
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-li");
const nav = document.querySelector(".header__nav");
const overlay = document.querySelector("#overlay");

const openNav = function () {
  nav.classList.add("open");
  // overlay.classList.add("dark");
};

const closeNav = function () {
  nav.classList.remove("open");
  // overlay.classList.remove("dark");
};

hamburger.addEventListener("click", openNav);
closeIcon.addEventListener("click", closeNav);
