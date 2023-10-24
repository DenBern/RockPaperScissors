import { cardRegister } from "./cardRegister.js";
import { checkCard } from "./checkCard.js";
import { logIn } from "./logIn.js";
import { inputsValidation } from "../inputsValidation.js";
import { changeColorBorderInput } from "../helpers.js";
import { registration } from "./registration.js";
import {
  readersName,
  readersCardNumber,
  setInputEmailCardLogInValue,
  setInputReadersCardNumberValue,
  setInputPasswordLogInValue,
  formCardDetails,
  formCard,
  formLogIn,
  inputEmailCardLogIn,
  inputPasswordLogIn,
  formRegistrarion,
} from "./variables.js";

export const formsEventListeners = () => {
  formRegistrarion.addEventListener('submit', (event) => {
    event.preventDefault();
    registration();
  });

  formCardDetails.addEventListener('submit', (event) => {
    event.preventDefault();
    cardRegister();
  });

  formCard.addEventListener('submit', (event) => {
    event.preventDefault();
    checkCard();
  });

  formLogIn.addEventListener('submit', (event) => {
    event.preventDefault();
    logIn();
  });

  readersName.addEventListener('input', () => {
    setInputEmailCardLogInValue(readersName.value);
    inputsValidation(readersName);
  });

  readersCardNumber.addEventListener('input', () => {
    setInputReadersCardNumberValue(readersCardNumber.value);
    inputsValidation(readersCardNumber);
  });

  inputEmailCardLogIn.addEventListener('input', () => {
    changeColorBorderInput(inputEmailCardLogIn.value.length >= 1, inputEmailCardLogIn);
    setInputEmailCardLogInValue(inputEmailCardLogIn.value);
  });

  inputPasswordLogIn.addEventListener('input', () => {
    changeColorBorderInput(inputPasswordLogIn.value.length >= 8, inputPasswordLogIn);
    setInputPasswordLogInValue(inputPasswordLogIn.value);
  });
};