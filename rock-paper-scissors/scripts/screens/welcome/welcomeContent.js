import { screensWrapper } from "../../../variables.js";
import { welcomeTitleScissors, welcomeTitleRock, welcomeTitlePaper, screenWelcome } from "./welcomeVariables.js";

export const welcomeContent = () => {
  screenWelcome.classList.add('welcome-screen');

  welcomeTitleRock.classList.add('welcome-title-rock');
  welcomeTitleRock.textContent = 'Rock';

  welcomeTitlePaper.classList.add('welcome-title-paper');
  welcomeTitlePaper.textContent = 'Paper';

  welcomeTitleScissors.classList.add('welcome-title-scissors');
  welcomeTitleScissors.textContent = 'Scissors';

  screenWelcome.append(welcomeTitleRock, welcomeTitlePaper, welcomeTitleScissors);
  screensWrapper.append(screenWelcome);
};