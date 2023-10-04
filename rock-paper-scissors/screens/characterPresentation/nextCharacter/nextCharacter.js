import { btnNext, btnPrev, currentIcon, incrementCount, rockScreenContainer,paperScreenContainer } from "../../../variables.js"
import { rockRender } from "../rock/rockRender.js";
import { scissorsAnimation } from "../scissors/scissorsAnimation.js";
import { paperRender } from "../paper/paperRender.js";
import { rockAnimation } from "../rock/rockAnimation.js";

export const nextCharacter = () => {
  btnNext.addEventListener('click', () => {
    incrementCount(currentIcon);
    console.log(currentIcon)
    if (currentIcon === 2) {
      scissorsAnimation();
      rockRender();
      rockScreenContainer.style.transform = 'translateX(-215px)';
      btnNext.style.right = '45px';
      btnPrev.style.bottom = '15px';
      btnPrev.style.right = '200px';
      btnPrev.classList.add('btn-prev');
    }

    if (currentIcon === 3) {
      rockAnimation ();
      paperRender();
      paperScreenContainer.style.transform = 'translateX(-290px)';
    }
  });
}