import { screenWelcome } from "../../../variables.js";
import { screenGreeting } from "../screenGreeting.js";

export const welcomeListeners = () => {
  screenWelcome.addEventListener('animationend', () => {
    screenWelcome.style.display = "none";
    screenGreeting();
  });
};