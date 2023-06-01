import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/common.css';
import '../css/01-gallery.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
      <img
         class="gallery__image"
         src="${preview}"
         alt="${description}"
    />
  </a>`
  ).join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

const galleryContainerEl = document.querySelector('.gallery');
galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);
let lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
  doubleTapZoom: 1,
});