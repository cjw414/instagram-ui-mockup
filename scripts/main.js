const feed = document.getElementById("feed");
const trigger = document.getElementById("scroll-trigger");

let postCount = 1;

// 게시물 생성
function createPost() {
  const data = {
    username: `user${postCount}`,
    text: `자동 생성된 게시물 ${postCount}`,
    time: "방금 전"
  };

  feed.insertBefore(
    new DOMParser().parseFromString(PostComponent(data), "text/html").body.firstChild,
    trigger
  );

  postCount++;
}

// 최초 3개 게시물
for (let i = 0; i < 3; i++) {
  createPost();
}

// 무한 스크롤
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    for (let i = 0; i < 2; i++) {
      createPost();
    }
  }
}, {
  threshold: 1
});

document.addEventListener("click", function(e) {
  if (e.target.matches(".post-icons i.fa-heart")) {
    const heart = e.target;

    // 하트 종류 바꾸기
    if (heart.classList.contains("liked")) {
      // 이미 좋아요면 취소
      heart.classList.remove("liked");
      heart.classList.replace("fa-solid", "fa-regular"); // 채워진 → 빈 하트
    } else {
      // 좋아요 클릭 시
      heart.classList.add("liked");
      heart.classList.replace("fa-regular", "fa-solid"); // 빈 → 채워진 하트
      // 확대 애니메이션 후 원래 크기로
      setTimeout(() => {
        heart.style.transform = "scale(1)";
      }, 200);
    }
  }
});


observer.observe(trigger);
