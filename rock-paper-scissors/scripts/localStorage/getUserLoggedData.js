export const getUserLoggedData = (userName) => {
  const findUser = JSON.parse(localStorage.getItem('users'));
  let userFind;
  return userFind = findUser.find(user => user.login === userName);
}

