import { getUserLoggedData } from "../../localStorage/getUserLoggedData.js";
import {
  screensWrapper,
  menuGameIcon,
  startGameIcon,
  startGameContainer,
  menuGameContainer,
  navBar,
  userInfo,
  shadowPreview,
  bloodPreview,
  handFemale,
  handMale,
  loggedLogo,
  userName,
  userPhotoName,
  userPhoto,
  userLogin,
  winLoseGames,
  winGames,
  loseGames,
} from "../../../variables.js";

export const userLoggedContent = () => {
  screensWrapper.innerHTML = '';
  const {login, round, win, lose, draw, clickRock, clickPaper, clickScissors, clickRandom} = getUserLoggedData(userName);

  const userLoggedScreen = document.createElement('div');
  userLoggedScreen.innerHTML = '';
  userLoggedScreen.classList.add('user-logged');

  userInfo.classList.add('user-info');

  // const userPhotoName = document.createElement('div');
  // userPhotoName.classList.add('user-photo-name');
  // const userPhoto = document.createElement('div');
  // userPhoto.classList.add('user-photo');
  // const userLogin = document.createElement('p');
  // userLogin.classList.add('user-name');
  userLogin.textContent = login;

  loggedLogo.classList.add('logged-logo');

  // const winLoseGames = document.createElement('div');
  // winLoseGames.classList.add('win-lose-games')
  // const winGames = document.createElement('p');
  // winGames.classList.add('win-games');
  winGames.textContent = `Win: ${win}`;
  // const loseGames = document.createElement('lose-games');
  // loseGames.classList.add('lose-games');
  loseGames.textContent = `Lose: ${lose}`;

  winLoseGames.append(winGames, loseGames);

  userPhotoName.append(userPhoto, userLogin);
  userInfo.append(userPhotoName, winLoseGames);

  const previewGame = document.createElement('div');
  previewGame.classList.add('preview-game');

  shadowPreview.src = '../../assets/svg/mainMenu/shadowPreview.svg';
  shadowPreview.classList.add('shadow-preview');

  bloodPreview.src = '../../assets/svg/mainMenu/blood.svg';
  bloodPreview.classList.add('blood-preview');

  handMale.src = '../../assets/svg/hands/preview/rockHandPreview.svg';
  handMale.classList.add('hand-male');

  handFemale.src = '../../assets/svg/hands/preview/scissorsHandPreview.svg';
  handFemale.classList.add('hand-female');

  previewGame.append(shadowPreview, bloodPreview, handMale, handFemale);

  startGameContainer.innerHTML = startGameIcon;
  menuGameContainer.innerHTML = menuGameIcon;
  navBar.append(startGameContainer, menuGameContainer);

  userLoggedScreen.append(userInfo, loggedLogo, previewGame, navBar);
  screensWrapper.append(userLoggedScreen);
};