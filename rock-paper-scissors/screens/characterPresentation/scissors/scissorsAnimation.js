import { scissors, scissorsCircle, scissorsScreenContainer } from "../../../variables.js";
export const scissorsAnimation = () => {
  scissors.style.left = '-190px';
  scissors.style.transform = 'scale(1)';
  scissorsCircle.style.left = '-265px';
  scissorsCircle.style.top = '140px';
  scissorsScreenContainer.style.transform = 'translateX(-220px)'; //or -435px if block display: none;

  scissors.animate([
    {top: '40px', left: '100px'},
    {left: '-190px', transform: 'scale(0.5)'},
  ], 700);
  scissorsCircle.animate([
    {top: '360px', left: '30px'},
    {top: '140px', left: '-265px'},
  ], 700);

  // When the animation ended, rock-screen shifts...
  // setTimeout(() => {
  //   scissorsScreenContainer.style.display = 'none';
  // }, 1000)
};