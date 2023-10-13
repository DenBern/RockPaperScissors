// Screens wrapper
const screensWrapper = document.querySelector('.screens-wrapper');

//Change character screen
let currentIcon = 1;
const incrementCount = () => currentIcon ++;
const decrementCount = () => currentIcon --;

// Register and log in
let userName = '';
const setUserName = (value) => {
  userName = value;
};

const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
const random = 'Random';

const itemsGame = {
  'Rock': 'Paper',
  'Scissors': 'Rock',
  'Paper': 'Scissors',
};

const winnerPlayer = 'Player';
const winnerComputer = 'Computer';
const winnerDraw = 'Draw';

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

const setWin = (value) => win = value;
const setLose = (value) => lose = value;
const setDraw = (value) => draw = value;
const setClickRock = (value) => clickRock = value;
const setClickPaper = (value) => clickPaper = value;
const setClickScissors= (value) => clickScissors = value;
const setClickRandom = (value) => clickRandom = value;
const setLogged = (value) => logged = value;

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
  winnerPlayer,
  winnerComputer,
  winnerDraw,
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
};