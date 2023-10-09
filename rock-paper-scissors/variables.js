// Screens wrapper
const screensWrapper = document.querySelector('.screens-wrapper');

// Btns all screens
const btnNext = document.createElement('button');
btnNext.classList.add('btn-next');
btnNext.textContent = 'Next';
const arrowNext = document.createElement('img');
arrowNext.src = './assets/svg/buttons/arrowRight.svg';
btnNext.append(arrowNext);

const btnPrev = document.createElement('button');
btnPrev.classList.add('btn-prev');
btnPrev.textContent = 'Back';
const arrowPrev = document.createElement('img');
arrowPrev.src = './assets/svg/buttons/arrowLeft.svg';
btnPrev.append(arrowPrev);

// Icons
const scissorsIcon = `<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="scissors-path" fill-rule="evenodd" clip-rule="evenodd" d="M1.39442 2.15101C1.33573 1.86984 1.51806 1.59334 1.80122 1.5349C2.08473 1.47714 2.36284 1.65767 2.4217 1.93901L3.63166 7.72078C3.67084 7.90771 3.85491 8.02806 4.04351 7.98898C4.09349 7.97878 4.13807 7.95785 4.17673 7.92984C4.28975 7.88453 4.37631 7.78251 4.39285 7.65386L5.14899 1.72649C5.16658 1.5885 5.2371 1.46556 5.34786 1.38031C5.45879 1.29506 5.59619 1.25753 5.73516 1.27534C5.87413 1.29281 5.99794 1.36301 6.0838 1.47299C6.16965 1.5828 6.20727 1.7194 6.18968 1.85739L5.44242 7.71594C5.42518 7.85081 5.48944 7.97635 5.59637 8.04673C5.66184 8.12749 5.75884 8.17781 5.8642 8.17781C6.05628 8.17781 6.21249 8.0227 6.21249 7.83197V7.39966C6.21249 7.06593 6.48607 6.79444 6.822 6.79444C7.1581 6.79444 7.43151 7.06593 7.43151 7.39966V8.52365C7.43151 8.71438 7.58789 8.86949 7.7798 8.86949C7.97188 8.86949 8.12809 8.71438 8.12809 8.52365V7.89335C8.18573 7.86793 8.33323 7.83197 8.42048 7.83197C8.66898 7.83197 8.88684 8.03394 8.88684 8.26427C8.88684 9.87001 8.75466 12.68 8.40028 13.3837C7.88132 14.4145 7.30072 15.2677 5.44329 15.2677C3.74155 15.2677 2.26636 14.4629 1.28958 13.0014C0.665795 12.0682 0.38246 10.1505 1.35837 9.2698C1.45746 9.1804 1.66086 9.05884 1.69551 9.03826L1.9381 10.7019C1.96335 10.8742 2.11224 10.9983 2.28238 10.9983C2.29893 10.9983 2.31582 10.9971 2.33271 10.9949C2.52305 10.9674 2.65505 10.792 2.62754 10.603L1.39807 2.17176L1.39442 2.15101ZM8.40916 7.14011C8.34298 7.14011 8.22561 7.15325 8.08716 7.18836C7.98442 6.57155 7.4376 6.10259 6.79831 6.10259C6.64054 6.10259 6.48555 6.13423 6.33944 6.18905L6.88069 1.94437C6.92178 1.62309 6.83419 1.30509 6.63427 1.04916C6.43453 0.793068 6.14632 0.629831 5.82275 0.589195C5.49902 0.54804 5.17894 0.635192 4.92103 0.833704C4.6633 1.03204 4.49873 1.3184 4.45781 1.63969L3.93241 5.7583L3.10365 1.79825C2.96677 1.14375 2.31895 0.721653 1.65964 0.857741C1.00416 0.992965 0.580289 1.62966 0.710202 2.28053L1.58232 8.26202C1.29446 8.41989 0.957313 8.65783 0.939202 8.6708C-0.0943491 9.40917 -0.423657 11.676 0.717864 13.3834C1.82787 15.0445 3.5075 15.9592 5.4473 15.9592C7.69656 15.9592 8.44834 14.8396 9.02563 13.6928C9.57837 12.5952 9.58464 8.44047 9.58464 8.26427C9.58464 7.65507 9.04636 7.14028 8.40916 7.14011Z" fill="#FFF"/>
</svg>
`;
const rockIcon = `<svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="rock-path" d="M14.0769 4.71922C14.0769 4.98388 14.0676 11.2187 13.2608 12.8468C12.4222 14.5396 11.3301 16.1923 8.06646 16.1923C5.23257 16.1923 2.77831 14.8335 1.15566 12.3665C-0.428745 9.95824 0.0304756 6.84643 1.43346 5.55962C1.85754 5.1711 2.19659 4.95963 2.41625 4.84803L2.41341 3.80737C2.41341 2.6731 3.16104 1.85069 4.19112 1.85069C4.59684 1.85069 4.9545 1.97585 5.23851 2.19879C5.50081 1.29137 6.3867 0.807678 7.22864 0.807678C8.00676 0.807678 8.67169 1.30597 8.9265 2.00296C9.23841 1.74508 9.63716 1.58993 10.0713 1.58993C11.0182 1.58993 11.7979 2.32786 11.8743 3.26396C12.1082 3.18965 12.3367 3.15444 12.4617 3.15444C13.3373 3.1547 14.0769 3.87125 14.0769 4.71922ZM13.2998 4.71922C13.2998 4.30253 12.9261 3.93696 12.4785 3.93696C12.3028 3.93696 11.9154 4.03187 11.9154 4.10488V5.11034C11.9154 5.32625 11.7418 5.50147 11.5278 5.50147C11.3138 5.50147 11.1402 5.32625 11.1402 5.11034V3.41546C11.1402 2.84024 10.6765 2.37245 10.1065 2.37245C9.53638 2.37245 9.07276 2.84024 9.07276 3.41546V4.06734C9.07276 4.28324 8.8991 4.45846 8.68513 4.45846C8.47115 4.45846 8.29749 4.28324 8.29749 4.06734V2.6332C8.29749 2.05798 7.83388 1.59019 7.26379 1.59019C6.74436 1.59019 5.97166 1.90257 5.97166 2.76358V3.80658C5.97166 4.02249 5.76854 4.19771 5.55457 4.19771C5.34059 4.19771 5.14626 4.02249 5.14626 3.80658C5.14626 3.26526 4.88163 2.6332 4.16579 2.6332C3.47321 2.6332 3.12899 3.2225 3.12899 3.80658V8.50038C3.12899 8.83727 3.01554 9.02188 2.78322 9.02188C2.55089 9.02188 2.44029 8.82631 2.44029 8.50038L2.44416 5.7677C2.44416 5.7677 2.08366 5.98151 1.91181 6.13927C0.401833 7.52386 0.842963 10.4964 1.78906 11.9347C3.26311 14.1762 5.49461 15.4106 8.06025 15.4106C10.8877 15.4106 11.7743 14.0914 12.5641 12.4974C13.1665 11.2818 13.2998 6.47042 13.2998 4.71922Z" fill="white" stroke="white" stroke-width="0.307692"/>
</svg>
`;
const paperIcon = `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="paper-path" fill-rule="evenodd" clip-rule="evenodd" d="M5.95392 1.13989C6.20119 1.36861 6.36321 1.72555 6.36321 2.13654V2.32983C6.53363 2.25419 6.71365 2.2211 6.89528 2.2211C7.20708 2.2211 7.52447 2.32366 7.7723 2.55332C8.02014 2.78298 8.18159 3.14347 8.18159 3.55601V4.34729C8.35202 4.27154 8.53785 4.23856 8.7195 4.23856C9.03034 4.23856 9.34342 4.34206 9.59069 4.57078C9.83795 4.7995 9.99996 5.15643 9.99996 5.56742V11.0762C9.99996 12.7491 9.3861 14.0521 8.45638 14.9118C7.5267 15.7714 6.29759 16.1923 5.0769 16.1923C3.8562 16.1923 2.63295 15.7714 1.70324 14.9118C0.773548 14.0521 0.153809 12.7491 0.153809 11.0762V7.67549C0.153809 7.26415 0.320967 6.90738 0.568949 6.67884C0.816925 6.45029 1.12879 6.34662 1.44012 6.34662C1.6221 6.34662 1.80731 6.37971 1.97804 6.45534V3.54997C1.97804 3.13898 2.14006 2.78204 2.38734 2.55332C2.63459 2.3246 2.95354 2.21506 3.26436 2.21506C3.44649 2.21506 3.62562 2.25366 3.79643 2.32983V2.13654C3.79643 1.72555 3.95844 1.36861 4.20571 1.13989C4.45296 0.911171 4.76608 0.807678 5.0769 0.807678C5.39737 0.814759 5.74966 0.95597 5.95392 1.13989ZM5.0769 1.58083C4.9336 1.58083 4.79603 1.6274 4.70271 1.71372C4.60936 1.80005 4.54483 1.91744 4.54483 2.13654V8.30368C4.54764 8.50791 4.36834 8.69576 4.17062 8.69576C3.97292 8.69576 3.79364 8.50791 3.79643 8.30368V3.58017C3.8099 3.39504 3.7167 3.24794 3.63855 3.12715C3.54525 3.04082 3.40766 2.98822 3.26436 2.98822C3.12107 2.98822 2.97764 3.04082 2.88431 3.12715C2.79099 3.21347 2.72644 3.33086 2.72644 3.54997C2.72644 6.02458 2.72644 8.49411 2.72644 10.9674C2.72924 11.1717 2.54995 11.3595 2.35223 11.3595C2.15453 11.3595 1.97525 11.1717 1.97804 10.9674V7.71172C1.99244 7.52649 1.89938 7.37854 1.82019 7.25871C1.72633 7.17221 1.58457 7.11978 1.44012 7.11978C1.2957 7.11978 1.15979 7.17221 1.06593 7.25871C0.972073 7.3452 0.902213 7.45674 0.902213 7.67549V11.0762C0.902213 12.5571 1.42449 13.6206 2.20024 14.3379C2.97598 15.0552 4.02366 15.4191 5.0769 15.4191C6.13013 15.4191 7.17782 15.0552 7.95357 14.3379C8.7293 13.6206 9.25156 12.5571 9.25156 11.0762V5.56742C9.25156 5.34832 9.18703 5.23697 9.0937 5.15064C9.00038 5.06432 8.8628 5.01172 8.7195 5.01172C8.5762 5.01172 8.43863 5.06432 8.3453 5.15064C8.19575 5.29816 8.18335 5.43014 8.18159 5.60971V8.99831C8.18439 9.20254 8.0051 9.39039 7.80739 9.39039C7.60968 9.39039 7.43041 9.20254 7.43319 8.99831C7.43319 7.18261 7.43319 5.3702 7.43319 3.55601C7.43319 3.33502 7.36931 3.21425 7.27533 3.12715C7.18133 3.04005 7.03925 2.98822 6.89528 2.98822C6.75131 2.98822 6.61508 3.04005 6.52107 3.12715C6.42707 3.21425 6.36321 3.33502 6.36321 3.55601V8.36408C6.36602 8.56831 6.18673 8.75616 5.98902 8.75616C5.7913 8.75616 5.61203 8.56831 5.61482 8.36408C5.61295 6.28653 5.61482 4.21002 5.61482 2.13654C5.61482 1.91744 5.54443 1.80005 5.45111 1.71372C5.35778 1.6274 5.22018 1.58083 5.0769 1.58083Z" fill="white"/>
</svg>
`;
const startGameIcon = `<svg width="101" height="51" viewBox="0 0 101 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Play-icon">
<path id="Rectangle" d="M75.5 1H25.5C11.969 1 1 11.969 1 25.5C1 39.031 11.969 50 25.5 50H75.5C89.031 50 100 39.031 100 25.5C100 11.969 89.031 1 75.5 1Z" fill="white" stroke="#232586"/>
<path id="Path-17-Copy" fill-rule="evenodd" clip-rule="evenodd" d="M39 13.6272V37.3729C39 38.2715 40.2475 39 41.7864 39C42.5953 39 43.3643 38.7947 43.8936 38.4375L61.3208 26.6753C62.22 26.0683 62.2271 25.1691 61.3375 24.5574L43.9103 12.5739C42.9142 11.8889 41.1557 11.8052 39.9827 12.3869C39.3593 12.6961 39 13.1496 39 13.6272Z" fill="#4847C4"/>
</g>
</svg>
`;
const menuGameIcon = `<svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Menu-icon">
<path id="Rectangle" d="M26.0426 0.5H5.95777C4.4348 0.5 3.2002 1.73461 3.2002 3.25758C3.2002 4.78054 4.4348 6.01515 5.95777 6.01515H26.0426C27.5656 6.01515 28.8002 4.78054 28.8002 3.25758C28.8002 1.73461 27.5656 0.5 26.0426 0.5Z" fill="#FBC399"/>
<path id="Rectangle-Copy" d="M29.2424 10.7424H2.75758C1.23461 10.7424 0 11.977 0 13.5C0 15.023 1.23461 16.2576 2.75758 16.2576H29.2424C30.7654 16.2576 32 15.023 32 13.5C32 11.977 30.7654 10.7424 29.2424 10.7424Z" fill="#FBC399"/>
<path id="Rectangle-Copy-4" d="M26.0426 20.9849H5.95777C4.4348 20.9849 3.2002 22.2195 3.2002 23.7424C3.2002 25.2654 4.4348 26.5 5.95777 26.5H26.0426C27.5656 26.5 28.8002 25.2654 28.8002 23.7424C28.8002 22.2195 27.5656 20.9849 26.0426 20.9849Z" fill="#FBC399"/>
</g>
</svg>
`;

