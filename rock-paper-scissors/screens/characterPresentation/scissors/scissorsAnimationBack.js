import { scissors, scissorsCircle } from "../../../variables.js";
export const scissorsAnimationBack = () => {
  scissors.style.left = '100px';
  scissors.style.transform = 'scale(1)';
  scissorsCircle.style.left = '30px';
  scissorsCircle.style.top = '360px';

  scissors.animate([
    {top: '40px', left: '-190px', transform: 'scale(0.5)'},
    {left: '100px', transform: 'scale(1)'},
  ], 700);

  scissorsCircle.animate([
    {top: '140px', left: '-500px'},
    {top: '360px', left: '30px'},
  ], 700);
}