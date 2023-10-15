// Screens wrapper
const screensWrapper = document.querySelector('.screens-wrapper');

// Save player name in input
const inputName = document.createElement('input');
const btnRegisteredLogIn = document.createElement('button');

//Change character screen
let currentIcon = 1;
const incrementCount = () => currentIcon ++;
const decrementCount = () => currentIcon --;

// Register and log in
let userName = '';
const setUserName = (value) => {
  userName = value;
};

// Rounds
const winners = document.createElement('div');
const winsPlayer = document.createElement('span');
const winsComputer = document.createElement('span');

const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
const random = 'Random';

const itemsGame = {
  'Rock': 'Paper',
  'Scissors': 'Rock',
  'Paper': 'Scissors',
};

const playerStr = 'Player';
const computerStr = 'Computer';
const drawStr = 'Draw';

const maxWins = 3;
let playerWin = 0;
let playerLose = 0;

const setPlayerWin = () => playerWin ++;
const setPlayerLose = () => playerLose ++;
const resetWinsLose = () => {
  playerWin = 0;
  playerLose = 0;
};

let counterStart = 0;
let win =  0;
let lose = 0;
let draw = 0;
let clickRock = 0;
let clickPaper = 0;
let clickScissors = 0;
let clickRandom = 0;
let logged = false;
let lastGames = [];
let lastGamesMaxLenght = 10;

const setWin = (value) => win = value;
const setLose = (value) => lose = value;
const setDraw = (value) => draw = value;
const setClickRock = (value) => clickRock = value;
const setClickPaper = (value) => clickPaper = value;
const setClickScissors= (value) => clickScissors = value;
const setClickRandom = (value) => clickRandom = value;
const setLogged = (value) => logged = value;
const getLastGames = (playerGames) => {
  lastGames = playerGames;
};

const setLastGames = () => {
  if (lastGames.length === lastGamesMaxLenght) {
    lastGames.pop();
    lastGames.unshift(`${playerWin + " : " + playerLose}`);
  } else {
    lastGames.unshift(`${playerWin + " : " + playerLose}`);
  }
};

const incWin = () => win ++;
const incLose = () => lose ++;
const incDraw = () => draw ++;
const incClicRock = () => clickRock ++;
const incClickPaper = () => clickPaper ++;
const incClickScissors = () => clickScissors ++;
const incClickRandom = () => clickRandom ++;

const clearGame = (value) => {
  setWin(value);
  setLose(value);
  setDraw(value);
  setClickRock(value);
  setClickPaper(value);
  setClickScissors(value);
  setClickRandom(value);
};

export {
  win,
  lose,
  draw,
  clickRock,
  clickPaper,
  clickScissors,
  clickRandom,
  incWin,
  incLose,
  incDraw,
  incClicRock,
  incClickPaper,
  incClickScissors,
  incClickRandom,
  maxWins,
  screensWrapper,
  currentIcon,
  incrementCount,
  decrementCount,
  userName,
  setUserName,
  itemsGame,
  playerStr,
  computerStr,
  drawStr,
  setPlayerLose,
  setPlayerWin,
  playerWin,
  playerLose,
  resetWinsLose,
  setWin,
  setLose,
  setDraw,
  setClickRock,
  setClickPaper,
  setClickScissors,
  setClickRandom,
  setLogged,
  logged,
  clearGame,
  counterStart,
  rock,
  paper,
  scissors,
  random,
  inputName,
  btnRegisteredLogIn,
  winners,
  winsPlayer,
  winsComputer,
  lastGames,
  getLastGames,
  setLastGames,
};