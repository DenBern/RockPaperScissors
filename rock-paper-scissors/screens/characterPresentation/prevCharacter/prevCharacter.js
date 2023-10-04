import { decrementCount, btnPrev, currentIcon } from "../../../variables.js";
import { rockAnimationBack } from "../rock/rockAnimationBack.js";
import { scissorsAnimationBack } from "../scissors/scissorsAnimationBack.js";

export const prevCharacter = () => {
  btnPrev.addEventListener('click', () => {
    decrementCount();
    console.log(currentIcon)
    if (currentIcon === 1) {
      scissorsAnimationBack();
      btnPrev.style.bottom = '-70px';
      rockAnimationBack();
    }
  })
}