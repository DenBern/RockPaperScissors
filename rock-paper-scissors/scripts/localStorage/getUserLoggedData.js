export const getUserLoggedData = (userName) => {
  const findUser = JSON.parse(localStorage.getItem('users'));
  let userFind = findUser.find(user => user.login.toLowerCase() === userName.toLowerCase());
  return userFind;
};

