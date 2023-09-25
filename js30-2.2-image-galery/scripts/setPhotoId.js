import { getImageById, photoById } from "./service.js";
import {fullSizePhoto, keywordDescription} from "./variables.js";

export const setPhotoId = async (id) => {
    await getImageById(id)
    fullSizePhoto.style.backgroundImage = `url(${photoById.mediumSize})`;
    fullSizePhoto.setAttribute('href', `${photoById.originSize}`);
    if (photoById.description) {
      keywordDescription.textContent = `${photoById.description.length > 50 ? photoById.description.substr(0, 50) + '...' : photoById.description}`;
    } else {
      keywordDescription.textContent = 'Not found';
    }
}