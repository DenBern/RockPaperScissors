import { buyBtns, setNewRentedBook, newRentedBook } from "./variables.js";
import { localStorageUsersCredits } from "./localStorage/getLocalStorageUserCredits.js";
import { getRegisteredUsers } from "./localStorage/getRegisteredUsers.js";
import { renderRentedBooks } from "./renderRentedBooks.js";
import { changeProfileMenu } from "./changeProfileMenu.js";
import { changeCard } from "./changeCard.js";
import {
  userRentedBooks,
  setUserRentedBooks,
  modalBuyCard,
  body,
} from "./variables.js";


export const buyBook = () => {
  buyBtns.forEach(buy => buy.addEventListener('click', (event) => {
    const currentUserCreditsLogged = localStorageUsersCredits.find(user => user.logged) || {};
    if (!getRegisteredUsers()) {
      wrapperModalReg.classList.add('active-blackout');
      body.classList.add('no-scroll');
    } else if (getRegisteredUsers() && !Object.keys(currentUserCreditsLogged).length) {
      wrapperModalLogIn.classList.add('active-blackout');
      body.classList.add('no-scroll');
    };

    localStorageUsersCredits.find(user => {
      if (user.logged) {
        setUserRentedBooks(user.rentedBooks);
      };
    });

    if (currentUserCreditsLogged && currentUserCreditsLogged.logged) {
      if (currentUserCreditsLogged.logged && !currentUserCreditsLogged.subscription) {
        modalBuyCard.classList.add('active-blackout')
        body.classList.add('no-scroll');
      } else if (currentUserCreditsLogged.subscription && currentUserCreditsLogged.logged) {
        let book = event.target.parentNode;
        let btnBook = event.target;
        let getBookName = book.childNodes[1].childNodes[3].childNodes[1].outerText;
        let getBookAuthor = book.childNodes[1].childNodes[3].childNodes[3].childNodes[2].textContent;
        btnBook.classList.add('book-own');
        btnBook.textContent = 'Own';
        btnBook.setAttribute('disabled', '');
        setNewRentedBook(getBookName, getBookAuthor);
        localStorageUsersCredits.map(user => {
          if (user === currentUserCreditsLogged) {
            user.books += 1;
            user.rentedBooks = [...userRentedBooks, newRentedBook];
            localStorage.setItem('usersCredits', JSON.stringify(localStorageUsersCredits));
            changeProfileMenu(getRegisteredUsers);
            renderRentedBooks();
            changeCard();
          };
        });
      } else {
        wrapperModalLogIn.classList.add('active-blackout');
        body.classList.add('no-scroll');
      };
    };
  }));
};