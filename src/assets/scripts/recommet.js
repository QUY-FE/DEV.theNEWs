import  posts  from "./data.js";

const postRecommet = document.querySelector(".recommnet-wrapper .row");
// render phần recommet
posts.forEach((post) => {
  const colRecommet = document.createElement("div");
  colRecommet.className = "col l-2 m-6 s-12";
  colRecommet.innerHTML = `
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

  postRecommet.appendChild(colRecommet);
});
