import { screensWrapper, userName, userNotFound , userNotFoundText} from "../../../variables.js";
import { getUserLoggedData } from "../../localStorage/getUserLoggedData.js";
import { userLoggedContent } from "./userLoggedContent.js";
import { userLoggedListeners } from "./userLoggedListeners.js";
import { userLoggedAnimation } from "./userLoggedAnimation.js";

export const userLoggedRender = () => {
  userLoggedAnimation();
  userLoggedListeners();

  userNotFound.innerHTML = '';
  if (getUserLoggedData(userName)) {
    userLoggedContent();
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
}