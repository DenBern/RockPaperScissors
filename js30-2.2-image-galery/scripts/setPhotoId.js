import { getImageById, photoById, errorLoadedId } from "./service.js";
import { errorId, fullSizePhoto, keywordDescription, spinner, wrapperPhotoId } from "./variables.js";

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
  spinnerOn(!loadingImageId);
  await getImageById(id);
  if (errorLoadedId) {
    fullSizePhoto.style.display = 'none';
    spinner.style.display = 'none';
    errorId.style.display = 'block'
  } else {
    fullSizePhoto.style.backgroundImage = `url(${photoById.mediumSize})`;
    fullSizePhoto.setAttribute('href', `${photoById.originSize}`);
    if (photoById.description) {
      keywordDescription.textContent = `${photoById.description}`;
    } else {
      keywordDescription.textContent = 'Not found';
    }
    spinnerOn(loadingImageId);
  }
}