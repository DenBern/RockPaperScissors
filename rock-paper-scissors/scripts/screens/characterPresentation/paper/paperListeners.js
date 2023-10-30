import { paper, paperCircle } from "./paperVariables.js";

export const paperListeners = () => {
  paper.addEventListener('animationend', () => {
    paper.style.top = '40px';
    paper.style.left = '100px';
  });

  paperCircle.addEventListener('animationend', () => {
    paperCircle.style.left = '30px';
    paperCircle.style.top = '360px';
  });
};