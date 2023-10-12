import { screenWelcome } from "./welcomeVariables.js";
import { allUsers, getUsers } from "../../localStorage/getUsers.js";
import { greetingRender } from "../greeting/greetingRender.js";

export const welcomeListeners = () => {
  screenWelcome.addEventListener('animationend', () => {
    screenWelcome.style.display = "none";
    getUsers();
    greetingRender();
    console.log(allUsers)
  });
};