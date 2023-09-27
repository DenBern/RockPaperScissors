import { previewImagesId, getPreviewImages, error, totalResults, totalPages } from "./service.js";
import { setPhotoId } from "./setPhotoId.js";
import { spinnerOn, loadingImageId } from "./setPhotoId.js";
import {
  preview,
  keywordSearch,
  fullSizePhoto,
  keywordDescription,
  empty,
  notFound,
  errorId,
  btnNextPhotos,
  btnPrevPhotos
} from "./variables.js";

export const setPreviewPhotos = async (keyword, page) => {
  let allPhoto;
  let idPhoto;
  if (keyword === '') return;
  spinnerOn(!loadingImageId);
  errorId.style.display = 'none';
  empty.style.display = 'none';
  await getPreviewImages(keyword.toLowerCase(), page);
  if (error) {
    fullSizePhoto.style.display = 'none';
    errorId.style.display = 'flex';
    btnPrevPhotos.setAttribute('disabled', '');
    btnNextPhotos.setAttribute('disabled', '');
    keywordDescription.textContent = '';
  }
  preview.innerHTML = '';
  keywordSearch.textContent = `${(keyword ?? defaultKeyword[randomNumber]).toLowerCase()}`;
  if (!totalResults && !error) {
    fullSizePhoto.style.display = 'none';
    empty.style.display = 'flex';
    keywordDescription.textContent = '';
    btnNextPhotos.setAttribute('disabled', '');
  }
  if (previewImagesId.length !== 0 && !error) {
    if (page !== totalPages) {
      btnNextPhotos.removeAttribute('disabled', '');
    }
    errorId.style.display = 'none';
    empty.style.display = 'none'
    fullSizePhoto.style.display = 'block';
    notFound.innerHTML = '';
    preview.innerHTML = '';
    previewImagesId.forEach((img, index) => {
      if (index === 0) {
        fullSizePhoto.style.backgroundImage = `url(${img.mediumSize})`;
        fullSizePhoto.setAttribute('href', `${img.originSize}`);
        keywordDescription.textContent = `${img.description ?? 'Not found'}`;
      }
      const photo  = document.createElement('div');
      photo.classList.add('photo');
      photo.setAttribute('id', `${img.imgId}`)
      photo.style.background = `url(${img.thumbnail}) no-repeat center / cover`;
      preview.appendChild(photo);
    });
  }
  spinnerOn(loadingImageId);

  allPhoto = document.querySelectorAll('.photo');
  allPhoto.forEach(photo => {
    photo.addEventListener('click', () => {
      idPhoto = photo.id;
      setPhotoId(idPhoto);
    });
  });

}


