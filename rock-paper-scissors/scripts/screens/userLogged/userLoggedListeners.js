import { logOut, menuGameContainer, setLogged, startGameContainer } from "../../../variables.js";
import { playerScoreRender } from "./playerScore/playerScoreRender.js";
import { userLoggedAnimationStart } from "./userLoggedAnimationStart.js";
import { screensWrapper } from "../../../variables.js";
import { startGameRender } from "../startGame/startGameRender.js";
import { userLogOut } from "../../localStorage/userLogOut.js";
import { greetingRender } from "../greeting/greetingRender.js";

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
      greetingRender();
    }, 750);
    removeHandlerLogOut();
  };

  menuGameContainer.addEventListener('click', playerScoreRender);
  logOut.addEventListener('click', handlerLogOut);

  function removeHandlerLogOut  ()  {
    logOut.removeEventListener('click', handlerLogOut)
  };
};