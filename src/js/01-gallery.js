import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link"
  href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}" />
  </a>
</li>`;
}).join('')

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

const galleryContainerEl = document.querySelector('.gallery');
galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);
let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});