import { changeFavorite } from "./changeFavorite.js";
import { dropMenus } from "./dropMenus.js";
import { sliders } from "./sliders.js";
import { regLogInOutAuth } from "./modals/regLogInOutAuth.js";
import { formRegistration } from "./forms/formRegistration.js";
import { changeProfileMenu } from "./changeProfileMenu.js";
import { getRegisteredUsers } from "./localStorage/getRegisteredUsers.js";
import { formUserLogIn } from "./forms/formUserLogIn.js";
import { formCardRegister } from "./forms/formCardRegister.js";

changeFavorite();
dropMenus();
sliders();
regLogInOutAuth();
formRegistration();
changeProfileMenu(getRegisteredUsers());
formUserLogIn();
formCardRegister();


