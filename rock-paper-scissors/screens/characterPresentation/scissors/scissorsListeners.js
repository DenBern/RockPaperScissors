import { btnNext, scissors, scissorsCircle } from "../../../variables.js";
import { scissorsAnimation } from "./scissorsAnimation.js";
export const scissorsListeners = () => {
  scissors.addEventListener('animationend', () => {
    scissors.style.left = '100px';
  });

  scissorsCircle.addEventListener('animationend', () => {
    scissors.style.left = '100px';
  });

  btnNext.addEventListener('click', scissorsAnimation)
}