const galleryItems = document.querySelectorAll(".gallery-item");
let currentImgIndex = 0;

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const imgSrc = item.getAttribute("src");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
    const img = document.createElement("img");
    img.src = imgSrc;
    img.classList.add("overlay-image");
    overlay.appendChild(img);
    currentImgIndex = index;
  });
});

document.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("overlay") ||
    event.target.classList.contains("overlay-image")
  ) {
    document.querySelector(".overlay").remove();
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    document.querySelector(".overlay").remove();
  } else if (event.key === "ArrowRight") {
    currentImgIndex = (currentImgIndex + 1) % galleryItems.length;
    const imgSrc = galleryItems[currentImgIndex].getAttribute("src");
    document.querySelector(".overlay-image").src = imgSrc;
  } else if (event.key === "ArrowLeft") {
    currentImgIndex =
      (currentImgIndex - 1 + galleryItems.length) % galleryItems.length;
    const imgSrc = galleryItems[currentImgIndex].getAttribute("src");
    document.querySelector(".overlay-image").src = imgSrc;
  }
});