const iconsWrapper = document.createElement('div');
iconsWrapper.classList.add('icons-wrapper');

const scissorsConntainer = document.createElement('div');
const rockConntainer = document.createElement('div');
const paperConntainer = document.createElement('div');
scissorsConntainer.innerHTML = scissorsIcon;
rockConntainer.innerHTML = rockIcon;
paperConntainer.innerHTML = paperIcon;
scissorsConntainer.classList.add('icons');
rockConntainer.classList.add('icons');
paperConntainer.classList.add('icons')

iconsWrapper.append(scissorsConntainer, rockConntainer, paperConntainer);

//Welcome screen
const screenWelcome = document.createElement('div');
const welcomeTitleScissors = document.createElement('span');
const welcomeTitleRock = document.createElement('span');
const welcomeTitlePaper = document.createElement('span');

//Change character screen
let currentIcon = 1;
const incrementCount = () => currentIcon ++;
const decrementCount = () => currentIcon --;

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

// Register and log in

let userName = '';
const setUserName = (value) => {
  userName = value;
};
const userNotFound = document.createElement('div');
userNotFound.classList.add('user-not-found');
const userNotFoundText = document.createElement('span');

// User logged
const navBar = document.createElement('div');
navBar.classList.add('nav-bar');
const startGameContainer = document.createElement('button');
const menuGameContainer = document.createElement('button');
startGameContainer.classList.add('btn-start');
menuGameContainer.classList.add('btn-menu');
const userInfo = document.createElement('div');
const shadowPreview = document.createElement('img');
const bloodPreview = document.createElement('img');
const handMale = document.createElement('img');
const handFemale = document.createElement('img');
const loggedLogo = document.createElement('div');

