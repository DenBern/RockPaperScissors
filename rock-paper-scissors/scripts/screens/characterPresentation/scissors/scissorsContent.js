import {
  scissorsCircle,
  scissorsScreenContainer,
  titleScissors,
  scissors,
  btnNext,
  screensWrapper,
  iconsWrapper,
} from "../../../../variables.js";

export const scissorsContent = () => {
  scissorsScreenContainer.classList.add('scissors-screen');

  titleScissors.classList.add('title-scissors');
  scissorsCircle.classList.add('scissors-circle');

  scissors.src = "../../assets/svg/greeting/presentation/scissors.svg";
  scissors.classList.add('scissors');

  scissorsCircle.append(titleScissors);
  scissorsScreenContainer.append(scissorsCircle);
  scissorsScreenContainer.append(scissors);

  screensWrapper.append(btnNext);
  screensWrapper.append(scissorsScreenContainer);
  screensWrapper.append(iconsWrapper);
}