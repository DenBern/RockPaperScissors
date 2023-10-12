import { clearGame, counterStart } from "../../../variables.js";
import { disabledActionBtns } from "../../helpers/helpers.js";
import { startGameContent } from "./startGameContent.js";
import { startGameListeners } from "./startGameListeners.js";

let addListeners = false;

export const startGameRender = () => {
  startGameContent();
  const initialListeners = () => {
    if (addListeners) {
      return
    }
    startGameListeners();
    addListeners = true;
  };

  initialListeners();

  disabledActionBtns();
};