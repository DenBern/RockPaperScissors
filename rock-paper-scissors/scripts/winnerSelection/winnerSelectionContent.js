import { startGameRender } from "../screens/startGame/startGameRender.js";
import { playerItemContainer, computerItemContainer, itemPlayerIcon, itemComputerIcon, startGameWrapper } from "../../variables.js";

export const winnerSelectionContent = (winner, player, computer) => {
  console.log(winner, player, computer);

  playerItemContainer.classList.add('player-item-container');
  computerItemContainer.classList.add('computer-item-container');

  playerItemContainer.innerHTML = '';
  computerItemContainer.innerHTML = ''

  itemPlayerIcon.src = `../../assets/svg/hands/player/player-${player}-hand.svg`;
  playerItemContainer.append(itemPlayerIcon);

  itemComputerIcon.src = `../../assets/svg/hands/computer/computer-${computer}-hand.svg`;

  const bloodItemContainer = document.createElement('div');
  bloodItemContainer.classList.add('blood-item-container');
  const bloodIcon = document.createElement('img');
  bloodIcon.src = '../../assets/svg/mainmenu/blood.svg';
  bloodIcon.classList.add('blood-icon');
  bloodItemContainer.append(bloodIcon);

  switch (winner) {
    case 'player':
      playerItemContainer.style.zIndex = '4';
      computerItemContainer.style.zIndex = '2';
      break;
    case 'computer':
      playerItemContainer.style.zIndex = '2';
      computerItemContainer.style.zIndex = '4';
      break;
    case 'drow':
      playerItemContainer.style.bottom = '-220px';
      computerItemContainer.style.bottom = '380px';
      playerItemContainer.animate([
        {bottom: '-500px'},
        {bottom: '-220px'}
      ], 700);
      computerItemContainer.animate([
        {bottom: '660px'},
        {bottom: '380px'}
      ], 700);
      // playerItemContainer.style.bottom = '-220px';
      // computerItemContainer.style.bottom = '380px';
      bloodItemContainer.style.display = 'none';
      break;
  };

  computerItemContainer.append(itemComputerIcon)
  startGameWrapper.append(playerItemContainer, computerItemContainer, bloodItemContainer);

  startGameWrapper.style.alignItems = '';
  startGameWrapper.style.justifyContent = '';

  const winnerPopUp = document.createElement('div');
  winnerPopUp.classList.add('winner-pop-up');

  const titleWinner = document.createElement('p');
  titleWinner.classList.add('title-winner');
  titleWinner.textContent = `${winner === 'player' ? 'You won!' : 'You lose!'}`;

  const logoPlayer = document.createElement('img');
  logoPlayer.src = '../../assets/svg/winner/logoPlayer.svg';
  winnerPopUp.append(titleWinner, logoPlayer);

  let popUpWinnerVisible = setTimeout(() => {
    startGameWrapper.append(winnerPopUp);
    startGameWrapper.style.alignItems = 'center';
    startGameWrapper.style.justifyContent = 'center';
    setTimeout(() => {
      winnerPopUp.style.display = 'none';
      startGameRender();
    }, 1500);
    clearTimeout(popUpWinnerVisible);
  }, 1000);
};