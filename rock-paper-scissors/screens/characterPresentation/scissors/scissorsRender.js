import { scissorsListeners } from "./scissorsListeners.js";
import { scissorsContent } from "./scissorsContent.js";
export const scissorsRender = () => {
  scissorsContent();
  scissorsListeners();
}