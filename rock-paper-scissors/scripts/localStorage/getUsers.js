import { inputName, setUserName, userName } from "../../variables.js";

export let allUsers = [];
export const getUsers = () => {
  allUsers = JSON.parse(localStorage.getItem('users')) || [];
  allUsers.forEach(user => {
    if(user.login) setUserName(user.login);
  });
  inputName.value = userName;
};