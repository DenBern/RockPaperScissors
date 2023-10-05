import { createNewUser } from "../../scripts/localStorage/createNewUser.js";
import { setUserName, userName } from "../../variables.js";
import { userLoggedRender } from "../userLogged/userLoggedRender.js";


export const registerUserListeners = () => {
  const btnRegistered = document.querySelector('.btn-registered');
  const inputName = document.querySelector('.input-name');

  inputName.addEventListener('input', (e) => {
    setUserName(e.target.value);
    const minLength = inputName.minLength;

    if (userName.length >= minLength) {
        btnRegistered.removeAttribute('disabled', '');
        btnRegistered.style.transform = 'scale(1.2)';
      } else {
        btnRegistered.setAttribute('disabled', '');
        btnRegistered.style.transform = 'scale(1)';
    };
  });

  btnRegistered.addEventListener('click', () => {
    createNewUser(userName);
    userLoggedRender();
  })
}