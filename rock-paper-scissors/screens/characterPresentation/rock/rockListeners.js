import { btnNext, titleRock } from "../../../variables.js";
import { rock, rockCircle } from "../../../variables.js";
import { rockAnimation } from "./rockAnimation.js";

export const rockListeners = () => {
  rock.addEventListener('animationend', () => {
    rock.style.top = '40px';
    rock.style.left = '100px';
  });

  rockCircle.addEventListener('animationend', () => {
    rockCircle.style.left = '30px';
    rockCircle.style.top = '360px';
  });

  btnNext.addEventListener('click', () => {
    rockAnimation();
  })

}