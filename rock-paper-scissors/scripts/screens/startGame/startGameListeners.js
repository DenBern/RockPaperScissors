import { changeActionButtons, disabledActionBtns, getRandomItem, whoIsWinner } from "../../helpers/helpers.js";
import { incClicRock, incClickPaper, incClickScissors, incClickRandom } from "../../../variables.js"
import { rockButton, paperButton, scissorsButton, randomButton } from "./startGameVariables.js";
import { computerSelected } from "../../computerSelected/computerSelected.js";
import { playerSelectedRender } from "../../playerSelected/playerSelectedRender.js";
import { playerSelected } from "../../playerSelected/playerSelected.js";

export const startGameListeners = () => {
  const selectItem = (btn) => {
    changeActionButtons(btn);
    disabledActionBtns();
    playerSelectedRender();
    btn.textContent === 'Random' ? whoIsWinner(getRandomItem(), computerSelected()) : whoIsWinner(playerSelected(btn), computerSelected());
    // removeEventListeners();
  };

  const rockButtonClickHandler = () => {
    selectItem(rockButton);
    incClicRock();
  };

  const paperButtonClickHandler = () => {
    selectItem(paperButton);
    incClickPaper();
  };

  const scissorsButtonClickHandler = () => {
    selectItem(scissorsButton);
    incClickScissors();
  };

  const randomButtonClickHandler = () => {
    selectItem(randomButton);
    incClickRandom();
  };

  rockButton.removeEventListener('click', rockButtonClickHandler);
  paperButton.removeEventListener('click', paperButtonClickHandler);
  scissorsButton.removeEventListener('click', scissorsButtonClickHandler);
  randomButton.removeEventListener('click', randomButtonClickHandler);

  rockButton.addEventListener('click', rockButtonClickHandler)
  paperButton.addEventListener('click', paperButtonClickHandler)
  scissorsButton.addEventListener('click', scissorsButtonClickHandler)
  randomButton.addEventListener('click', randomButtonClickHandler)

  // function removeEventListeners() {
  //   console.log('remove listeners')
  //   rockButton.removeEventListener('click', rockButtonClickHandler);
  //   paperButton.removeEventListener('click', paperButtonClickHandler);
  //   scissorsButton.removeEventListener('click', scissorsButtonClickHandler);
  //   randomButton.removeEventListener('click', randomButtonClickHandler);
  // };
};