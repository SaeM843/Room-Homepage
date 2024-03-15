const prevBtn = document.querySelector(".btn-left");
const nextBtn = document.querySelector(".btn-right");
const imgDesktop = document.querySelector(".slider__img--desktop");
const imgMobile = document.querySelector(".slider__img--mobile");
const title = document.querySelector("[data-title]");
const desc = document.querySelector("[data-desc]");

const data = [
  {
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    imgDesktop: "images/desktop-image-hero-1.jpg",
    imgMobile: "images/mobile-image-hero-1.jpg",
  },

  {
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our",
    imgDesktop: "images/desktop-image-hero-2.jpg",
    imgMobile: "images/mobile-image-hero-2.jpg",
  },

  {
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office",
    imgDesktop: "images/desktop-image-hero-3.jpg",
    imgMobile: "images/mobile-image-hero-3.jpg",
  },
];

//Sliders
let i = 0; //index of the data

nextBtn.addEventListener("click", () => {
  const end = i === data.length - 1;
  if (!end) {
    i++;
    setData();
  } else {
    i = 0;
    setData();
  }
});

prevBtn.addEventListener("click", () => {
  const start = i === 0;
  if (!start) {
    i--;
    setData();
  } else {
    i = 0;
    setData();
  }
});

function setData() {
  imgDesktop.src = data[i].imgDesktop;
  imgMobile.src = data[i].imgMobile;
  title.textContent = data[i].title;
  desc.textContent = data[i].desc;
}

//Navigation//
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-li");
const nav = document.querySelector(".header__nav");
//const overlay = document.querySelector("#overlay");

const openNav = function () {
  nav.classList.add("open");
};

const closeNav = function () {
  nav.classList.remove("open");
};

hamburger.addEventListener("click", openNav);
closeIcon.addEventListener("click", closeNav);
