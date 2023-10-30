import { btnTap, greetingScreen } from "./greetingVariables.js";
import { registerLogInUserRender } from "../registerUser/registerLogInUserRender.js";
import { characterPresent } from "../characterPresentation/characterPresent.js";
import { allUsers } from "../../localStorage/getUsers.js";

export const greetingListeners = () => {
  const handleClickBtn = () => {
    greetingScreen.style.zIndex = 1;
    greetingScreen.style.opacity = 0;
    setTimeout(() => {
      greetingScreen.style.display = "none";
      !allUsers.length ? characterPresent() : registerLogInUserRender();
    }, 500);
    btnTap.removeEventListener('click', handleClickBtn);
  };
  btnTap.addEventListener('click', handleClickBtn);
};