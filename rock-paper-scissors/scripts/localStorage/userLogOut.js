import { logged, userName } from "../../variables.js";

export const userLogOut = () => {
  const getUsers = JSON.parse(localStorage.getItem('users'));
  let userLogged = getUsers.map(user => {
    if (user.login.toLowerCase() === userName.toLowerCase()) {
      return {...user, logged: logged}
    };
    return;
  });
  localStorage.setItem('users', JSON.stringify(userLogged));
};