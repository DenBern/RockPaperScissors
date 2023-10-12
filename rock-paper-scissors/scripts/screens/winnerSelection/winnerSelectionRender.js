import { maxWins, playerLose, playerWin } from "../../../variables.js";
import { winnerSelectionContent } from "../winnerSelection/winnerSelectionContent.js";
import { winnerSelectionListeners } from "./winnerSelectionListeners.js";
import { saveGame } from "../../localStorage/saveGame.js";

export const winnerSelectionRender = (winner, player, computer) => {
  winnerSelectionContent(winner, player, computer);
  if (maxWins === playerWin || maxWins === playerLose) {
    winnerSelectionListeners();
    saveGame();
  };
}