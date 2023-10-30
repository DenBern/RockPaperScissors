import { playerSelectedAnimation } from "./playerSelectedAnimation.js";
import { leaveGame } from "../screens/startGame/startGameVariables.js";

export const playerSelectedRender = () => {
  playerSelectedAnimation();
  leaveGame.setAttribute('disabled',  '');
};