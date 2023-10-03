import {
  scissorsCircle,
  scissorsScreenContainer,
  title,
  scissors,
  btnNext,
  screensWrapper
} from "../../../variables.js";

export const scissorsContent = () => {
  scissorsScreenContainer.classList.add('scissors-screen');

  title.textContent = 'Scissors';
  scissorsCircle.classList.add('scissors-circle');


  scissors.src = "../../assets/svg/greeting/presentation/scissors.svg";
  scissors.classList.add('scissors');

  btnNext.classList.add('btn-next');

  scissorsCircle.append(title)
  // scissorsCircle.append(btnNext)
  scissorsScreenContainer.append(scissorsCircle)
  scissorsScreenContainer.append(scissors)

  screensWrapper.append(btnNext)
  screensWrapper.append(scissorsScreenContainer);
}