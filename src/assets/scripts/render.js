import posts from "./data.js";


function renderPosts(postList) {
  const postContainer = document.querySelector(".content-wrapper .row");
  postContainer.innerHTML = ""; // clear cũ
  postList.forEach((post) => {
    // render phần content
    const colContent = document.createElement("div");
    colContent.className = "col l-4 m-6 s-12";
    colContent.innerHTML = `
        <div class="post-card">
        ${
            post.favorite
              ? `<div class="post-card-favourite"><i class="fa-solid fa-star"></i><span>Xem nhiều</span></div>`
              : ""
          }
          <a href="article.html" class="post-card-link">
            <img src="${post.img}" alt="${post.title}" class="post-card__img">
            <div class="post-card__info">
              <h2 class="post-card__info-heading">${post.title}</h2>
              <div class="post-card__info-time">${post.time}</div>
            </div>
          </a>
        </div>
      `;
    colContent.querySelector("a").addEventListener("click", () => {
      localStorage.setItem("selectedPost", JSON.stringify(post));
    });

    postContainer.appendChild(colContent);
  });
}

// render bài viết đc chọn
document.addEventListener("DOMContentLoaded", () => {
  const postData = JSON.parse(localStorage.getItem("selectedPost"));

  if (!postData) {
    document.getElementById("article-title").textContent =
      "Không tìm thấy bài viết";
    return;
  }
  document.getElementById("article-title").textContent = postData.title;
  document.getElementById("article-time").textContent = postData.time;
  document.getElementById("article-img").src = postData.img;
  document.getElementById("article-img").alt = postData.title;
  document.getElementById("article-content").innerHTML = postData.content || "<p>Đang cập nhật nội dung...</p>";
});


// xử lý search
document.addEventListener("DOMContentLoaded", function () {
    const searchInputs = document.querySelectorAll(".innerHeader__search-input");
    // Render ban đầu
    renderPosts(posts);
    searchInputs.forEach((searchInput) => {
      searchInput.addEventListener("input", function () {
        const keyword = searchInput.value.toLowerCase();
        const filteredPosts = posts.filter((post) =>
          post.title.toLowerCase().includes(keyword)
        );
        renderPosts(filteredPosts);
      });
    });
  });


  
