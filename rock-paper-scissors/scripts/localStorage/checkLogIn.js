import { registerUseRender } from "../../scripts/screens/registerUser/registerUserRender.js";
import { userLoggedRender } from "../../scripts/screens/userLogged/userLoggedRender.js";
export const checkLogIn = () => {
  const getRegisteredUsers = localStorage.getItem('users');
  getRegisteredUsers ? userLoggedRender() : registerUseRender();
}