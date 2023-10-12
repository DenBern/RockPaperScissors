import * as variables from "../../variables.js"
import { winnerSelectionRender } from "../screens/winnerSelection/winnerSelectionRender.js";

export const changeBtnPresent = (value) => {
  switch (value) {
    case 3:
      variables.btnPrev.style.right = '240px';
      variables.btnNext.textContent = 'Let’s Start';
      break;
    case 2:
      variables.btnNext.textContent = 'Next';
      variables.btnNext.append(variables.arrowNext);
      variables.btnPrev.style.right = '200px';
      break;
  };
};

export const changeIcons = (counter) => {
  const icons = document.querySelectorAll('.icons');
  const pathScisssors = document.getElementById('scissors-path');
  const pathRock = document.getElementById('rock-path');
  const pathPaper= document.getElementById('paper-path');

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
      pathPaper.setAttribute('fill', '#fff')
      break;
    case 3:
      pathScisssors.setAttribute('fill', '#90C67B');
      pathRock.setAttribute('fill', '#90C67B');
      pathPaper.setAttribute('fill', '#232586')
      break;
    default:
      pathScisssors.setAttribute('fill', '#fff');
      pathRock.setAttribute('fill', '#fff');
      pathPaper.setAttribute('fill', '#fff')
  };
};

export const changeActionButtons = (btn) => {
  switch (btn.textContent) {
    case 'Rock':
      btn.style.backgroundColor = '#D94690';
      btn.style.opacity = '1';
      break;
    case 'Paper':
      btn.style.backgroundColor = '#FFCC01';
      btn.style.opacity = '1';
      break;
    case 'Scissors':
      btn.style.backgroundColor = '#5BC6E0';
      btn.style.opacity = '1';
      break;
    case 'Random':
      btn.style.backgroundColor = '#90C67B';
      btn.style.opacity = '1';
      break;
  };
};

export const disabledActionBtns = () => {
  variables.rockButton.setAttribute('disabled', '');
  variables.paperButton.setAttribute('disabled', '');
  variables.scissorsButton.setAttribute('disabled', '');
  variables.randomButton.setAttribute('disabled', '');
};

export const enabledActionBtns = () => {
  [variables.rockButton, variables.paperButton, variables.scissorsButton, variables.randomButton].forEach(btn => {
    btn.removeAttribute('disabled', '');
    btn.style.backgroundColor = '#232586';
    btn.style.opacity = 0.7;
  });
};

export const getRandomItem = () => {
  const  items = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * items.length);
  return items[randomNumber];
};

export const whoIsWinner = (player, computer) => {
  let winner = '';
  variables.itemsGame[player] === computer
    ? winner = 'Computer'
    : player === computer
    ? winner = 'Draw'
    : winner = 'Player'
  winnerSelectionRender(winner, player, computer);
};

export const resetStyleStartGame = () => {
  enabledActionBtns();
  variables.startGameWrapper.innerHTML = '';
  variables.startGameWrapper.style.alignItems = '';
  variables.startGameWrapper.style.justifyContent = '';
};