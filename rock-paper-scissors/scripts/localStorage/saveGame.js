import { win, lose, draw, clickRock, clickPaper, clickScissors, clickRandom } from "../../variables.js";
import { userFind } from "./getUserLoggedData.js";

export const saveGame = () => {
  userFind.win = win;
  userFind.lose = lose;
  userFind.draw = draw;
  userFind.clickRock = clickRock;
  userFind.clickPaper = clickPaper;
  userFind.clickScissors = clickScissors;
  userFind.clickRandom = clickRandom;

  localStorage.setItem('users', JSON.stringify([userFind]));
};