export const createNewUser = (login) => {
  let newUser = {
    logged: true,
    login: `${login}`,
    win: 0,
    lose: 0,
    draw: 0,
    clickRock: 0,
    clickPaper: 0,
    clickScissors: 0,
    clickRandom: 0,
    lastGames: [],
  };

  let getUsers = JSON.parse(localStorage.getItem('users')) ?? [];
  let users = [...getUsers, newUser];
  localStorage.setItem('users', JSON.stringify(users));
};