import { rockListeners } from "./rockListeners.js";
import { rockContent } from "./rockContent.js";
import { currentIcon } from "../../../variables.js";
export const rockRender = () => {
    rockContent();
    rockListeners();
}