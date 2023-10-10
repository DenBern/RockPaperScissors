import { playerScoreWrapper } from "../../../../variables.js";

export const playerScoreAnimate = () => {
  playerScoreWrapper.style.top = '0';

  playerScoreWrapper.animate([
    {top: '660px'},
    {top: '0'}
  ], 700);
};