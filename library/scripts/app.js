import { changeFavorite } from "./changeFavorite.js";
import { dropMenus } from "./dropMenus.js";
import { sliders } from "./sliders.js";
import { regLogInOutAuth } from "./modals/regLogInOutAuth.js";
import { changeProfileMenu } from "./changeProfileMenu.js";
import { getRegisteredUsers } from "./localStorage/getRegisteredUsers.js";
import { formsEventListeners } from "./forms/formsEventListeners.js";

dropMenus();
sliders();
changeProfileMenu(getRegisteredUsers());
changeFavorite();


regLogInOutAuth();

formsEventListeners();


