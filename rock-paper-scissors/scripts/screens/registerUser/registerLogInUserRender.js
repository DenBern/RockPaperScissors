import { registerLogInUserContent } from "./registerLogInUserContent.js";
import { registerLogInUserListeners } from "./registerLogInUserListeners.js";

export const registerLogInUserRender = () => {
  registerLogInUserContent();
  registerLogInUserListeners();
}