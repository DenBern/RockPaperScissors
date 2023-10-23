import {
  initials,
  userFirstName,
  userLastName,
  visitsCount,
  bonusesCount,
  booksCount,
  userCardNumber
} from "../variables.js";
import { currentUserCreditsLogged } from "../variables.js";

export const changeModalUserProfile = () => {
  initials.textContent = `${currentUserCreditsLogged.firstName[0].toUpperCase() + currentUserCreditsLogged.lastName[0].toUpperCase()}`;
  userFirstName.textContent = `${currentUserCreditsLogged.firstName}`;
  userLastName.textContent = `${currentUserCreditsLogged.lastName}`;
  visitsCount.textContent = `${currentUserCreditsLogged.visits}`;
  bonusesCount.textContent = `${currentUserCreditsLogged.bonuses}`;
  booksCount.textContent = `${currentUserCreditsLogged.books}`;
  userCardNumber.textContent = `${currentUserCreditsLogged.cardNumber}`;
};