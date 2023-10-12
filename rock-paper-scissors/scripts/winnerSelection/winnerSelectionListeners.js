import { btnHome, btnRestart, setWin, setLose, setDraw, setClickRock, setClickPaper, setClickScissors,setClickRandom} from "../../variables.js"
import { startGameRender } from "../screens/startGame/startGameRender.js"
import { userLoggedRender } from "../screens/userLogged/userLoggedRender.js";
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
    userLoggedRender();
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