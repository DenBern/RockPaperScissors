import { getImageById, photoById, error } from "./service.js";
import { errorId, fullSizePhoto, keywordDescription, spinner } from "./variables.js";

let loadingImageId = false;

const spinnerOn = (loading) => {
  if (loading) {
    fullSizePhoto.style.display = 'none';
    spinner.style.display = 'flex';
  } else {
    fullSizePhoto.style.display = 'block'
    spinner.style.display = 'none'
  }
}

export const setPhotoId = async (id) => {
  errorId.style.display = 'none';
  spinnerOn(!loadingImageId);
  await getImageById(id);
  if (error) {
    fullSizePhoto.style.display = 'none';
    spinner.style.display = 'none';
    errorId.style.display = 'flex'
  } else {
    spinner.style.display = 'flex';
    errorId.style.display = 'none'
    fullSizePhoto.style.backgroundImage = `url(${photoById.mediumSize})`;
    fullSizePhoto.setAttribute('href', `${photoById.originSize}`);
    if (photoById.description) {
      keywordDescription.textContent = `${photoById.description}`;
    }
    spinnerOn(loadingImageId);
  }
}