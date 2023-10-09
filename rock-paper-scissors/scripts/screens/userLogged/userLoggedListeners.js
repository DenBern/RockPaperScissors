import { startGameContainer } from "../../../variables.js";
import { userLoggedAnimationStart } from "./userLoggedAnimationStart.js";

export const userLoggedListeners = () => {
  startGameContainer.addEventListener('click', userLoggedAnimationStart);
};