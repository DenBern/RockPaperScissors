import { btnPrev, btnNext, arrowNext } from "../screens/greeting/greetingVariables.js";
import { winnerSelectionRender } from "../screens/winnerSelection/winnerSelectionRender.js";
import { randomButton, rockButton, paperButton, scissorsButton } from "../screens/startGame/startGameVariables.js";
import { startGameWrapper } from "../screens/startGame/startGameVariables.js";
import {
  itemsGame,
  winnerPlayer,
  winnerComputer,
  winnerDraw,
  rock,
  paper,
  scissors,
  random
} from "../../variables.js";

export const changeBtnPresent = (value) => {
  switch (value) {
    case 3:
      btnPrev.style.right = '240px';
      btnNext.textContent = 'Let’s Start';
      break;
    case 2:
      btnNext.textContent = 'Next';
      btnNext.append(arrowNext);
      btnPrev.style.right = '200px';
      break;
  };
};

export const changeIcons = (counter) => {
  const icons = document.querySelectorAll('.icons');
  const pathScisssors = document.getElementById('scissors-path');
  const pathRock = document.getElementById('rock-path');
  const pathPaper = document.getElementById('paper-path');

  icons.forEach((icon, index) => {
    if (counter - 1 === index) {
      icon.style.transform = 'scale(2.5)';
    } else {
      icon.style.transform = 'scale(1)';
    };
  });

  switch (counter) {
    case 1:
      pathScisssors.setAttribute('fill', '#FFCC01');
      pathRock.setAttribute('fill', '#fff');
      break;
    case 2:
      pathScisssors.setAttribute('fill', '#90C67B');
      pathRock.setAttribute('fill', '#FFCC01');
      pathPaper.setAttribute('fill', '#fff');
      break;
    case 3:
      pathScisssors.setAttribute('fill', '#90C67B');
      pathRock.setAttribute('fill', '#90C67B');
      pathPaper.setAttribute('fill', '#232586')
      break;
    default:
      pathScisssors.setAttribute('fill', '#fff');
      pathRock.setAttribute('fill', '#fff');
      pathPaper.setAttribute('fill', '#fff');
  };
};

export const changeActionButtons = (btn) => {
  switch (btn.textContent) {
    case rock:
      btn.style.backgroundColor = '#D94690';
      btn.style.opacity = '1';
      break;
    case paper:
      btn.style.backgroundColor = '#FFCC01';
      btn.style.opacity = '1';
      break;
    case scissors:
      btn.style.backgroundColor = '#5BC6E0';
      btn.style.opacity = '1';
      break;
    case random:
      btn.style.backgroundColor = '#90C67B';
      btn.style.opacity = '1';
      break;
  };
};

export const disabledActionBtns = () => {
  rockButton.setAttribute('disabled', '');
  paperButton.setAttribute('disabled', '');
  scissorsButton.setAttribute('disabled', '');
  randomButton.setAttribute('disabled', '');
};

export const enabledActionBtns = () => {
  [rockButton, paperButton, scissorsButton, randomButton].forEach(btn => {
    btn.removeAttribute('disabled', '');
    btn.style.backgroundColor = '#232586';
    btn.style.opacity = 0.7;
  });
};

export const getRandomItem = () => {
  const  items = [rock, paper, scissors];
  const randomNumber = Math.floor(Math.random() * items.length);
  return items[randomNumber];
};

export const whoIsWinner = (player, computer) => {
  let winner = '';
  itemsGame[player] === computer
    ? winner = winnerComputer
    : player === computer
    ? winner = winnerDraw
    : winner = winnerPlayer
  winnerSelectionRender(winner, player, computer);
};

export const resetStyleStartGame = () => {
  enabledActionBtns();
  startGameWrapper.innerHTML = '';
  startGameWrapper.style.alignItems = '';
  startGameWrapper.style.justifyContent = '';
};