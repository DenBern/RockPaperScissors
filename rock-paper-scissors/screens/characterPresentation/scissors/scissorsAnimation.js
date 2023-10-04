import { scissors, scissorsCircle } from "../../../variables.js";
export const scissorsAnimation = () => {
  scissors.style.left = '-300px';
  scissors.style.transform = 'scale(1)';
  scissorsCircle.style.left = '-500px';
  scissorsCircle.style.top = '140px';

  scissors.animate([
    {top: '40px', left: '100px'},
    {left: '-300px', transform: 'scale(0.3)'},
  ], 700);
  scissorsCircle.animate([
    {top: '360px', left: '30px'},
    {top: '140px', left: '-500px'},
  ], 700);

  // When the animation ended, rock-screen shifts...
  // setTimeout(() => {
  //   scissorsScreenContainer.style.display = 'none';
  // }, 1000)
};