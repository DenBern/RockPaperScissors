import { createNewUser } from "../../localStorage/createNewUser.js";
import { setUserName, userName } from "../../../variables.js";
import { userLoggedRender } from "../userLogged/userLoggedRender.js";

export const registerLogInUserListeners = () => {
  const btnRegisteredLogIn = document.querySelector('.btn-registered');
  const inputName = document.querySelector('.input-name');

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

  btnRegisteredLogIn.addEventListener('click', () => {
    if (btnRegisteredLogIn.textContent !== 'Log in') {
      createNewUser(userName);
      userLoggedRender();
    } else {
      userLoggedRender();
    };
  });
};