import { decrementCount, btnPrev, currentIcon, rockScreenContainer} from "../../../variables.js";
import { rockAnimationBack } from "../rock/rockAnimationBack.js";
import { scissorsAnimationBack } from "../scissors/scissorsAnimationBack.js";
import { paperAnimationBack } from "../paper/paperAnimationBack.js";

export const prevCharacter = () => {
  btnPrev.addEventListener('click', () => {
    decrementCount();
    console.log(currentIcon)
    if (currentIcon === 1) {
      scissorsAnimationBack();
      btnPrev.style.bottom = '-75px';
      rockAnimationBack(currentIcon);
    };

    if (currentIcon === 2) {
      paperAnimationBack();
      rockAnimationBack(currentIcon);
    };
  });
};