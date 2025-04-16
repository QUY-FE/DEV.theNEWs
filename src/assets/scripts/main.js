
// xử lý mobile search ẩn hiện

function toggleSearch() {
  var searchBox = document.getElementById("searchMobile");
  console.log(searchBox)
  if(searchBox){
    return (searchBox.style.display = searchBox.style.display === "block" ? "none" : "block");
  }
};

// copy right
var timeCopyR = document.querySelector(".footer__time-copyR");
var timeNow = new Date();
timeCopyR.innerHTML = timeNow.getFullYear();


// sử lý nút chuyển trang
document.addEventListener("DOMContentLoaded", () => {
  const pageLinks = document.querySelectorAll('.content-wrapper-link');
  pageLinks.forEach((pageLink) => {
    pageLink.addEventListener('click' , (e) => {
      e.preventDefault();
      pageLinks.forEach((link) => {
        return link.classList.remove('page__active');
      })
      pageLink.classList.add('page__active')
    });
  });
});


const urlParams = new URLSearchParams(window.location.search);
const page = parseInt(urlParams.get("page")) || 1;

// Lấy dữ liệu theo trang
const startIndex = (page - 1) * 6; // 6 bài mỗi trang
const endIndex = startIndex + 6;
const currentPosts = posts.slice(startIndex, endIndex);

renderPosts(currentPosts);

// Highlight trang đang active
const links = document.querySelectorAll('.content-wrapper-link');
links.forEach(link => {
  const linkPage = link.href.split('?page=')[1];
  if (parseInt(linkPage) === page) {
    link.classList.add('page__active');
  }
});









