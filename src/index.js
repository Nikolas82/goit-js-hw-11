import './css/styles.css';
import Notiflix from 'notiflix';

import { fetchImages } from './fetchImages';

const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('input[name="searchQuery"]');
const btnEl = document.querySelector('button[type="submit"]');
const galleryEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

loadMoreBtn.style.display = 'none';

let searchImages = '';
let page = 1;

formEl.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  searchImages = event.currentTarget.elements.searchQuery.value;

  // console.log(searchImages);

  page = 1;
  galleryEl.innerHTML = '';

  if (searchImages) {
    try {
      const images = await fetchImages(searchImages, page);

      // console.log(images.totalHits);
      console.log(images.hits);
      console.log(images);

      if (images.hits.length > 0) {
        Notiflix.Notify.success(`Hooray! We found ${images.totalHits} images`);
        loadMoreBtn.style.display = 'block';
        renderMarkup(images.hits);
      } else {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
}

async function onLoadMore() {
  if (searchImages) {
    try {
      page += 1;

      const images = await fetchImages(searchImages, page);

      renderMarkup(images.hits);

      if (page === 13) {
        loadMoreBtn.style.display = 'none';
        Notiflix.Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function renderMarkup(images) {
  const markup = images
    .map(image => {
      return `
<div class="photo-card">
  <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes <br> ${image.likes}</b>
    </p>
    <p class="info-item">
      <b>  Views <br> ${image.views}</b>
    </p>
    <p class="info-item">
      <b>Comments <br> ${image.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads <br> ${image.downloads}</b>
    </p>
  </div>
</div>
`;
    })
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
}
