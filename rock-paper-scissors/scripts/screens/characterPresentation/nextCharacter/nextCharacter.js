import { btnNext, btnPrev, currentIcon, incrementCount} from "../../../../variables.js"
import { scissorsAnimation } from "../scissors/scissorsAnimation.js";
import { rockAnimation } from "../rock/rockAnimation.js";
import { paperAnimation } from "../paper/paperAnimation.js";
import { changeBtnPresent, changeIcons } from "../../../../scripts/helpers/helpers.js";
import { registerLogInUserRender } from "../../registerUser/registerLogInUserRender.js";

export const nextCharacter = () => {
  btnNext.addEventListener('click', () => {
    incrementCount();
    if (currentIcon < 4) {
      changeIcons(currentIcon);
    };

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
      changeBtnPresent(currentIcon);
    };

    if (currentIcon === 4) {
      registerLogInUserRender();
    };
  });
}