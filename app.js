const head = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    head.classList.add("sticky");
  } else {
    head.classList.remove("sticky");
  }
});

const menu = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-times");
const navLinks = document.querySelectorAll("nav ul li a");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.style.left = "0px";
});

close.addEventListener("click", () => {
  nav.style.left = "-1000px";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.style.left = "-1000px";
  });
});

let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let slides = document.querySelectorAll(".slide");
let changeSlide = 0;
// console.log(changeSlide);
nextBtn.addEventListener("click", function () {
  slides.forEach(function (slide, index) {
    if (slide.classList.contains("show") === true) {
      changeSlide = index + 1;
      slide.classList.remove("show");
    }
  });
  //   console.log(changeSlide);
  if (changeSlide < slides.length) {
    slides[changeSlide].classList.add("show");
  } else {
    changeSlide = 0;
    slides[changeSlide].classList.add("show");
  }
});
// console.log(changeSlide);
prevBtn.addEventListener("click", function () {
  slides.forEach(function (slide, index) {
    if (slide.classList.contains("show") === true) {
      changeSlide = index - 1;
      slide.classList.remove("show");
    }
  });
  // console.log(changeSlide);

  if (changeSlide < slides.length && changeSlide > -1) {
    slides[changeSlide].classList.add("show");
  } else {
    // console.log(slides.length);

    changeSlide = slides.length - 1;
    slides[changeSlide].classList.add("show");
  }
});
