import posts from "./data.js";
import renderPosts from "./render.js";

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