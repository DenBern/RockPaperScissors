import { scissors, scissorsCircle } from "../../../variables.js";
export const scissorsAnimation = () => {
  scissors.style.left = '-190px';
  scissors.style.transform = 'scale(1)';
  scissorsCircle.style.left = '-490px';
  scissorsCircle.style.top = '240px'

  scissors.animate([
    {top: '40px', left: '100px'},
    {left: '-190px', transform: 'scale(0.5)'},
  ], 700);
  scissorsCircle.animate([
    {top: '360px', left: '30px'},
    {top: '240px', left: '-490px'},
  ], 700);
};