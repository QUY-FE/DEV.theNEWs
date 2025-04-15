const bannerTimeChange = 7000;
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".banner-wrapper");
  let current = 0;

  function showNextSlide() {
    slides[current].classList.remove("active--banner");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active--banner");
  }

  setInterval(showNextSlide, bannerTimeChange); // chuyển ảnh mỗi 3s
});