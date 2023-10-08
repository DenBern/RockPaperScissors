import { screensWrapper, userName, userNotFound , userNotFoundText} from "../../../variables.js";
import { getUserLoggedData } from "../../localStorage/getUserLoggedData.js";
import { userLoggedContent } from "./userLoggedContent.js"
import { userLoggedListeners } from "./userLoggedListeners.js";

export const userLoggedRender = () => {
  userNotFound.style.opacity = 1;
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
      console.log('1')
    }, 2000);
  }

  userLoggedListeners();
}