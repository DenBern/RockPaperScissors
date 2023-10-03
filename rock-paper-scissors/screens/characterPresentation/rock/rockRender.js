import { rockListeners } from "./rockListeners.js";
import { rockContent } from "./rockContent.js";
export const rockRender = () => {
    rockContent();
    console.log('render rock')
    rockListeners();
}