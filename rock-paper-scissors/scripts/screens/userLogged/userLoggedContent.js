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
  userLoggedScreen,
} from "../../../variables.js";

export const userLoggedContent = () => {
  screensWrapper.innerHTML = '';
  const {login, round, win, lose, draw, clickRock, clickPaper, clickScissors, clickRandom} = getUserLoggedData(userName);

  userLoggedScreen.innerHTML = '';
  userLoggedScreen.classList.add('user-logged');

  userInfo.classList.add('user-info');

  userLogin.textContent = login;

  loggedLogo.classList.add('logged-logo');

  winGames.textContent = `Win: ${win}`;
  loseGames.textContent = `Lose: ${lose}`;

  winLoseGames.append(winGames, loseGames);

  userPhotoName.append(userPhoto, userLogin);
  userInfo.append(userPhotoName, winLoseGames);

  const previewGame = document.createElement('div');
  previewGame.classList.add('preview-game');

  shadowPreview.src = './assets/svg/mainMenu/shadowPreview.svg';
  shadowPreview.classList.add('shadow-preview');

  bloodPreview.src = './assets/svg/mainMenu/blood.svg';
  bloodPreview.classList.add('blood-preview');

  handMale.src = './assets/svg/hands/preview/rockHandPreview.svg';
  handMale.classList.add('hand-male');

  handFemale.src = './assets/svg/hands/preview/scissorsHandPreview.svg';
  handFemale.classList.add('hand-female');

  previewGame.append(shadowPreview, bloodPreview, handMale, handFemale);

  startGameContainer.innerHTML = startGameIcon;
  menuGameContainer.innerHTML = menuGameIcon;
  navBar.append(startGameContainer, menuGameContainer);

  userLoggedScreen.append(userInfo, loggedLogo, previewGame, navBar);
  screensWrapper.append(userLoggedScreen);
};