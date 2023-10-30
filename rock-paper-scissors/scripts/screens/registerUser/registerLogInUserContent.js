import { screensWrapper, inputName, btnRegisteredLogIn, userName} from "../../../variables.js";
import { checkLogIn } from "../../localStorage/checkLogIn.js";

export const registerLogInUserContent = () => {
  screensWrapper.innerHTML = '';
  const logo = document.createElement('img');
  logo.src = './assets/svg/logoRegister.svg';
  logo.classList.add('logo-register');
  const titleLogo = document.createElement('img');
  titleLogo.src = './assets/svg/titleLogo.svg';
  titleLogo.classList.add('logo-title');
  const registerScreenContainer = document.createElement('div');
  registerScreenContainer.classList.add('register-screen');

  inputName.classList.add('input-name');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('maxLength', '20');
  inputName.setAttribute('minLength', '1');
  inputName.setAttribute('required', '');
  inputName.setAttribute('autofocus', '');
  inputName.setAttribute('title', 'Use the latin characters');
  inputName.setAttribute('pattern', "^[a-zA-Z]+$");
  inputName.placeholder = checkLogIn() ? 'Enter your name' : 'What is your name?';
  inputName.value = `${userName ? userName : ''}`;

  const wrapperInput = document.createElement('div');
  wrapperInput.classList.add('wrapper-input');
  wrapperInput.append(inputName);

  const dividerContainer = document.createElement('div');
  dividerContainer.classList.add('divider-container');
  const dividerRight = document.createElement('hr');
  const dividerLeft = document.createElement('hr');

  dividerContainer.append(dividerLeft, dividerRight)

  const navBar = document.createElement('div');
  navBar.classList.add('nav-bar');

  btnRegisteredLogIn.textContent = `${checkLogIn() ? 'Sign in' : 'Registered'}`;
  btnRegisteredLogIn.classList.add('btn-registered');
  if (userName) {
    btnRegisteredLogIn.removeAttribute('disabled', '');
  } else {
    btnRegisteredLogIn.setAttribute('disabled', '');
  };

  registerScreenContainer.append(logo, titleLogo,wrapperInput, dividerContainer, btnRegisteredLogIn)

  screensWrapper.append(registerScreenContainer);
};