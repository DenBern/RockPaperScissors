import { registerUseRender } from "../../screens/registerUser/registerUserRender.js";
import { userLoggedRender } from "../../screens/userLogged/userLoggedRender.js";
export const checkLogIn = () => {
  const getRegisteredUsers = localStorage.getItem('users');
  getRegisteredUsers ? userLoggedRender() : registerUseRender();
}