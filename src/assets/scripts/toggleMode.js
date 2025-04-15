// toggle mode 
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtns = document.querySelectorAll(".toggleMode");
    const body = document.body;
  
    // Lấy trạng thái đã lưu
    toggleBtns.forEach((toggleBtn) => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      body.classList.add(savedMode);
    } else {
      body.classList.add("light-mode"); // mặc định
    }
  
      toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (body.classList.contains("light-mode")) {
          toggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`
          body.classList.remove("light-mode");
          body.classList.add("dark-mode");
          localStorage.setItem("mode", "dark-mode");
        } else {
          toggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`
          body.classList.remove("dark-mode");
          body.classList.add("light-mode");
          localStorage.setItem("mode", "light-mode");
        }
      });
    });
  });