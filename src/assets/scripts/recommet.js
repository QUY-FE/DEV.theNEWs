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
              ? `<div class="post-card-favourite">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="post-card-favourite-icon"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
              <span>Xem nhiều</span></div>`
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
