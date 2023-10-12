import { userInfo } from "./mainMenuVariables.js";
import {
  bloodPreview,
  handFemale,
  handMale,
  loggedLogo,
  navBar,
  shadowPreview
} from "./mainMenuVariables.js";

export const mainMenuAnimationStart = () => {
  userInfo.style.top = '-65px';
  handMale.style.left = '440px';
  handFemale.style.right = '440px';
  bloodPreview.style.right = '-215px';
  shadowPreview.style.right = '440px';
  shadowPreview.style.opacity = '0.1';
  loggedLogo.style.opacity = '0';
  navBar.style.top = '100px';
};