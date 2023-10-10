import { menuGameContainer, startGameContainer } from "../../../variables.js";
import { playerScoreRender } from "./playerScore/playerScoreRender.js";
import { userLoggedAnimationStart } from "./userLoggedAnimationStart.js";

export const userLoggedListeners = () => {
  startGameContainer.addEventListener('click', userLoggedAnimationStart);
  menuGameContainer.addEventListener('click', playerScoreRender);
};