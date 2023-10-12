import { userNotFound, userInfo } from "./mainMenuVariables.js";
import { mainMenuAnimationStart } from "./mainMenuAnimationStart.js";
import {
  handMale,
  handFemale,
  bloodPreview,
  shadowPreview,
  loggedLogo,
  navBar,
  startGameContainer
} from "./mainMenuVariables.js";

export const mainMenuAnimation = () => {
  userInfo.style.top = '0';
  handMale.style.left = '200px';
  handFemale.style.right = '160px';
  bloodPreview.style.right = '110px';
  shadowPreview.style.right = '100px';
  shadowPreview.style.opacity = '1';
  loggedLogo.style.opacity = '1';
  navBar.style.top = '0';
  userInfo.animate([
    {top: '-65px'},
    {top: '-0'}
  ], 700);

  handFemale.animate([
    {right: '440px'},
    {right: '160px'}
  ], 700);

  handMale.animate([
    {left: '440px'},
    {left: '200px'}
  ], 700);

  bloodPreview.animate([
    {opacity: '0.2'},
    {opacity: '1'}
  ], 700);

  userNotFound.style.opacity = 1;
  startGameContainer.removeEventListener('click', mainMenuAnimationStart);
};