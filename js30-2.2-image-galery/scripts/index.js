import { getPreviewImages, getImageById, previewImagesId, photoById } from "./service.js"

const preview = document.querySelector('.preview-photos');
const fullSizePhoto = document.querySelector('.full-photo');
const input = document.getElementById('search');
const keywordSearch = document.querySelector('.keyword');
const keywordDescription = document.querySelector('.description');

let idPhoto;
let allPhoto;
let keyWord = null;
let defaultKeyword = 'css';

const loadingImages = async (keyword) => {
  await getPreviewImages(keyword.toLowerCase());
  preview.innerHTML = '';
  keywordSearch.textContent = `${(keyWord ?? defaultKeyword).toLowerCase()}`;
  previewImagesId.forEach((img, index) => {
    if (index === 0) {
      fullSizePhoto.style.backgroundImage = `url(${img.mediumSize})`;
      fullSizePhoto.setAttribute('href', `${img.originSize}`);
      keywordDescription.textContent = `${img.description.length > 80 ? img.description.substr(0, 80) + '...' : img.description}`;
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
      setImage(idPhoto)
    });
  });
}

loadingImages(defaultKeyword)

const setImage = async (idPhoto) => {
  await getImageById(idPhoto);
  fullSizePhoto.style.backgroundImage = `url(${photoById.mediumSize})`;
  fullSizePhoto.setAttribute('href', `${photoById.originSize}`);
  keywordDescription.textContent = `${photoById.description.length > 80 ? photoById.description.substr(0, 80) + '...' : photoById.description}`;
}

input.addEventListener('input', (e) => {
  keyWord = e.target.value;
});

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    loadingImages(keyWord);
  }
})