import { fullSizePhoto, keywordDescription } from "./variables.js";

export const renderPhotoId = (photo) => {
  fullSizePhoto.style.backgroundImage = `url(${photo.mediumSize})`;
  fullSizePhoto.setAttribute('href', `${photo.originSize}`);
  if (photo.description) {
    keywordDescription.textContent = `${photo.description}`;
  };

}