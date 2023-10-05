import { getUserLoggedData } from "../../scripts/localStorage/getUserLoggedData.js"
import { userLoggedContent } from "./userLoggedContent.js"
import { userLoggedListeners } from "./userLoggedListeners.js";

export const userLoggedRender = () => {
  userLoggedContent();
  userLoggedListeners();
}