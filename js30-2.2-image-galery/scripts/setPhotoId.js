import { getImageById, photoById, error } from "./service.js";
import { errorId, fullSizePhoto, keywordDescription, spinner, btnNextPhotos, btnPrevPhotos } from "./variables.js";

export let loadingImageId = false;

export const spinnerOn = (loading) => {
  if (loading) {
    fullSizePhoto.style.display = 'none';
    spinner.style.display = 'flex';
  } else {
    spinner.style.display = 'none';
  };
};

export const setPhotoId = async (id) => {
  errorId.style.display = 'none';
  spinnerOn(!loadingImageId);
  await getImageById(id);
  if (error) {
    fullSizePhoto.style.display = 'none';
    spinner.style.display = 'none';
    errorId.style.display = 'flex';
    btnNextPhotos.setAttribute('disabled', '');
    btnPrevPhotos.setAttribute('disabled', '');
  } else {
    spinner.style.display = 'flex';
    errorId.style.display = 'none'
    fullSizePhoto.style.display = 'flex';
    fullSizePhoto.style.backgroundImage = `url(${photoById.mediumSize})`;
    fullSizePhoto.setAttribute('href', `${photoById.originSize}`);
    btnNextPhotos.removeAttribute('disabled', '');
    btnPrevPhotos.removeAttribute('disabled', '');
    if (photoById.description) {
      keywordDescription.textContent = `${photoById.description}`;
    };
    spinnerOn(loadingImageId);
  };
};