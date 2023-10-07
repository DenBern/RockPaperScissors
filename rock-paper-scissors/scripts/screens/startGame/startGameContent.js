import { enabledActionBtns, resetStyleStartGame } from "../../helpers/helpers.js";
import {
  computerChangeContainer,
  screensWrapper,
  playerChangeContainer,
  randomPaperBtns,
  gameButtons,
  scissorsButton,
  rockButton,
  startGameWrapper,
} from "../../../variables.js";
import { playerSelectedAnimationBack } from "../../playerSelected/playerSelectedAnimationBack.js";

export const startGameContent = () => {
  let secondsToStart = 3;

  //Reset styles
  playerSelectedAnimationBack();
  resetStyleStartGame();

  startGameWrapper.classList.add('start-game');
  playerChangeContainer.classList.add('player-change-container');
  computerChangeContainer.classList.add('computer-change-container');

  const gameField = document.createElement('img');
  gameField.src = '../../assets/svg/startGame/fieldShadow.svg';
  startGameWrapper.append(gameField);
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

  startGameWrapper.append(playerChangeContainer, computerChangeContainer, gameButtons,timerToStart)
  screensWrapper.append(startGameWrapper);
}