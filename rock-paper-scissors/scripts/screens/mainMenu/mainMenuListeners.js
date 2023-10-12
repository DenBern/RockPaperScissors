import { logOut, menuGameContainer, startGameContainer } from "./mainMenuVariables.js";
import { setLogged } from "../../../variables.js"

import { playerScoreRender } from "./playerScore/playerScoreRender.js";
import { mainMenuAnimationStart } from "./mainMenuAnimationStart.js";
import { screensWrapper } from "../../../variables.js";
import { startGameRender } from "../startGame/startGameRender.js";
import { userLogOut } from "../../localStorage/userLogOut.js";
import { greetingRender } from "../greeting/greetingRender.js";
import { greetingScreen } from "../greeting/greetingVariables.js";

export const mainMenuListeners = () => {
  startGameContainer.addEventListener('click', () => {
    mainMenuAnimationStart();
    setTimeout(() => {
      screensWrapper.innerHTML = '';
      startGameRender();
    }, 750);
  });

  const handlerLogOut = () => {
    setLogged(false);
    mainMenuAnimationStart();
    userLogOut();
    setTimeout(() => {
      screensWrapper.innerHTML = '';
      greetingRender();
    }, 750);
    removeHandlerLogOut();
  };

  menuGameContainer.addEventListener('click', playerScoreRender);
  logOut.addEventListener('click', handlerLogOut);

  function removeHandlerLogOut  ()  {
    logOut.removeEventListener('click', handlerLogOut);
  };
};