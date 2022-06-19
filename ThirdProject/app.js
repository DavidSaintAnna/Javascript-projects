const circleImg = document.querySelector(".circle");

circleImg.addEventListener("mouseenter", () => {
  if (!circleImg.classList.contains("hover")) {
    circleImg.classList.add("hover");
  }
});

circleImg.addEventListener("mouseleave", () => {
  if (circleImg.classList.contains("hover")) {
    circleImg.classList.remove("hover");
  }
});
