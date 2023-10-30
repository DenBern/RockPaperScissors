import { playerScoreWrapper } from "../mainMenuVariables.js";

export const playerScoreAnimationBack = () => {
  playerScoreWrapper.style.top = '660px';
  playerScoreWrapper.animate([
    {top: '0'},
    {top: '660px'}
  ], 700);
};