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
