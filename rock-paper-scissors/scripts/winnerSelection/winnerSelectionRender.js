import { winnerSelectionContent } from "../winnerSelection/winnerSelectionContent.js";
export const winnerSelectionRender = (gameEnd) => {
  const { winner, player, computer } = gameEnd;
  winnerSelectionContent(winner, player, computer);

  const userItemContainer = document.createElement('div');
  userItemContainer.classList.add('user-item-container');
  const itemPlayerIcon = document.createElement('img');
  itemPlayerIcon.src = `../../assets/svg/hands/player/player-${player}-hand.svg`;
  userItemContainer.append(itemPlayerIcon);

  const computerItemContainer = document.createElement('div');
  computerItemContainer.classList.add('computer-item-container');
  const itemComputerIcon = document.createElement('img');
  itemComputerIcon.src = `../../assets/svg/hands/computer/computer-${computer}-hand.svg`;
  computerItemContainer.append(itemComputerIcon)


  
  
  const startGameContainer = document.querySelector('.start-game');
  startGameContainer.append(userItemContainer, computerItemContainer)
};