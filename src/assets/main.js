// xử lý phần nav bar mobile

const menuBtn = document.querySelector(".menu__mobile-nav");
const closeBtn = document.querySelector(".Menu__mobile-wrapper-goback");
const menuWrapper = document.querySelector(".Menu__mobile-wrapper");
const overlayer = document.querySelector(".menu__mobile-overlayer");



menuBtn.addEventListener("click", () => {
    // return handleNavbarMenu();
    menuWrapper.classList.add('active');
    overlayer.classList.add('active');
  
});

closeBtn.addEventListener("click", () => {
    // return handleNavbarMenu(); 
    menuWrapper.classList.remove("active");
    overlayer.classList.remove("active");
});

overlayer.addEventListener("click", () => {
    // return handleNavbarMenu();
    menuWrapper.classList.remove("active");
    overlayer.classList.remove("active");
});


const handleNavbarMenu = () => {
    menuWrapper.classList.remove("active");
    overlayer.classList.remove("active");
}


// xử lý mobile search

const toggleSearch = () =>  {
    var searchBox = document.getElementById("searchMobile");
    return searchBox.style.display = (searchBox.style.display === "block") ? "none" : "block";
}


// copy right 
var timeCopyR = document.querySelector('.footer__time-copyR');
var timeNow = new Date();
timeCopyR.innerHTML = timeNow.getFullYear();
