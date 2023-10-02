import { screenWelcome, btnWelcome, screensWrapper } from "../../variables.js";
export const welcomeContent = () => {
  screenWelcome.classList.add('welcome-screen');
  btnWelcome.classList.add('btn-welcome');
  btnWelcome.textContent = 'Welcome to RPS!';
  screenWelcome.append(btnWelcome)
  screensWrapper.append(screenWelcome);
}