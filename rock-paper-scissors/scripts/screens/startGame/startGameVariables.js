import { rockIcon } from "../characterPresentation/rock/rockVariables.js";
import { paperIcon } from "../characterPresentation/paper/paperVariables.js";
import { scissorsIcon } from "../characterPresentation/scissors/scissorsVariables.js";

const startGameWrapper = document.createElement('div');
const computerChangeShadow = document.createElement('img');
const playerChangeShadow = document.createElement('img');
const computerChangeContainer = document.createElement('div');
const playerChangeContainer = document.createElement('div');

const leaveGame = document.createElement('button');

playerChangeShadow.src = './assets/svg/hands/shadow/userChange.svg';
computerChangeShadow.src = './assets/svg/hands/shadow/computerChange.svg';

computerChangeContainer.append(computerChangeShadow);
playerChangeContainer.append(playerChangeShadow);

const gameButtons = document.createElement('div');
gameButtons.classList.add('game-buttons');

const rockButton  = document.createElement('button');
rockButton.innerHTML = rockIcon;
rockButton.textContent = 'Rock';
rockButton.classList.add('rock-button')

const paperButton  = document.createElement('button');
paperButton.innerHTML = paperIcon;
paperButton.textContent = 'Paper';
paperButton.classList.add('paper-button');

const scissorsButton  = document.createElement('button');
scissorsButton.innerHTML = scissorsIcon;
scissorsButton.textContent = 'Scissors';
scissorsButton.classList.add('scissors-button');

const randomButton  = document.createElement('button');
randomButton.textContent = 'Random';
randomButton.classList.add('random-button');

const randomPaperBtns = document.createElement('div');
randomPaperBtns.classList.add('random-paper-btns');

const randomIcon = document.createElement('img');
randomIcon.src = './assets/svg/randomIcon.svg';
randomButton.append(randomIcon);

const scissorsIconAction = document.createElement('img');
scissorsIconAction.src = './assets/svg/scissorsIcon.svg';
scissorsButton.append(scissorsIconAction);

const rockIconAction = document.createElement('img');
rockIconAction.src = './assets/svg/rockIcon.svg';
rockButton.append(rockIconAction);

const paperIconAction = document.createElement('img');
paperIconAction.src = './assets/svg/paperIcon.svg';
paperButton.append(paperIconAction);

randomPaperBtns.append(paperButton, randomButton);


const playerItemContainer = document.createElement('div');
const itemPlayerIcon = document.createElement('img');

const computerItemContainer = document.createElement('div');
const itemComputerIcon = document.createElement('img');

const computerProgressWrapper = document.createElement('div');
computerProgressWrapper.classList.add('computer-progress-wrapper');
const currentProgressComputer = document.createElement('div');
currentProgressComputer.classList.add('current-progress-computer');

const playerProgressWrapper = document.createElement('div');
playerProgressWrapper.classList.add('player-progress-wrapper')
const currentProgressPlayer = document.createElement('div');
currentProgressPlayer.classList.add('current-progress-player');

export {
  computerChangeContainer,
  playerChangeContainer,
  randomPaperBtns,
  gameButtons,
  rockButton,
  paperButton,
  scissorsButton,
  randomButton,
  startGameWrapper,
  playerProgressWrapper,
  computerProgressWrapper,
  currentProgressPlayer,
  currentProgressComputer,
  playerItemContainer,
  computerItemContainer,
  itemComputerIcon,
  itemPlayerIcon,
  leaveGame,
}