const userPhotoName = document.createElement('div');
userPhotoName.classList.add('user-photo-name');
const userPhoto = document.createElement('div');
userPhoto.classList.add('user-photo');
const userLogin = document.createElement('p');
userLogin.classList.add('user-name');

const winLoseGames = document.createElement('div');
winLoseGames.classList.add('win-lose-games')
const winGames = document.createElement('p');
winGames.classList.add('win-games');

const loseGames = document.createElement('lose-games');
loseGames.classList.add('lose-games');

// In game
const startGameWrapper = document.createElement('div');
const computerChangeShadow = document.createElement('img');
const playerChangeShadow = document.createElement('img');
const computerChangeContainer = document.createElement('div');
const playerChangeContainer = document.createElement('div');

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

const itemsGame = {
  'Rock': 'Paper',
  'Scissors': 'Rock',
  'Paper': 'Scissors',
};

const maxWins = 5;
let playerWin = 4;
let playerLose = 4;

const setPlayerWin = () => playerWin ++;
const setPlayerLose = () => playerLose ++;
const resetWinsLose = () => {
  playerWin = 0;
  playerLose = 0;
}

const buttonsHomeRestart= document.createElement('div');
buttonsHomeRestart.classList.add('btns-home-restart')
const btnHome = document.createElement('button');
btnHome.classList.add('btn-home');
const btnRestart = document.createElement('button');
btnRestart.classList.add('btn-restart');

