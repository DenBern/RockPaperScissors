import { winnerSelectionContent } from "../winnerSelection/winnerSelectionContent.js";
import { winnerSelectionListeners } from "./winnerSelectionListeners.js";
import { saveGame } from "../../localStorage/saveGame.js";
import {
  maxWins,
  playerLose,
  playerWin,
  lastGames,
  setLastGames,
  winsPlayer,
  winsComputer
} from "../../../variables.js";

export const winnerSelectionRender = (winner, player, computer) => {
  winnerSelectionContent(winner, player, computer);
  if (maxWins === playerWin || maxWins === playerLose) {
    winnerSelectionListeners();
    setLastGames();
    saveGame();
    winsPlayer.textContent = `${"You wins: " + playerWin + " / " + maxWins}`;
    winsComputer.textContent = `${"Computer wins: " + playerLose + " / " + maxWins}`;
  };
}