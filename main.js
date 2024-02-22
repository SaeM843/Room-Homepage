const prevBtn = document.querySelector(".slider__btn--left");
const nextBtn = document.querySelector(".slider__btn--right");
const sliderImgs = document.querySelectorAll(".slider__img");
const sliderText = document.querySelectorAll(".slider__text");

const prevSlide = function () {
  const currentImg = document.querySelector(".active-photo");
  const currentText = document.querySelector(".active-text");

  currentImg.classList.remove("active-photo");
  currentText.classList.remove("active-text");

  if (
    currentImg.previousElementSibling &&
    currentImg.previousElementSibling.classList.contains("slider__img")
  ) {
    currentImg.previousElementSibling.classList.add("active-photo");
    currentText.previousElementSibling.classList.add("active-text");
  } else {
    sliderImgs[sliderImgs.length - 1].classList.add("active-photo");
    sliderText[sliderText.length - 1].classList.add("active-text");
  }
};

prevBtn.addEventListener("click", prevSlide);
// nextBtn.addEventListener("click", nextSlide);
