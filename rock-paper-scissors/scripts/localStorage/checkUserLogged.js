import { allUsers } from "./getUsers.js";

export let userLogged = {};
export const checkUserLogged = () => userLogged = allUsers.find(user => user.logged);
