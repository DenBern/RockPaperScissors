import { setLogged } from "../../variables.js";

export let userFind = {};

export const getUserLoggedData = (userName) => {
  const findUser = JSON.parse(localStorage.getItem('users')) || [];
  userFind = findUser.find(user => user.login.toLowerCase() === userName.toLowerCase());
  if (Boolean(userFind)) {
    setLogged(true);
    return userFind;
  };
};

