import {
  win,
  lose,
  draw,
  clickRock,
  clickPaper,
  clickScissors,
  clickRandom,
  userName,
  lastGames,
} from "../../variables.js";

export const saveGame = () => {
  const getUsers = JSON.parse(localStorage.getItem('users'));
  const savePlayerGame = getUsers.map(user => {
    if (user.login === userName) {
      return {
        ...user,
        win: user.win + win,
        lose: user.lose + lose,
        draw: user.draw + draw,
        clickPaper: user.clickPaper + clickPaper,
        clickRock: user.clickRock + clickRock,
        clickScissors: user.clickScissors + clickScissors,
        clickRandom: user.clickRandom + clickRandom,
        lastGames,
      };
    };
    return;
  });
  localStorage.setItem('users', JSON.stringify(savePlayerGame));
};