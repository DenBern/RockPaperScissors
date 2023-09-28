import { emptyState } from "./emptyState.js";
import { errorState } from "./errorState.js";
import { loadingState } from "./loadingState.js";
import { renderPhotos } from "./renderPhotos.js";
import { setPhotoId } from "./setPhotoId.js";
import { previewImagesId,
  getPreviewImages,
  error,
  totalResults,
  totalPages,
  loadingData,
  setError,
  setEmptyState,
  setLoadingData
} from "./service.js";
import {
  preview,
  keywordSearch,
  btnNextPhotos,
  btnPrevPhotos,
} from "./variables.js";

const clearPreviewPhotos = () => {
  preview.innerHTML = '';
}
export let allPhotos = [];

export const setPreviewPhotos = async (keyword, page) => {
  if (keyword === '') return;
  setError(false);
  setEmptyState(false);
  errorState(error);
  emptyState(totalResults);
  setLoadingData(true);
  loadingState(loadingData);

  await getPreviewImages(keyword.toLowerCase(), page);

  loadingState(false);
  clearPreviewPhotos();
  keywordSearch.textContent = `${(keyword ?? defaultKeyword[randomNumber]).toLowerCase()}`;
  if (error) errorState(error);
  if (!totalResults && !error) emptyState(true);
  if (totalResults && !error) {
    if (page !== totalPages) btnNextPhotos.removeAttribute('disabled', '');
    if(page === 1) btnPrevPhotos.setAttribute('disabled', '');
    errorState(error);
    emptyState(!totalResults);
    clearPreviewPhotos();
    previewImagesId.forEach((photo, index) => {
      renderPhotos(photo, index);
    });
    loadingState(loadingData);
  }
  allPhotos = document.querySelectorAll('.photo');
  allPhotos.forEach(photo => {
    photo.addEventListener('click', (e) => {
      setPhotoId(e.target.id);
    });
  });
}


