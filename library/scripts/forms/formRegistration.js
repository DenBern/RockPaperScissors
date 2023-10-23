import { localStorageUsersCredits } from "../localStorage/getLocalStorageUserCredits.js";
import { resetColorBorderInput } from "../helpers.js";
import { changeProfileMenu } from "../changeProfileMenu.js";
import { getRegisteredUsers } from "../localStorage/getRegisteredUsers.js";
import { changeBtns } from "../helpers.js";
import { changeCard } from "../changeCard.js";
import { generateCardNumber } from "../utils.js";
import {
  formRegistrarion,
  setUserCardNumber,
  newUserCredits,
  usersCredits,
  wrapperModalReg,
  body,
  btnSignUp,
  firstName,
  lastName,
  email,
  password,
  setUserLogged,
  setUserVisits,
  setUserBonuses,
  setUsersCredits,
} from "../variables.js";

export const formRegistration = () => {
  formRegistrarion.addEventListener('submit', (event) => {
    event.preventDefault();
    const randomCardNumber = generateCardNumber();
    const randomBonuses = Math.floor(Math.random() * 1000);
    setUserCardNumber(randomCardNumber);
    setUserLogged();
    setUserVisits();
    setUserBonuses(randomBonuses);
    setUsersCredits([...localStorageUsersCredits, newUserCredits]);
    localStorage.setItem('usersCredits', JSON.stringify(usersCredits));
    formRegistrarion.reset();
    resetColorBorderInput(firstName, lastName, email, password);
    setTimeout(() => {
      wrapperModalReg.classList.remove('active-blackout');
      body.classList.remove('no-scroll');
      btnSignUp.style.background = '';
      btnSignUp.textContent = 'Sign Up!';
    }, 1000);
    changeProfileMenu(getRegisteredUsers());
    btnSignUp.style.background = '#32CD32';
    btnSignUp.textContent = 'Welcome!';
    changeBtns();
    changeCard();
  });
};