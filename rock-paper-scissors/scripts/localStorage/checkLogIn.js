import { allUsers } from "./getUsers.js";

export const checkLogIn = () => Boolean(allUsers.length);
