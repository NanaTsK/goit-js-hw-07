import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryListMarkup = galleryItems
    .map(({ preview, original, description }) =>
//  return `<li class="gallery__item">
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`)
    .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryListMarkup);

galleryEl.addEventListener("click", onImgClick);

function onImgClick(evt) { 
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    } else { 
        console.log(`Img Clicked`);

        const popOriginalImg = evt.target.dataset.source;

        const instance = basicLightbox.create(`
    <img src="${popOriginalImg}" width="800" height="600">`)

    instance.show()

    }
};