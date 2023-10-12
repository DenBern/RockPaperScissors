import { logOut, lose, menuGameContainer, setClickPaper, setClickRandom, setClickRock, setClickScissors, setWin, setDraw, setLogged, setLose, startGameContainer, win } from "../../../variables.js";
import { screenGreeting } from "../screenGreeting.js";
import { playerScoreRender } from "./playerScore/playerScoreRender.js";
import { userLoggedAnimationStart } from "./userLoggedAnimationStart.js";
import { screensWrapper } from "../../../variables.js";
import { startGameRender } from "../startGame/startGameRender.js";
import { userLogOut } from "../../localStorage/userLogOut.js";

export const userLoggedListeners = () => {
  startGameContainer.addEventListener('click', () => {
    userLoggedAnimationStart();
    setTimeout(() => {
      screensWrapper.innerHTML = '';
      startGameRender();
    }, 750);
  });

  const handlerLogOut = () => {
    setLogged(false);
    userLoggedAnimationStart();
    userLogOut();
    setTimeout(() => {
      screensWrapper.innerHTML = '';
      screenGreeting();
    }, 750);
    removeHandlerLogOut();
  };

  menuGameContainer.addEventListener('click', playerScoreRender);
  logOut.addEventListener('click', handlerLogOut);

  function removeHandlerLogOut  ()  {
    logOut.removeEventListener('click', handlerLogOut)
  };
};