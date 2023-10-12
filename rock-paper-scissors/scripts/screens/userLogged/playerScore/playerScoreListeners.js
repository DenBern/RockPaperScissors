import { menuGameContainer, closeScore } from "../../../../variables.js";
import { playerScoreAnimate } from "./playerScoreAnimate.js";
import { playerScoreAnimationBack } from "./playerScoreAnimationBack.js";

export const playerScoreListeners = () => {
  const handlerClickPlayerScore = () => {
    console.log('open score')
    playerScoreAnimate();
    removeScoreOpen();
  };

  const handleClickScoreClose = () => {
    playerScoreAnimationBack();
    removeScoreClose();
  };

  closeScore.addEventListener('click', handleClickScoreClose)

  function removeScoreOpen() {
    menuGameContainer.removeEventListener('click', handlerClickPlayerScore);
  };

  function removeScoreClose () {
    closeScore.removeEventListener('click', handleClickScoreClose);
  };

};