import { setWin, setLose, setDraw, setClickRock, setClickPaper, setClickScissors,setClickRandom} from "../../../variables.js"
import { btnHome, btnRestart } from "./winnerSelectionVariables.js";
import { startGameRender } from "../startGame/startGameRender.js"
import { mainMenuRender } from "../mainMenu/mainMenuRender.js";
export const winnerSelectionListeners = () => {
  const clearCounter = () => {
    setWin(0);
    setLose(0);
    setDraw(0);
    setClickRock(0);
    setClickPaper(0);
    setClickScissors(0);
    setClickRandom(0);
    removeListeners();
  };

  const backToMain = () => {
    mainMenuRender();
    removeListeners();
    clearCounter();
  };

  const restartGame = () => {
    clearCounter();
    startGameRender();
  }

  btnHome.addEventListener('click', backToMain);
  btnRestart.addEventListener('click', restartGame);

  function removeListeners () {
    btnHome.removeEventListener('click', backToMain);
    btnRestart.removeEventListener('click', restartGame);
  };
}