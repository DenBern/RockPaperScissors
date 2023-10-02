import { scissorsListeners } from "./scissorsListeners.js";
import { scissorsScreenContent } from "./scissorsScreenContent.js";
export const scissorsScreenRender = () => {
  scissorsScreenContent();
  scissorsListeners();
}