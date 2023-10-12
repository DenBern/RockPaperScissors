import { screensWrapper, userName} from "../../../variables.js";
import { getUserLoggedData } from "../../localStorage/getUserLoggedData.js";
import { mainMenuContent } from "./mainMenuContent.js";
import { mainMenuListeners } from "./mainMenuListeners.js";
import { mainMenuAnimation } from "./mainMenuAnimation.js";
import { userNotFound, userNotFoundText } from "./mainMenuVariables.js";

export const mainMenuRender = () => {
  mainMenuAnimation();
  mainMenuListeners();

  userNotFound.innerHTML = '';

  if (getUserLoggedData(userName)) {
    mainMenuContent();
  } else {
    userNotFoundText.textContent = `User '${userName}' not found`;
    userNotFound.append(userNotFoundText);
    screensWrapper.append(userNotFound);
    setTimeout(() => {
      userNotFound.innerHTML = '';
      userNotFoundText.innerHTML = '';
      userNotFound.style.opacity = 0;
    }, 2000);
  };
};