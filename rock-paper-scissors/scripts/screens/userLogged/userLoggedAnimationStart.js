import {
  bloodPreview,
  handFemale,
  handMale,
  loggedLogo,
  navBar,
  screensWrapper,
  shadowPreview,
  userInfo,
} from "../../../variables.js";
import { startGameRender } from "../startGame/startGameRender.js";

export const userLoggedAnimationStart = () => {
    userInfo.style.top = '-65px';
    handMale.style.left = '440px';
    handFemale.style.right = '440px';
    bloodPreview.style.right = '-215px';
    shadowPreview.style.right = '440px';
    shadowPreview.style.opacity = '0.1';
    loggedLogo.style.opacity = '0';
    navBar.style.top = '100px';
    setTimeout(() => {
      screensWrapper.innerHTML = '';
      startGameRender();
    }, 750);
};