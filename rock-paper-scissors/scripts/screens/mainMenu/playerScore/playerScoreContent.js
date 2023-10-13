import { mainMenuScreen, playerScoreWrapper, closeScore} from "../mainMenuVariables.js";
import { userFind } from "../../../localStorage/getUserLoggedData.js";

export const playerScoreContent = () => {

  playerScoreWrapper.innerHTML = '';

  playerScoreWrapper.classList.add('player-score-wrapper');

  const playerNameBtnClose = document.createElement('div');
  playerNameBtnClose.classList.add('name-btn-close');

  const playerName = document.createElement('span');
  playerName.classList.add('player-title')
  playerName.textContent = `${userFind.login.toUpperCase()}`;
  playerNameBtnClose.append(playerName, closeScore)

  const wrapperTopClicks = document.createElement('div');
  wrapperTopClicks.classList.add('wrapper-top-clicks');

  const divIderScore = document.createElement('div');
  divIderScore.classList.add('divider-score');

  const wrapperTop = document.createElement('div');
  wrapperTop.classList.add('top-results');
  const topResults = document.createElement('span');
  topResults.textContent = 'Last 10 games';
  topResults.style.color = '#fff';

  const resultsList = document.createElement('ul');
  resultsList.classList.add('results-list');
  resultsList.innerHTML = '';
  userFind.lastGames.forEach(game => {
      resultsList.innerHTML += `<li class="result">${game}</li>`;
  });

  wrapperTop.append(topResults, resultsList);

  const wrapperClicks = document.createElement('div');
  wrapperClicks.classList.add('wrapper-clicks');

  const clickRockWrapper = document.createElement('div');
  clickRockWrapper.classList.add('icon-clicks-wrapper');
  const rockIcon = document.createElement('div');
  rockIcon.classList.add('rock-icon');
  const clickRock = document.createElement('span');
  clickRock.style.color = '#D94691';
  clickRock.textContent = `${'Clicks: ' + userFind.clickRock}`;
  clickRockWrapper.append(rockIcon, clickRock);

  const clickPaperWrapper = document.createElement('div');
  clickPaperWrapper.classList.add('icon-clicks-wrapper');
  const paperIcon = document.createElement('div');
  paperIcon.classList.add('paper-icon')
  const clickPaper = document.createElement('span');
  clickPaper.style.color = '#F0CA44';
  clickPaper.textContent = `${'Clicks: ' + userFind.clickPaper}`;
  clickPaperWrapper.append(paperIcon, clickPaper);

  const clickScissorsWrapper = document.createElement('div');
  clickScissorsWrapper.classList.add('icon-clicks-wrapper')
  const scissorsIcon = document.createElement('div');
  scissorsIcon.classList.add('scissors-icon');
  const clickScissors = document.createElement('span');
  clickScissors.style.color = '#5BC6E0';
  clickScissors.textContent = `${'Clicks: ' + userFind.clickScissors}`;
  clickScissorsWrapper.append(scissorsIcon, clickScissors);

  const clickRandomWrapper = document.createElement('div');
  clickRandomWrapper.classList.add('icon-clicks-wrapper')
  const randomIcon = document.createElement('div');
  randomIcon.classList.add('random-icon');
  const clickRandom = document.createElement('span');
  clickRandom.style.color = '#90C67B';
  clickRandom.textContent = `${'Clicks: ' + userFind.clickRandom}`;
  clickRandomWrapper.append(randomIcon, clickRandom);

  const winsWrapper = document.createElement('div');
  winsWrapper.classList.add('icon-clicks-wrapper')
  const winsIcon = document.createElement('div');
  winsIcon.classList.add('wins-icon');
  const winsRounds = document.createElement('span');
  winsRounds.textContent = `${'Wins: ' + userFind.win}`;
  winsWrapper.append(winsIcon, winsRounds);

  const loseWrapper = document.createElement('div');
  loseWrapper.classList.add('icon-clicks-wrapper');
  const loseIcon = document.createElement('div');
  loseIcon.classList.add('lose-icon');
  const loseRounds = document.createElement('span');
  loseRounds.textContent = `${'Lose: ' + userFind.lose}`;
  loseWrapper.append(loseIcon, loseRounds);

  const drawWrapper = document.createElement('div');
  drawWrapper.classList.add('icon-clicks-wrapper')
  const drawIcon = document.createElement('div');
  drawIcon.classList.add('draw-icon');
  const drawRounds = document.createElement('span');
  drawRounds.textContent = `${'Draw: ' + userFind.draw}`;
  drawWrapper.append(drawIcon, drawRounds);

  const roundsWrapper = document.createElement('div');
  roundsWrapper.classList.add('rounds-wrapper')
  const roundsIcon = document.createElement('div');
  roundsIcon.classList.add('rounds-icon');
  const roundsCount = document.createElement('span');
  roundsCount.textContent = `${'Rounds: ' + userFind.rounds}`;
  roundsWrapper.append(roundsIcon, roundsCount);

  wrapperClicks.append(clickRockWrapper, clickPaperWrapper, clickScissorsWrapper, clickRandomWrapper, winsWrapper, loseWrapper, drawWrapper);

  wrapperTopClicks.append(wrapperTop, divIderScore, wrapperClicks);

  playerScoreWrapper.append(playerNameBtnClose, wrapperTopClicks)

  mainMenuScreen.append(playerScoreWrapper);
};