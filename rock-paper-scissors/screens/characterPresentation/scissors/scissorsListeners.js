import { btnNext, rockScreenContainer, incrementCount, btnPrev, currentIcon, paperScreenContainer } from "../../../variables.js";
import { scissorsAnimation } from "./scissorsAnimation.js";
export const scissorsListeners = () => {
  // scissors.addEventListener('animationend', () => {
  //   scissors.style.left = '100px';
  // });

  // scissorsCircle.addEventListener('animationend', () => {
  //   scissorsCircle.style.left = '30px';
  // });

  btnNext.addEventListener('click', () => {
    incrementCount ();
    if (currentIcon === 2) {
      scissorsAnimation();
      rockScreenContainer.style.transform = 'translateX(-215px)';
      btnNext.style.right = '45px';
      btnPrev.style.bottom = '15px';
      btnPrev.style.right = '200px';
      btnPrev.classList.add('btn-prev');
    }

    if (currentIcon === 3) {
      rockScreenContainer.style.transform = 'translateX(-750px)';
      paperScreenContainer.style.transform = 'translateX(0)';
    }
  });
}