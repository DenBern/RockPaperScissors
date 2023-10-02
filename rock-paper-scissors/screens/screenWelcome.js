import { screensWrapper } from "../variables.js"
import { screenGreeting } from "../screens/screenGreeting.js"
export const screenWelcome = () => {
  const screenWelcome = document.createElement('div');
  const btnWelcome = document.createElement('button');
  screenWelcome.classList.add('welcome-screen');
  btnWelcome.classList.add('btn-welcome');
  btnWelcome.textContent = 'Welcome to RPS!';
  screenWelcome.append(btnWelcome)
  screensWrapper.append(screenWelcome);

  btnWelcome.addEventListener('click', () => {
    screenWelcome.style.opacity = 0;
    let hiddenTimer = setTimeout(() => {
      screenWelcome.style.display = "none";
      screenGreeting();
    }, 1000);
    // clearTimeout(hiddenTimer);
  })

}