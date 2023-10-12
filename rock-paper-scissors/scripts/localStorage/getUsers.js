
export let allUsers = [];
export const getUsers = () => {
  allUsers = JSON.parse(localStorage.getItem('users')) || [];
};