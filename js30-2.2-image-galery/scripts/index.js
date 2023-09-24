import { setPreviewPhotos } from "./setPreviewPhotos.js";

export const preview = document.querySelector('.preview-photos');
export const keywordSearch = document.querySelector('.keyword');
export const fullSizePhoto = document.querySelector('.full-photo');
export const keywordDescription = document.querySelector('.description');
export const section = document.querySelector('section');
const input = document.getElementById('search');
const searchBtn = document.querySelector('.search');
const clearBtn = document.querySelector('.clear');

let defaultKeyword = ['travel', 'city', 'beautiful', 'summer', 'night', 'sea', 'ocean', 'heavens', 'sunset', 'space'];
let keyWord = null;
const randomNumber = Math.floor(Math.random() * (defaultKeyword.length));

setPreviewPhotos(defaultKeyword[randomNumber]);

const changeBtnSearch = () => {
  if (searchBtn.style.display !== 'none') {
    searchBtn.style.display = 'none';
    clearBtn.style.display = 'block';
  } else {
    clearBtn.style.display = 'none';
    searchBtn.style.display = 'block';
  }
}

input.addEventListener('input', (e) => {
  keyWord = e.target.value;
});
searchBtn.addEventListener('click', () => {
  if (!keyWord) return;
  setPreviewPhotos(keyWord);
  changeBtnSearch();
})

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    setPreviewPhotos(keyWord);
    changeBtnSearch();
  }
});
clearBtn.addEventListener('click', () => {
  input.value = '';
  keyWord = input.value;
  changeBtnSearch();
})