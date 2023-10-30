import { logged, userName } from "../../variables.js";
import { allUsers } from "./getUsers.js";

export const userLogIn = () => {
  const updateLogged = allUsers.map(user => {
    if (user.login === userName) {
      return { ...user, logged: logged}
    };
    return user;
  });
  localStorage.setItem('users', JSON.stringify(updateLogged));
}