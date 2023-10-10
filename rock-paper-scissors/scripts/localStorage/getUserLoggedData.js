import {setWin, setLose, setDraw, setClickRock, setClickPaper, setClickScissors, setClickRandom } from "../../variables.js";

export let userFind = {};
export const getUserLoggedData = (userName) => {
  const findUser = JSON.parse(localStorage.getItem('users'));
  userFind = findUser.find(user => user.login.toLowerCase() === userName.toLowerCase());
  setWin(userFind.win);
  setLose(userFind.lose);
  setDraw(userFind.draw);
  setClickRock(userFind.clickRock);
  setClickPaper(userFind.clickPaper);
  setClickScissors(userFind.clickScissors);
  setClickRandom(userFind.clickRandom);
  return userFind;
};