const btnHomeIcon = document.createElement('img');
btnHomeIcon.src = './assets/svg/endGame/maiMenu.svg';

const btnRestartIcon = document.createElement('img');
btnRestartIcon.src = './assets/svg/endGame/restartGame.svg';

btnRestart.append(btnRestartIcon);
btnHome.append(btnHomeIcon);

export {
  maxWins,
  screensWrapper,
  scissorsScreenContainer,
  scissorsCircle,
  titleScissors,
  scissors,
  btnNext,
  btnPrev,
  screenWelcome,
  welcomeTitleScissors,
  welcomeTitlePaper,
  welcomeTitleRock,
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
  arrowNext,
  rockIcon,
  scissorsIcon,
  paperIcon,
  userName,
  userNotFound,
  userNotFoundText,
  setUserName,
  menuGameIcon,
  startGameIcon,
  navBar,
  startGameContainer,
  menuGameContainer,
  userInfo,
  shadowPreview,
  bloodPreview,
  handFemale,
  handMale,
  loggedLogo,
  computerChangeContainer,
  playerChangeContainer,
  gameButtons,
  rockButton,
  paperButton,
  scissorsButton,
  randomButton,
  randomPaperBtns,
  startGameWrapper,
  playerItemContainer,
  itemPlayerIcon,
  computerItemContainer,
  itemComputerIcon,
  itemsGame,
  setPlayerLose,
  setPlayerWin,
  playerWin,
  playerLose,
  currentProgressComputer,
  currentProgressPlayer,
  computerProgressWrapper,
  playerProgressWrapper,
  buttonsHomeRestart,
  btnHome,
  btnRestart,
  loseGames,
  winGames,
  winLoseGames,
  userLogin,
  userPhoto,
  userPhotoName,
  resetWinsLose,
};