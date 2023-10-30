import { btnHome, btnRestart } from "./winnerSelectionVariables.js";
import { startGameRender } from "../startGame/startGameRender.js"
import { mainMenuRender } from "../mainMenu/mainMenuRender.js";
import {
  setWin,
  setLose,
  setDraw,
  setClickRock,
  setClickPaper,
  setClickScissors,
  setClickRandom,
  resetWinsLose
} from "../../../variables.js"

const removeListeners = () => {
  btnHome.removeEventListener('click', backToMain);
  btnRestart.removeEventListener('click', restartGame);
};

export const clearCounter = () => {
  setWin(0);
  setLose(0);
  setDraw(0);
  setClickRock(0);
  setClickPaper(0);
  setClickScissors(0);
  setClickRandom(0);
  resetWinsLose();
  removeListeners();
};

export const backToMain = () => {
  removeListeners();
  clearCounter();
  mainMenuRender();
};

const restartGame = () => {
  clearCounter();
  startGameRender();
};

export const winnerSelectionListeners = () => {
  btnHome.addEventListener('click', backToMain);
  btnRestart.addEventListener('click', restartGame);
}