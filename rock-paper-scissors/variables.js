// Screens wrapper
const screensWrapper = document.querySelector('.screens-wrapper');

// Btns all screens
const btnNext = document.createElement('button');
btnNext.classList.add('btn-next');
const btnPrev = document.createElement('button');

// Icons

const iconsWrapper = document.createElement('div');
const scissorsIcon = document.createElement('img');
const rockIcon = document.createElement('img');
const paperIcon = document.createElement('img');
scissorsIcon.src = "./assets/svg/icons/scissorsIcon.svg";
rockIcon.src = "./assets/svg/icons/rockIcon.svg";
paperIcon.src = "./assets/svg/icons/paperIcon.svg";
iconsWrapper.classList.add('icons-wrapper');
scissorsIcon.classList.add('icons');
rockIcon.classList.add('icons');
paperIcon.classList.add('icons')
iconsWrapper.append(scissorsIcon, rockIcon, paperIcon);

let currentIcon = 1;
const incrementCount = () => currentIcon = currentIcon + 1;
const decrementCount = () => currentIcon = currentIcon - 1;

//Welcome screen

const screenWelcome = document.createElement('div');
const btnWelcome = document.createElement('button');

// Scissors screen
const scissorsScreenContainer = document.createElement('div');
const scissorsCircle = document.createElement('div');
const titleScissors = document.createElement('h2');
titleScissors.textContent = 'Scissors';
const scissors = document.createElement('img');

// Rock screen
const rockScreenContainer = document.createElement('div');
const rockCircle = document.createElement('div');
const titleRock = document.createElement('h2');
const rock = document.createElement('img');

// Paper screen
const paperScreenContainer = document.createElement('div');
const paperCircle = document.createElement('div');
const titlePaper = document.createElement('h2');
titlePaper.classList.add('title-paper');
const paper = document.createElement('img');


export {
  screensWrapper,
  scissorsScreenContainer,
  scissorsCircle,
  titleScissors,
  scissors,
  btnNext,
  btnPrev,
  screenWelcome,
  btnWelcome,
  iconsWrapper,
  rockScreenContainer,
  rockCircle,
  titleRock,
  rock,
  currentIcon,
  incrementCount,
  decrementCount,
  paper,
  paperCircle,
  paperScreenContainer,
  titlePaper,
};