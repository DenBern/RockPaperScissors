import { decrementCount, btnPrev, currentIcon} from "../../../variables.js";
import { rockAnimationBack } from "../rock/rockAnimationBack.js";
import { scissorsAnimationBack } from "../scissors/scissorsAnimationBack.js";
import { paperAnimationBack } from "../paper/paperAnimationBack.js";
import { changeBtnPresent } from "../../../scripts/helpers/helpers.js";
import { changeIcons } from "../../../scripts/helpers/helpers.js";

export const prevCharacter = () => {
  btnPrev.addEventListener('click', () => {
    decrementCount();
    if (currentIcon === 1) {
      scissorsAnimationBack();
      btnPrev.style.bottom = '-75px';
      rockAnimationBack(currentIcon);
    };

    if (currentIcon === 2) {
      paperAnimationBack();
      rockAnimationBack(currentIcon);
      changeBtnPresent(currentIcon);
    };

    changeIcons(currentIcon);
  });
};