import { setPreviewPhotos } from "./setPreviewPhotos.js";
import { setNextPrevPhotos } from "./setNextPrevPhotos.js";
import { defaultKeyword,randomNumber, input, searchBtn, clearBtn } from "./variables.js";
import { page } from "./setNextPrevPhotos.js";

export let keyWord = defaultKeyword[randomNumber];
setPreviewPhotos(keyWord);
setNextPrevPhotos();

const changeBtnSearch = () => {
  if (searchBtn.style.display !== 'none') {
    searchBtn.style.display = 'none';
    clearBtn.style.display = 'block';
  } else {
    clearBtn.style.display = 'none';
    searchBtn.style.display = 'block';
  }
};

if (input.value === '') {
  searchBtn.setAttribute('disabled', '');
};

input.addEventListener('input', (e) => {
  keyWord = e.target.value;
  if (!e.target.value && searchBtn.style.display === 'none') {
    changeBtnSearch();
  };
  if (e.target.value !== '') {
    searchBtn.removeAttribute('disabled', '');
  };
});

searchBtn.addEventListener('click', () => {
  if (!keyWord) return;
  setPreviewPhotos(keyWord);
  changeBtnSearch();
});

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    setPreviewPhotos(keyWord, page);
    changeBtnSearch();
  }
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  keyWord = input.value;
  changeBtnSearch();
});