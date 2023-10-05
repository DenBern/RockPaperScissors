import { userLoggedRender } from "../../screens/userLogged/userLoggedRender.js";
export const createNewUser = (login) => {
  let newUser = {
    login: `${login}`,
    played: 0,
    win: 0,
    lose: 0,
  };

  let getUsers = JSON.parse(localStorage.getItem('users')) ?? [];
  let users = [...getUsers, newUser];
  localStorage.setItem('users', JSON.stringify(users));

  userLoggedRender();
}