import {
  formCardDetails,
  btnBuyCard,
  modalBuyCard,
  body,
} from "../variables.js";
import { localStorageUsersCredits } from "../localStorage/getLocalStorageUserCredits.js";
import { buyBook } from "../buyBook.js";

export const formCardRegister = () => {
  formCardDetails.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorageUsersCredits.map(user => {
      if (user.logged && !user.subscription) {
        user.subscription = true;
        localStorage.setItem('usersCredits', JSON.stringify(localStorageUsersCredits));
        setTimeout(() => {
            modalBuyCard.classList.remove('active-blackout');
            btnBuyCard.style.background = '';
            body.classList.remove('no-scroll');
        }, 1000);
        btnBuyCard.style.background = '#32CD32';
        btnBuyCard.textContent = 'Done!';
      };
    });
  });
  buyBook();
};