import { startGameRender } from "../screens/startGame/startGameRender.js";
import {
  playerItemContainer,
  computerItemContainer,
  itemPlayerIcon,
  itemComputerIcon,
  startGameWrapper,
  setPlayerWin,
  setPlayerLose,
  playerLose,
  maxWins,
  playerWin,
  currentProgressComputer,
  currentProgressPlayer,
  buttonsHomeRestart,
  btnHome,
  btnRestart,
  resetWinsLose,
  incWin,
  incLose,
  incDraw,
  win,
} from "../../variables.js";

export const winnerSelectionContent = (winner, player, computer) => {
  playerItemContainer.classList.add('player-item-container');
  computerItemContainer.classList.add('computer-item-container');
  itemPlayerIcon.src = `./assets/svg/hands/player/player-${player.toLowerCase()}-hand.svg`;
  playerItemContainer.append(itemPlayerIcon);
  itemComputerIcon.src = `./assets/svg/hands/computer/computer-${computer.toLowerCase()}-hand.svg`;
  computerItemContainer.append(itemComputerIcon);

  const bloodItemContainer = document.createElement('div');
  bloodItemContainer.classList.add('blood-item-container');
  const bloodIcon = document.createElement('img');
  bloodIcon.src = './assets/svg/mainMenu/blood.svg';
  bloodIcon.classList.add('blood-icon');
  bloodItemContainer.append(bloodIcon);

  switch (winner) {
    case 'Player':
      setPlayerWin();
      incWin();
      playerItemContainer.style.bottom = '-100px';
      computerItemContainer.style.bottom = '290px';
      playerItemContainer.style.zIndex = '4';
      computerItemContainer.style.zIndex = '2';
      break;
    case 'Computer':
      setPlayerLose();
      incLose();
      playerItemContainer.style.bottom = '-100px';
      computerItemContainer.style.bottom = '290px';
      playerItemContainer.style.zIndex = '2';
      computerItemContainer.style.zIndex = '4';
      break;
    case 'Draw':
      incDraw();
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
      bloodItemContainer.innerHTML = ''
      break;
  };

  startGameWrapper.append(playerItemContainer, computerItemContainer, bloodItemContainer);

  const winnerPopUp = document.createElement('div');
  winnerPopUp.classList.add('winner-pop-up');

  const titleWinner = document.createElement('p');
  titleWinner.classList.add('title-winner');
  titleWinner.textContent = `${winner === 'Player' ? 'You won!' : winner === 'Draw' ? 'Draw' : 'You lose!'}`;

  winnerPopUp.append(titleWinner);

  const endGamePopUpWrapper = document.createElement('div');
  endGamePopUpWrapper.classList.add('end-game-pop-up-wrapper');

  const endGamePopUpContainer = document.createElement('div');
  endGamePopUpContainer.classList.add('end-game-pop-up-container');

  const winnerLogo = document.createElement('div');
  winnerLogo.classList.add('winner-logo');

  const currentAccountWrapper = document.createElement('div');
  currentAccountWrapper.classList.add('current-account-wrapper');

  const winnerTitle = document.createElement('p');
  winnerTitle.classList.add('winner-title');
  winnerTitle.textContent = `${winner === 'Player' ? 'You win!' :  'Computer win!'}`;
  const currentAccount = document.createElement('p');
  currentAccount.classList.add('current-account');
  currentAccount.textContent = `${playerWin +  ' : ' + playerLose}`

  currentAccountWrapper.append(winnerTitle, currentAccount)

  buttonsHomeRestart.append(btnHome, btnRestart)


  endGamePopUpContainer.append(winnerLogo, currentAccountWrapper, buttonsHomeRestart)


  endGamePopUpWrapper.append(endGamePopUpContainer);


  let popUpWinnerVisible = setTimeout(() => {
    startGameWrapper.append(winnerPopUp);
    startGameWrapper.style.alignItems = 'center';
    startGameWrapper.style.justifyContent = 'center';
    currentProgressComputer.style.width = `${(100 / maxWins) * playerLose}%`;
    currentProgressPlayer.style.width = `${(100 / maxWins) * playerWin}%`;
    let displayNone = setTimeout(() => {
      winnerPopUp.style.display = 'none';
      if (playerLose < maxWins && playerWin < maxWins) {
        startGameRender();
      } else {
        startGameWrapper.append(endGamePopUpWrapper);
        resetWinsLose();
      };
      clearTimeout(displayNone)
    }, 1500);

    clearTimeout(popUpWinnerVisible);
  }, 1000);
};