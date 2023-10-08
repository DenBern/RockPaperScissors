import { changeActionButtons, disabledActionBtns, getRandomItem, whoIsWinner } from "../../helpers/helpers.js";
import { paperButton, rockButton, scissorsButton, randomButton } from "../../../variables.js"
import { computerSelected } from "../../computerSelected/computerSelected.js";
import { playerSelectedRender } from "../../playerSelected/playerSelectedRender.js";
import { playerSelected } from "../../playerSelected/playerSelected.js";

export const startGameListeners = () => {
  const selectItem = (btn) => {
    changeActionButtons(btn);
    disabledActionBtns();
    playerSelectedRender();
    btn.textContent === 'Random' ? whoIsWinner(getRandomItem(), computerSelected()) : whoIsWinner(playerSelected(btn), computerSelected());
    removeEventListeners();
  };

  const rockButtonClickHandler = () => selectItem(rockButton);
  const paperButtonClickHandler = () => selectItem(paperButton);
  const scissorsButtonClickHandler = () => selectItem(scissorsButton);
  const randomButtonClickHandler = () => selectItem(randomButton);

  rockButton.addEventListener('click', rockButtonClickHandler)
  paperButton.addEventListener('click', paperButtonClickHandler)
  scissorsButton.addEventListener('click', scissorsButtonClickHandler)
  randomButton.addEventListener('click', randomButtonClickHandler)

  function removeEventListeners() {
    rockButton.removeEventListener('click', rockButtonClickHandler);
    paperButton.removeEventListener('click', paperButtonClickHandler);
    scissorsButton.removeEventListener('click', scissorsButtonClickHandler);
    randomButton.removeEventListener('click', randomButtonClickHandler);
  };
}