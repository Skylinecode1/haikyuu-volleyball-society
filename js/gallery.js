const galleryPage = document.querySelector(".gallery-page");
const gallery = galleryPage.querySelector(".gallery");
const lightbox = galleryPage.querySelector(".lightbox")
const lightboxImage = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".close");
const prevBtn = lightbox.querySelector(".prev");
const nextBtn = lightbox.querySelector(".next");

let currentIndex = 0;
const images = Array.from(gallery.querySelectorAll("img"));

gallery.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        currentIndex = parseInt(e.target.dataset.index, 10);
        updateLightbox();
        lightbox.style.display = "flex";
    }
})

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
})

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
})

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
})

function updateLightbox() {
    const imgSrc = `../resources/gallery/${currentIndex}.jpg`;
    lightboxImage.src = imgSrc;
    lightboxImage.alt = images[currentIndex].alt;
}

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
})