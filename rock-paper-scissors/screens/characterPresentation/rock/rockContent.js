import {
  rockCircle,
  rockScreenContainer,
  titleRock,
  rock,
  btnPrev,
  screensWrapper,
} from "../../../variables.js";

export const rockContent = () => {
  rockScreenContainer.classList.add('rock-screen');
  titleRock.textContent = 'Rock';
  rockCircle.classList.add('rock-circle');

  rock.src = "../../assets/svg/greeting/presentation/rock.svg";
  rock.classList.add('rock');
  rockScreenContainer.append(rock, rockCircle);

  screensWrapper.append(rockScreenContainer, btnPrev,titleRock);
}