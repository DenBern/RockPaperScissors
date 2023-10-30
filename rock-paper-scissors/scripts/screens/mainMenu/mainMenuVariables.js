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

const userNotFound = document.createElement('div');
userNotFound.classList.add('user-not-found');
const userNotFoundText = document.createElement('span');

const userInfo = document.createElement('div');

const mainMenuScreen = document.createElement('div');
const navBar = document.createElement('div');
navBar.classList.add('nav-bar');
const startGameContainer = document.createElement('button');
const menuGameContainer = document.createElement('button');
const logOut = document.createElement('button');
logOut.classList.add('log-out');
startGameContainer.classList.add('btn-start');
menuGameContainer.classList.add('btn-menu');
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

const playerScoreWrapper = document.createElement('div');
const closeScore = document.createElement('button');
closeScore.classList.add('btn-close-score');

export {
  userNotFound,
  userNotFoundText,
  userInfo,
  mainMenuScreen,
  navBar,
  startGameContainer,
  menuGameContainer,
  logOut,
  shadowPreview,
  bloodPreview,
  handFemale,
  handMale,
  loggedLogo,
  userPhotoName,
  userPhoto,
  userLogin,
  winLoseGames,
  winGames,
  loseGames,
  playerScoreWrapper,
  closeScore,
  menuGameIcon,
  startGameIcon,
}