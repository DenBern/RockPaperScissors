import { startGameContent } from "./startGameContent.js";
import { startGameListeners } from "./startGameListeners.js";

export const startGameRender = () => {
  startGameContent();
  startGameListeners();
}