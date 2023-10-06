import { btnWelcome, screenWelcome } from "../../../variables.js";
import { screenGreeting } from "../screenGreeting.js";
import { welcomeAnimation } from "./welcomeAnimation.js";

export const welcomeListeners = () => {
  btnWelcome.addEventListener('animationend', () => {
    welcomeAnimation();
    screenWelcome.style.display = "none";
    screenGreeting();
  });
};