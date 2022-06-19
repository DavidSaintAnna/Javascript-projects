const emojiClosed = document.querySelector(".closed");
const emojiActive = document.querySelector(".open");

emojiClosed.addEventListener("click", () => {
  if (emojiActive.classList.contains("open")) {
    emojiActive.classList.add("active");
    emojiClosed.classList.remove("active");
  }
});
emojiActive.addEventListener("click", () => {
  if (emojiClosed.classList.contains("closed")) {
    emojiClosed.classList.add("active");
    emojiActive.classList.remove("active");
  }
});
