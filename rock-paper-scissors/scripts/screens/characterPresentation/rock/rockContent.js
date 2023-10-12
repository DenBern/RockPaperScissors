import { screensWrapper } from "../../../../variables.js";
import { rock, rockScreenContainer, titleRock, rockCircle } from "./rockVariables.js";

import { btnPrev } from "../../greeting/greetingVariables.js";

export const rockContent = () => {
  rockScreenContainer.classList.add('rock-screen');
  titleRock.textContent = 'Rock';
  titleRock.classList.add('title-rock');
  rockCircle.classList.add('rock-circle');

  rock.src = "./assets/svg/greeting/presentation/rock.svg";
  rock.classList.add('rock');

  rockCircle.append(titleRock);
  rockScreenContainer.append(rock, rockCircle);

  screensWrapper.append(rockScreenContainer, btnPrev,titleRock);
}