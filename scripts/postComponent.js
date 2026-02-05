function PostComponent(data) {
  return `
    <article class="post">
      <div class="post-header">
        <div class="post-user">
          <div class="post-profile"></div>
          <span>${data.username}</span>
        </div>
        <i class="fa-solid fa-ellipsis"></i>
      </div>

      <div class="post-image"></div>

      <div class="post-icons">
        <i class="fa-regular fa-heart"></i>
        <i class="fa-regular fa-comment"></i>
        <i class="fa-regular fa-paper-plane"></i>
      </div>

      <div class="post-text">${data.text}</div>

      <div class="post-time">${data.time}</div>
    </article>
  `;
}
