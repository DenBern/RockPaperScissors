import { getUserLoggedData } from "../../localStorage/getUserLoggedData.js";
import { screensWrapper, userName } from "../../../variables.js";
import { userInfo } from "./mainMenuVariables.js";
import {
  menuGameIcon,
  startGameIcon,
  startGameContainer,
  menuGameContainer,
  navBar,
  shadowPreview,
  handFemale,
  handMale,
  loggedLogo,
  userPhotoName,
  userPhoto,
  userLogin,
  winLoseGames,
  winGames,
  loseGames,
  mainMenuScreen,
  logOut,
  bloodPreview,
} from "./mainMenuVariables.js";

export const mainMenuContent = () => {
  screensWrapper.innerHTML = '';
  const { login, win, lose } = getUserLoggedData(userName);

  mainMenuScreen.innerHTML = '';
  mainMenuScreen.classList.add('user-logged');

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
  navBar.append(startGameContainer, menuGameContainer, logOut);

  mainMenuScreen.append(userInfo, loggedLogo, previewGame, navBar);
  screensWrapper.append(mainMenuScreen);
};