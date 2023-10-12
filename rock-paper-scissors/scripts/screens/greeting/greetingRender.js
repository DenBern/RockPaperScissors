import { greetingListeners } from "./greetingListeners.js";
import { greetingContent } from "./greetingContent.js";

export const greetingRender = () => {
  greetingContent();
  greetingListeners();
};