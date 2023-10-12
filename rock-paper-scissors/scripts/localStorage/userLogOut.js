import { logged, userName } from "../../variables.js";

export const userLogOut = () => {
  const getUsers = JSON.parse(localStorage.getItem('users'));
  let userLogged = getUsers.map(user => {
    if (user.login === userName) {
      return {...user, logged: logged}
    };
    return;
  });
  localStorage.setItem('users', JSON.stringify(userLogged));
};