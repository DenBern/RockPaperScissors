import { paperContent } from "./paperContent.js"
import { paperListeners } from "./paperListeners.js";
export const paperRender = () => {
  paperContent();
  paperListeners();
};