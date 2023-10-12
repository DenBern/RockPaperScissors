import { screensWrapper } from "../../../variables.js";
import { btnTap, greetingScreen } from "./greetingVariables.js";

export const greetingContent = () => {
  greetingScreen.classList.add('greeting-screen');
  screensWrapper.append(greetingScreen);

  const greeting = document.createElement('div');
  greeting.classList.add('greeting');
  greetingScreen.append(greeting);

  const gameTitle = document.createElement('h1');
  gameTitle.innerHTML = `
    <span class="letter-r">R</span>
    <span class="dash"> - </span>
    <span class="letter-p">P</span>
    <span class="dash"> - </span>
    <span class="letter-s">S</span>
  `;

  const rock = document.createElement('img');
  const paper = document.createElement('img');
  const scissors = document.createElement('img');
  const shadowSmall = document.createElement('img');
  const shadowBig = document.createElement('img');
  rock.classList.add('rock-greeting');
  paper.classList.add('paper-greeting');
  scissors.classList.add('scissors-greeting');
  shadowSmall.classList.add('shadow-small');
  shadowBig.classList.add('shadow-big');
  rock.src = "./assets/svg/greeting/rock.svg";
  paper.src = "./assets/svg/greeting/paper.svg";
  scissors.src = "./assets/svg/greeting/scissors.svg";
  shadowSmall.src = "./assets/svg/greeting/shadowEllipse1.svg";
  shadowBig.src = "./assets/svg/greeting/shadowEllipse2.svg";

  greeting.append(rock, paper, scissors, shadowSmall, shadowBig);
  greetingScreen.append(gameTitle);

  let btnVisible = setTimeout(() => {
    btnTap.classList.add('btn-tap');
    btnTap.textContent = "Click";
    greetingScreen.append(btnTap);
    clearTimeout(btnVisible);
  }, 1000);
};