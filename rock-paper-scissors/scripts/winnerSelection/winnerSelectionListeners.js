import { btnHome, btnRestart } from "../../variables.js"
import { startGameRender } from "../screens/startGame/startGameRender.js"
import { userLoggedRender } from "../screens/userLogged/userLoggedRender.js";
export const winnerSelectionListeners = () => {
  const backToMain = () => {
    userLoggedRender();
    removeListeners();
  };

  const restartGame = () => {
    startGameRender();
    removeListeners();
  };

  btnHome.addEventListener('click', backToMain);
  btnRestart.addEventListener('click', restartGame);

  function removeListeners () {
    btnHome.removeEventListener('click', backToMain);
    btnRestart.removeEventListener('click', restartGame);
  };
}