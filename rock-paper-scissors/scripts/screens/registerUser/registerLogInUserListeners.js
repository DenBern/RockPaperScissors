import { createNewUser } from "../../localStorage/createNewUser.js";
import { setUserName, userName, inputName, btnRegisteredLogIn } from "../../../variables.js";
import { mainMenuRender } from "../mainMenu/mainMenuRender.js";
import { userLogIn } from "../../localStorage/userLogIn.js";

export const registerLogInUserListeners = () => {
  inputName.addEventListener('input', (e) => {
    setUserName(e.target.value);
    const minLength = inputName.minLength;
    if (userName.length >= minLength) {
        btnRegisteredLogIn.removeAttribute('disabled', '');
        btnRegisteredLogIn.style.transform = 'scale(1.2)';
      } else {
        btnRegisteredLogIn.setAttribute('disabled', '');
        btnRegisteredLogIn.style.transform = 'scale(1)';
    };
  });
  const handleClickRegister = () => {
    if (btnRegisteredLogIn.textContent !== 'Sign in') {
      createNewUser(userName);
      mainMenuRender();
    } else {
      mainMenuRender();
      userLogIn();
    };
    btnRegisteredLogIn.removeEventListener('click', handleClickRegister)
  };
  btnRegisteredLogIn.addEventListener('click', handleClickRegister)
};