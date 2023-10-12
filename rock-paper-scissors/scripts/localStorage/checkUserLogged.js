import { allUsers } from "./getUsers.js";

export let userLogged = {};
export const checkUserLogged = () => userLogged = allUsers.find(user => user.logged);
  // if (userLogged) {
  //   console.log(allUsers)
  //   greetingRender()
  // } else {
  //   console.log(allUsers)
  //   userLoggedRender();
  // };
