import { setLogged } from "../../variables.js";

export let userFind = {};

export const getUserLoggedData = (userName) => {
  const findUser = JSON.parse(localStorage.getItem('users')) || [];
  if (findUser.length) {
    userFind = findUser.find(user => user.login.toLowerCase() === userName.toLowerCase());
    setLogged(true);
    return userFind;
  };
};

