import { registerUserContent } from "./registerUserContent.js";
import { registerUserListeners } from "./registerUserListeners.js";

export const registerUseRender = () => {
  registerUserContent();
  registerUserListeners();
}