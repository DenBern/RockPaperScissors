import { setPreviewPhotos } from "./setPreviewPhotos.js";

export const preview = document.querySelector('.preview-photos');
export const keywordSearch = document.querySelector('.keyword');
export const fullSizePhoto = document.querySelector('.full-photo');
export const keywordDescription = document.querySelector('.description');
const input = document.getElementById('search');
const searchBtn = document.querySelector('.search');

let defaultKeyword = ['travel', 'city', 'beautiful', 'summer', 'night', 'sea', 'ocean', 'heavens', 'sunset', 'space'];
let keyWord = null;
const randomNumber = Math.floor(Math.random() * (defaultKeyword.length));

setPreviewPhotos(defaultKeyword[randomNumber]);

input.addEventListener('input', (e) => {
  keyWord = e.target.value;
});
searchBtn.addEventListener('click', () => setPreviewPhotos(keyWord));
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    setPreviewPhotos(keyWord);
  }
});