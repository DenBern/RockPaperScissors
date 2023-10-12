import { checkLogIn } from "../../localStorage/checkLogIn.js";
import { userLogged } from "../../localStorage/checkUserLogged.js";
import { userLoggedRender } from "../userLogged/userLoggedRender.js";
import { btnTap, greetingScreen } from "./greetingVariables.js";
import { registerLogInUserRender } from "../registerUser/registerLogInUserRender.js";

export const greetingListeners = () => {
  btnTap.addEventListener('click', () => {
    greetingScreen.style.zIndex = 1;
    greetingScreen.style.opacity = 0;
    setTimeout(() => {
      greetingScreen.style.display = "none";
      if (checkLogIn()) {
        if (Object.keys(userLogged).length) {
          userLoggedRender();
        } else {
          console.log('1')
          registerLogInUserRender();
        };
      } else {
        characterPresent();
      };
    }, 500);
  });
}