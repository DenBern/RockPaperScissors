import { greetingListeners } from "./greetingListeners.js";
import { greetingContent } from "./greetingContent.js";
import { getUsers } from "../../localStorage/getUsers.js";

export const greetingRender = () => {
  getUsers();
  greetingContent();
  greetingListeners();
};