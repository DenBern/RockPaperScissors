import { rock, rockCircle } from "../../../../variables.js";

export const rockListeners = () => {
  rock.addEventListener('animationend', () => {
    rock.style.top = '40px';
    rock.style.left = '100px';
  });

  rockCircle.addEventListener('animationend', () => {
    rockCircle.style.left = '30px';
    rockCircle.style.top = '360px';
  });
};