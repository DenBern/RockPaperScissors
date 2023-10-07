import { winnerSelectionContent } from "../winnerSelection/winnerSelectionContent.js";
export const winnerSelectionRender = (gameEnd) => {
  const { winner, player, computer } = gameEnd;
  winnerSelectionContent(winner, player, computer);
};