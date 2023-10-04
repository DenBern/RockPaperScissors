import { btnPrev, btnNext, currentIcon, decrementCount, scissorsScreenContainer, rockScreenContainer, incrementCount } from "../../../variables.js";
import { rock, rockCircle } from "../../../variables.js";
import { scissorsAnimationBack } from "../scissors/scissorsAnimationBack.js";
import { rockAnimation } from "./rockAnimation.js";
import { rockAnimationBack } from "./rockAnimationBack.js";

export const rockListeners = () => {
  rock.addEventListener('animationend', () => {
    rock.style.top = '40px';
    rock.style.left = '100px';
  });

  rockCircle.addEventListener('animationend', () => {
    rockCircle.style.left = '30px';
    rockCircle.style.top = '360px';
  });
}