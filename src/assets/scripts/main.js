
// xử lý mobile search ẩn hiện
const toggleSearch = () => {
  var searchBox = document.getElementById("searchMobile");
  return (searchBox.style.display =
    searchBox.style.display === "block" ? "none" : "block");
};

// copy right
var timeCopyR = document.querySelector(".footer__time-copyR");
var timeNow = new Date();
timeCopyR.innerHTML = timeNow.getFullYear();








