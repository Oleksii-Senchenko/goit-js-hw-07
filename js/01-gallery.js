import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const markapEl = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
});
galleryEl.insertAdjacentHTML("afterbegin", markapEl.join(""));

function openModal(original) {
  const instance = basicLightbox.create(`
  <img src="${original}" width="800" height="600" >
  `);
  
  instance.show();
  
  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") {
      return;
    }
    instance.close();
  });
}

galleryEl.addEventListener("click", (e) => {
  e.preventDefault()
  if (e.target.nodeName !== "IMG") {
    return;
  }
  openModal(e.target.dataset.source);
});
// galleryEl.addEventListener('click', e => {
//   e.preventDefault();
//   const { target } = e;
//   if (target.nodeName !== 'IMG') {
//     return;
//   }
//   openModal(target.dataset.source);
// })
