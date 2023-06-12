// Описаний в документації
import SimpleLightbox from "../../node_modules/simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line

import { galleryItems } from "./gallery-items";

// Change code below this line
const list = document.querySelector(".gallery");

const markup = galleryItems
    .map(
        galleryItem => `<a class="gallery__item" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
  </a>`
    )
    .join("");

list.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250
});
