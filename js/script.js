const photos = document.querySelectorAll(".photo");
let currentPhotoIndex = 0;

photos.forEach((photo, index) => {
  photo.addEventListener("click", () => {
    const photoSrc = photo.getAttribute("src");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);
    const img = document.createElement("img");
    img.src = photoSrc;
    img.classList.add("modal-image");
    modal.appendChild(img);
    currentPhotoIndex = index;

    // add event listener to close modal on click
    img.addEventListener("click", () => {
      modal.remove();
    });
  });
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    document.querySelector(".modal").remove();
  } else if (event.key === "ArrowRight") {
    currentPhotoIndex++;
    if (currentPhotoIndex >= photos.length) {
      currentPhotoIndex = 0;
    }
    const photoSrc = photos[currentPhotoIndex].getAttribute("src");
    const img = document.querySelector(".modal-image");
    img.src = photoSrc;
  } else if (event.key === "ArrowLeft") {
    currentPhotoIndex--;
    if (currentPhotoIndex < 0) {
      currentPhotoIndex = photos.length - 1;
    }
    const photoSrc = photos[currentPhotoIndex].getAttribute("src");
    const img = document.querySelector(".modal-image");
    img.src = photoSrc;
  }
});
