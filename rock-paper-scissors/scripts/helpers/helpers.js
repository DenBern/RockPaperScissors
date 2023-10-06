import { arrowNext,
  btnNext,
  btnPrev,
  paperButton,
  randomButton,
  rockButton,
  scissors,
  scissorsButton,
  computerChangeContainer,
  userChangeContainer,
} from "../../variables.js";
import { winnerSelectionRender } from "../winnerSelection/winnerSelectionRender.js";

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
      pathRock.setAttribute('fill', '#fff')
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
  }
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
  rockButton.setAttribute('disabled', '');
  paperButton.setAttribute('disabled', '');
  scissorsButton.setAttribute('disabled', '');
  randomButton.setAttribute('disabled', '');
};

export const enabledActionBtns = () => {
  rockButton.removeAttribute('disabled', '');
  paperButton.removeAttribute('disabled', '');
  scissorsButton.removeAttribute('disabled', '');
  randomButton.removeAttribute('disabled', '');
};

export const getRandomItem = () => {
  const  items = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * items.length);
  return items[randomNumber];
};

export const whoIsWinner = (player, computer) => {
  let gameEnd = {
    winner: '',
    player: '',
    computer: '',
  };
  if (player === 'Rock' && computer === 'Paper') gameEnd = {winner: 'computer', player: player, computer: computer};
  if (player === 'Rock' && computer === 'Scissors') gameEnd = {winner: 'user', player: player, computer: computer}
  if (player === 'Paper' && computer === 'Rock') gameEnd = {winner: 'user', player: player, computer: computer};
  if (player === 'Paper' && computer === 'Scissors') gameEnd = {winner: 'computer', player: player, computer: computer};
  if (player === 'Scissors' && computer === 'Rock') gameEnd = {winner: 'computer', player: player, computer: computer};
  if (player === 'Scissors' && computer === 'Paper') gameEnd = {winner: 'user', player: player, computer: computer}
  if (player === computer) gameEnd = {winner: 'drow', player: player, computer: computer};
  winnerSelectionRender(gameEnd);
}