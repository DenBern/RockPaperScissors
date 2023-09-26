import { previewImagesId, getPreviewImages } from "./service.js";
import { setPhotoId } from "./setPhotoId.js";
import {preview, keywordSearch, fullSizePhoto, keywordDescription, section, notFound} from "./variables.js";

export const setPreviewPhotos = async (keyword, page) => {
  let allPhoto;
  let idPhoto;

  await getPreviewImages(keyword.toLowerCase(), page);
  preview.innerHTML = '';
  keywordSearch.textContent = `${(keyword ?? defaultKeyword[randomNumber]).toLowerCase()}`;
  if (previewImagesId.length === 0) {
    preview.innerHTML = '';
    notFound.classList.add('not-found');
    notFound.textContent = 'Not found photos';
    section.appendChild(notFound);
  } else {
    notFound.innerHTML = '';
    preview.innerHTML = '';
    previewImagesId.forEach((img, index) => {
      if (index === 0) {
        fullSizePhoto.style.backgroundImage = `url(${img.mediumSize})`;
        fullSizePhoto.setAttribute('href', `${img.originSize}`);
        if (img.description) {
          keywordDescription.textContent = `${img.description}`
        } else {
          keywordDescription.textContent = 'Not found'
        }
      }
      const photo  = document.createElement('div');
      photo.classList.add('photo');
      photo.setAttribute('id', `${img.imgId}`)
      photo.style.background = `url(${img.thumbnail}) no-repeat center / cover`;
      preview.appendChild(photo);
    })
  }

  allPhoto = document.querySelectorAll('.photo');
  allPhoto.forEach(photo => {
    photo.addEventListener('click', () => {
      idPhoto = photo.id;
      setPhotoId(idPhoto);
    });
  });
}


