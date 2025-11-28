const catalogBtn = document.querySelector(".header .center button");
const mobileMenu = document.querySelector(".mobile-menu");

catalogBtn.addEventListener("click", (e) => {
  e.preventDefault()
  mobileMenu.classList.toggle("active");
});
