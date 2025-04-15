// xử lý phần nav bar mobile
const menuBtn = document.querySelector(".menu__mobile-nav");
const closeBtn = document.querySelector(".menu__mobile-wrapper-goback");
const menuWrapper = document.querySelector(".menu__mobile-wrapper");
const overlayer = document.querySelector(".menu__mobile-overlayer");

menuBtn.addEventListener("click", () => {
  menuWrapper.classList.add("active");
  overlayer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menuWrapper.classList.remove("active");
  overlayer.classList.remove("active");
});

overlayer.addEventListener("click", () => {
  menuWrapper.classList.remove("active");
  overlayer.classList.remove("active");
});
