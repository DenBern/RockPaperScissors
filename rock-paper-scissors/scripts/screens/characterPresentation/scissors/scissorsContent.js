import { screensWrapper} from "../../../../variables.js";
import { btnNext } from "../../greeting/greetingVariables.js";
import { scissorsScreenContainer, scissorsCircle, scissors, titleScissors } from "./scissorsVariables.js";
import { iconsWrapper } from "./scissorsVariables.js";

export const scissorsContent = () => {
  scissorsScreenContainer.classList.add('scissors-screen');
  titleScissors.classList.add('title-scissors');
  scissorsCircle.classList.add('scissors-circle');

  scissors.src = "./assets/svg/greeting/presentation/scissors.svg";
  scissors.classList.add('scissors');

  scissorsCircle.append(titleScissors);
  scissorsScreenContainer.append(scissorsCircle, scissors);

  screensWrapper.append(btnNext, scissorsScreenContainer, iconsWrapper);
};