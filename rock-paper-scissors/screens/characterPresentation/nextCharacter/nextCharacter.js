import { btnNext, btnPrev, currentIcon, incrementCount, rockScreenContainer,paperScreenContainer } from "../../../variables.js"
import { scissorsAnimation } from "../scissors/scissorsAnimation.js";
import { rockAnimation } from "../rock/rockAnimation.js";
import { paperAnimation } from "../paper/paperAnimation.js";

export const nextCharacter = () => {
  btnNext.addEventListener('click', () => {
    incrementCount();
    if (currentIcon === 2) {
      scissorsAnimation();
      rockAnimation(currentIcon);
      btnNext.style.right = '45px';
      btnPrev.style.bottom = '15px';
      btnPrev.style.right = '200px';
    };

    if (currentIcon === 3) {
      rockAnimation (currentIcon);
      paperAnimation();
    };
  });
}