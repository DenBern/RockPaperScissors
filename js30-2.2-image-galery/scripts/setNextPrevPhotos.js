import { keyWord } from "./index.js";
import { setPreviewPhotos } from "./setPreviewPhotos.js"
import { defaultKeyword, randomNumber, btnNextPhotos, btnPrevPhotos, searchBtn} from "./variables.js";
import { error, totalPages } from "./service.js";

export let page = 1;
export const setNextPrevPhotos = () => {
  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      page = 1;
    }
  });

  searchBtn.addEventListener('click', () => {
    page = 1;
  });

  if (page === 1) btnPrevPhotos.setAttribute('disabled', '');

  btnNextPhotos.addEventListener('click', () => {
    page ++;
    if (!keyWord) return;
    if (page < totalPages && page > 1 && !error) {
      btnPrevPhotos.removeAttribute('disabled', '');
      setPreviewPhotos(keyWord ?? defaultKeyword[randomNumber], page);
    }
    if (page === totalPages) {
      btnNextPhotos.setAttribute('disabled', '');
      btnPrevPhotos.removeAttribute('disabled', '');
      setPreviewPhotos(keyWord ?? defaultKeyword[randomNumber], page);
    } else {
      return
    }
  });

  btnPrevPhotos.addEventListener('click', () => {
    page --;
    if (!keyWord) return;
    if (page === 1) {
      setPreviewPhotos(keyWord ?? defaultKeyword[randomNumber], page);
      btnPrevPhotos.setAttribute('disabled', '');
    }
    if (page <= totalPages && page > 1) {
      btnPrevPhotos.removeAttribute('disabled', '');
      setPreviewPhotos(keyWord ?? defaultKeyword[randomNumber], page);
    }
    if (page >= 1 && page < totalPages) {
      btnNextPhotos.removeAttribute('disabled', '');
      // setPreviewPhotos(keyWord ?? defaultKeyword[randomNumber], page);
    } else {
      return
    }
  });
}