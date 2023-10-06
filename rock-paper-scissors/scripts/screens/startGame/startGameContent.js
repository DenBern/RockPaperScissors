import { enabledActionBtns } from "../../helpers/helpers.js";
import {
  computerChangeContainer,
  screensWrapper,
  userChangeContainer,
  randomPaperBtns,
  gameButtons,
  scissorsButton,
  rockButton
} from "../../../variables.js";
export const startGameContent = () => {
  let secondsToStart = 3;
  const startGameContainer = document.createElement('div');
  startGameContainer.classList.add('start-game');

  userChangeContainer.classList.add('user-change-container');
  computerChangeContainer.classList.add('computer-change-container');

  const gameField = document.createElement('img');
  gameField.src = '../../assets/svg/startGame/fieldShadow.svg';
  startGameContainer.append(gameField);
  gameField.classList.add('game-field');

  const timerToStart = document.createElement('div');
  timerToStart.classList.add('timer');
  timerToStart.textContent = secondsToStart;

  const timerFight = setInterval(() => {
    secondsToStart -= 1;
    if (secondsToStart >= 1 ) {
      timerToStart.textContent = `${secondsToStart}`;
    };
    if (secondsToStart === 0) {
      timerToStart.textContent = 'Fight';
      timerToStart.style.right = '185px';
      clearInterval(timerFight)
      setTimeout(() => {
        timerToStart.style.display = 'none';
        enabledActionBtns();
      }, 500);
    };
  }, 1000);

  gameButtons.append(rockButton, randomPaperBtns, scissorsButton);

  startGameContainer.append(userChangeContainer, computerChangeContainer, gameButtons,timerToStart)
  screensWrapper.append(startGameContainer);
}