import { createNewUser } from "../../localStorage/createNewUser.js";
import { setUserName, userName, inputName, btnRegisteredLogIn } from "../../../variables.js";
import { mainMenuRender } from "../mainMenu/mainMenuRender.js";
import { userLogIn } from "../../localStorage/userLogIn.js";

export const handleClickRegister = () => {
  if (btnRegisteredLogIn.textContent !== 'Sign in') {
    createNewUser(userName);
    mainMenuRender();
    btnRegisteredLogIn.removeEventListener('click', handleClickRegister);
  } else {
    mainMenuRender();
    userLogIn();
  };
};

export const registerLogInUserListeners = () => {
  const validName = /^[a-zA-Z]+$/;
  const minLength = inputName.minLength;
  const maxLength = inputName.maxLength;
  inputName.addEventListener('input', (e) => {
    setUserName(e.target.value);
    if (userName.length >= minLength && validName.test(e.target.value) && userName.length <= maxLength) {
      btnRegisteredLogIn.removeAttribute('disabled', '');
      btnRegisteredLogIn.style.transform = 'scale(1.2)';
      inputName.style.border = "3px solid #5ecf32";
    } else {
      btnRegisteredLogIn.setAttribute('disabled', '');
      btnRegisteredLogIn.style.transform = 'scale(1)';
      inputName.style.border = "3px solid #d94647";
    }
  });
  btnRegisteredLogIn.addEventListener('click', handleClickRegister);
};