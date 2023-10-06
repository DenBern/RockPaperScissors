import { changeActionButtons, disabledActionBtns, getRandomItem, whoIsWinner } from "../../helpers/helpers.js";
import { paperButton, rockButton, scissorsButton, randomButton } from "../../../variables.js"
import { computerSelected } from "../../computerSelected/computerSelected.js";
import { playerSelectedRender } from "../../playerSelected/playerSelectedRender.js";
import { playerSelected } from "../../playerSelected/playerSelected.js";

export const startGameListeners = () => {
  rockButton.addEventListener('click', () => {
    changeActionButtons(rockButton);
    disabledActionBtns();
    playerSelectedRender();
    whoIsWinner(playerSelected(rockButton), computerSelected());
  });

  paperButton.addEventListener('click', () => {
    changeActionButtons(paperButton);
    disabledActionBtns();
    playerSelectedRender(paperButton);
    whoIsWinner(playerSelected(paperButton), computerSelected());
  });

  scissorsButton.addEventListener('click', () => {
    changeActionButtons(scissorsButton);
    disabledActionBtns();
    playerSelectedRender(scissorsButton);
    whoIsWinner(playerSelected(scissorsButton), computerSelected());
  });

  randomButton.addEventListener('click', () => {
    changeActionButtons(randomButton);
    disabledActionBtns();
    playerSelectedRender(randomButton);
    whoIsWinner(getRandomItem(), computerSelected())
  });
}