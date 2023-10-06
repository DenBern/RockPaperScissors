import { welcomeListeners } from "./welcomeListeners.js";
import { welcomeContent } from "./welcomeContent.js"
export const welcomeRender = () => {
  welcomeContent();
  welcomeListeners();
}
