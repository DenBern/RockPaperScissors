const screensWrapper = document.querySelector('.screens-wrapper');

// Btns all screens
const btnNext = document.createElement('button');

//Welcome screen

const screenWelcome = document.createElement('div');
const btnWelcome = document.createElement('button');

// Scissors screen
const scissorsScreenContainer = document.createElement('div');
const scissorsCircle = document.createElement('div');
const title = document.createElement('h2');
const scissors = document.createElement('img');


export {
  screensWrapper,
  scissorsScreenContainer,
  scissorsCircle,
  title,
  scissors,
  btnNext,
  screenWelcome,
  btnWelcome,
};