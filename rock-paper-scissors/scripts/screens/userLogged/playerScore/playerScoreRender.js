import { playerScoreWrapper } from "../../../../variables.js";
import { playerScoreAnimate } from "./playerScoreAnimate.js";
import { playerScoreContent } from "./playerScoreContent.js";
import { playerScoreListeners } from "./playerScoreListeners.js";

export const playerScoreRender = () => {
  playerScoreAnimate();
  playerScoreContent();
  playerScoreListeners();
}