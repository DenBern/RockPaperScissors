import { btnWelcome, screenWelcome } from "../../variables.js";
export const welcomeAnimation = () => {
  btnWelcome.animate([
    {opacity: '1', transform: 'scale(1.2)'},
    {opacity: '0', transform: 'scale(1)'},
  ], 1500);
}