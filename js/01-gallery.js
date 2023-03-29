import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);
console.log(gallery);

gallery.addEventListener("click", onGalleryItemOpen);

function onGalleryItemOpen(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const data = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${data}" width="800" height="600">
`);

  instance.show();

  //   onShow: (instance) => {
  //     document.addEventListener("keydown", onClick);
  //   };
  // }
  // onClose: (instance) => {
  //   document.removeEventListener("keydown", onClick);
  // };

  // function onClick(e) {
  //   if (e.code === "Escape") {
  //     instanse.close();
  //   }
}
