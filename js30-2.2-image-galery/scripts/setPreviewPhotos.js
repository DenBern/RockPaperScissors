import { previewImagesId, getPreviewImages } from "./service.js";
import { setPhotoId } from "./setPhotoId.js";
import { preview, keywordSearch, fullSizePhoto, keywordDescription } from "./index.js";

let idPhoto;
let allPhoto;

export const setPreviewPhotos = async (keyword) => {
  await getPreviewImages(keyword.toLowerCase());
  preview.innerHTML = '';
  keywordSearch.textContent = `${(keyword ?? defaultKeyword[randomNumber]).toLowerCase()}`;
  previewImagesId.forEach((img, index) => {
    if (index === 0) {
      fullSizePhoto.style.backgroundImage = `url(${img.mediumSize})`;
      fullSizePhoto.setAttribute('href', `${img.originSize}`);
      if (img.description) {
        keywordDescription.textContent = `${img.description.length > 80 ? img.description.substr(0, 40) + '...' : img.description}`
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

  allPhoto = document.querySelectorAll('.photo');
  allPhoto.forEach(photo => {
    photo.addEventListener('click', () => {
      idPhoto = photo.id;
      setPhotoId(idPhoto);
    });
  });
}

