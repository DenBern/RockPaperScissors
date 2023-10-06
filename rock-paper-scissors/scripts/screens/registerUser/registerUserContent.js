import { screensWrapper } from "../../../variables.js";

export const registerUserContent = () => {
  screensWrapper.innerHTML = '';
  const logo = document.createElement('img');
  logo.src = '../../assets/svg/logoRegister.svg';
  logo.classList.add('logo-register');
  const titleLogo = document.createElement('img');
  titleLogo.src = '../../assets/svg/titleLogo.svg';
  titleLogo.classList.add('logo-title');
  const registerScreenContainer = document.createElement('div');
  registerScreenContainer.classList.add('register-screen');

  const inputName = document.createElement('input');
  inputName.classList.add('input-name')
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('maxLength', '20');
  inputName.setAttribute('minLength', '1');
  inputName.setAttribute('required', '');
  // inputName.setAttribute('pattern', '^[^\s()-]*$');
  inputName.placeholder = 'What is your name?';

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
  
  btnRegistered.classList.add('btn-registered');
  btnRegistered.setAttribute('disabled', '');

  registerScreenContainer.append(logo, titleLogo,wrapperInput, dividerContainer, btnRegistered)

  screensWrapper.append(registerScreenContainer);
}