import { computerChangeContainer, screensWrapper, userChangeContainer, randomPaperBtns, gameButtons, scissorsButton, paperButton, rockButton, randomButton } from "../../variables.js";
export const startGameContent = () => {
  const startGameContainer = document.createElement('div');
  startGameContainer.classList.add('start-game');

  userChangeContainer.classList.add('user-change-container');
  computerChangeContainer.classList.add('computer-change-container');

  const gameField = document.createElement('img');
  gameField.src = '../../assets/svg/startGame/fieldShadow.svg';
  startGameContainer.append(gameField);
  gameField.classList.add('game-field');

  gameButtons.append(rockButton, randomPaperBtns, scissorsButton);

  startGameContainer.append(userChangeContainer, computerChangeContainer, gameButtons)
  screensWrapper.append(startGameContainer);
}