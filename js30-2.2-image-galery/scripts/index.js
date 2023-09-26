import { setPreviewPhotos } from "./setPreviewPhotos.js";
import { setNextPhotos } from "./setNextPhotos.js";
import { defaultKeyword,randomNumber, input, searchBtn, clearBtn } from "./variables.js";

export let keyWord = defaultKeyword[randomNumber];
setPreviewPhotos(keyWord);
setNextPhotos();

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
  if (!e.target.value && searchBtn.style.display === 'none') {
    changeBtnSearch()
  }
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
});