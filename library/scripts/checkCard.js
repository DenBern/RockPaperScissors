import { getRegisteredUsers } from "./localStorage/getRegisteredUsers.js";
import { getLocalStorageUsersCredits, localStorageUsersCredits } from "./localStorage/getLocalStorageUserCredits.js";
import { checkCardCredits } from "./variables.js";

export const checkCard = () => {
  if (!getRegisteredUsers()) return;
  getLocalStorageUsersCredits(getRegisteredUsers())
  checkCardCredits = localStorageUsersCredits.find(user => user.firstName === inputReadersNameValue) || {};
  if (!Object.keys(checkCardCredits).length) {
      return alert('Check user name or card number');
  };

  if (checkCardCredits.firstName === inputReadersNameValue && checkCardCredits.cardNumber === inputReadersCardNumberValue) {
      findLibraryCard.style.display = 'none';
      checkDetails.style.display = 'flex';
      readersName.setAttribute('disabled', '');
      readersCardNumber.setAttribute('disabled', '');
      checkVisitsCount.textContent = `${checkCardCredits.visits}`;
      checkBooksCount.textContent = `${checkCardCredits.books}`;
      checkBonusesCount.textContent = `${checkCardCredits.bonuses}`;
      setTimeout(() => {
          findLibraryCard.style.display = 'block';
          checkDetails.style.display = 'none';
          readersName.removeAttribute('disabled')
          readersCardNumber.removeAttribute('disabled')
          readersName.value = '';
          readersCardNumber.value = '';
          inputReadersNameValue = '';
          inputReadersCardNumberValue = '';
          checkCardCredits = {};
      }, 10000)
  } else {
      alert('Check user name or card number');
  };
};