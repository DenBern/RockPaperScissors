import { maxWins, playerLose, playerWin, screensWrapper } from "../../../variables.js";
import { enabledActionBtns, resetStyleStartGame } from "../../helpers/helpers.js";

import { playerSelectedAnimationBack } from "../../playerSelected/playerSelectedAnimationBack.js";
import {
  computerChangeContainer,
  playerChangeContainer,
  randomPaperBtns,
  gameButtons,
  scissorsButton,
  rockButton,
  startGameWrapper,
  playerProgressWrapper,
  computerProgressWrapper,
  currentProgressPlayer,
  currentProgressComputer,
} from "../startGame/startGameVariables.js";

export const startGameContent = () => {
  let secondsToStart = 3;

  //Reset styles
  playerSelectedAnimationBack();
  resetStyleStartGame();

  startGameWrapper.classList.add('start-game');
  playerChangeContainer.classList.add('player-change-container');
  computerChangeContainer.classList.add('computer-change-container');

  const gameField = document.createElement('img');
  gameField.src = './assets/svg/startGame/fieldShadow.svg';
  startGameWrapper.append(gameField);
  gameField.classList.add('game-field');

  const timerToStart = document.createElement('div');
  timerToStart.classList.add('timer');
  timerToStart.textContent = secondsToStart;

  const progressGame = document.createElement('div');
  progressGame.classList.add('progress-game');

  const playerIcon = document.createElement('img');
  playerIcon.src = './assets/svg/process/playerIconProcess.svg';
  playerIcon.classList.add('progress-player-icon');

  currentProgressPlayer.style.width = `${(100 / maxWins)* playerWin}%`;
  playerProgressWrapper.append(currentProgressPlayer);

  const computerIcon = document.createElement('img');
  computerIcon.src = './assets/svg/process/computerIconProcess.svg';
  computerIcon.classList.add('progress-computer-icon');
  currentProgressComputer.style.width = `${(100 / maxWins) * playerLose}%`;
  computerProgressWrapper.append(currentProgressComputer);

  const progressDivider = document.createElement('div');
  progressDivider.classList.add('progress-divider');

  const progressLine = document.createElement('div');
  progressLine.classList.add('progress-line')
  progressLine.append(computerProgressWrapper, progressDivider, playerProgressWrapper)

  progressGame.append(playerIcon, progressLine, computerIcon);

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

  startGameWrapper.append(playerChangeContainer, computerChangeContainer, gameButtons,timerToStart, progressGame)
  screensWrapper.append(startGameWrapper);
};