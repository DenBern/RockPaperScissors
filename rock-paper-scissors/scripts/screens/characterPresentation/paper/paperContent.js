import { screensWrapper } from "../../../../variables.js";
import { paper, paperCircle, paperScreenContainer, paperContainer, titlePaper } from "./paperVariables.js";

export const paperContent = () => {
  paperScreenContainer.classList.add('paper-screen');
  titlePaper.textContent = 'Paper';
  paperCircle.classList.add('paper-circle');

  paper.src = "./assets/svg/greeting/presentation/paper.svg";
  paper.classList.add('paper');
  paperScreenContainer.append(paper, paperCircle);

  screensWrapper.append(paperScreenContainer, titlePaper);
};