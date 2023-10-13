import { screenWelcome } from "./welcomeVariables.js";
import { greetingRender } from "../greeting/greetingRender.js";

export const welcomeListeners = () => {
  screenWelcome.addEventListener('animationend', () => {
    screenWelcome.style.display = "none";
    greetingRender();
  });
};