const head = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    head.classList.add("sticky");
  } else {
    head.classList.remove("sticky");
  }
});
