import { keyWord } from "./index.js";
import { setPreviewPhotos } from "./setPreviewPhotos.js"
import { defaultKeyword, randomNumber, btnNextPhotos, btnPrevPhotos} from "./variables.js";
import { totalPages } from "./service.js";

export const setNextPhotos = () => {
  let page = 1;
  if (page === 1) btnPrevPhotos.setAttribute('disabled', '');

  btnNextPhotos.addEventListener('click', () => {
    if (!keyWord) return;
    page ++;
    if (page === totalPages) btnNextPhotos.setAttribute('disabled', '');
    if (page >= 1) btnPrevPhotos.removeAttribute('disabled', '');
    if (page <= totalPages) {
      setPreviewPhotos(keyWord ?? defaultKeyword[randomNumber], page)
    } else {
      return
    }
  });

  btnPrevPhotos.addEventListener('click', () => {
    if (!keyWord) return;
    page --;
    if (page === 1) btnPrevPhotos.setAttribute('disabled', '');
    if (page === 1) btnNextPhotos.removeAttribute('disabled', '');
    if (page <= totalPages) btnNextPhotos.removeAttribute('didabled', '')
    if (page <= totalPages) {
      setPreviewPhotos(keyWord ?? defaultKeyword[randomNumber], page)
    } else {
      return
    }
  });
}