import { scissorsListeners } from "./scissorsListeners.js";
import { scissorsContent } from "./scissorsContent.js";
import { currentIcon } from "../../../variables.js";
export const scissorsRender = () => {
  scissorsContent();
  scissorsListeners();
}