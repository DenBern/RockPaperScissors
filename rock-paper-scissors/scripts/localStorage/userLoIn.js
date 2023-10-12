import { logged, userName } from "../../variables.js";

export const userLogIn = () => {
  const getUsers = JSON.parse(localStorage.getItem('users'));

  const updateLogged = getUsers.map(user => {
    if (user.login === userName) {
      return { ...user, logged: logged}
    }
    return user;
  });

  localStorage.setItem('users', JSON.stringify(updateLogged))
}