import { paperCircle, paper } from "../../../variables.js";

export const paperAnimationBack = () => {
  paper.style.left = '135px';
  paperCircle.style.left = '40x';
  paperCircle.style.top = '360px';
  // paperScreenContainer.style.transform = 'translateX(150px)';

  paper.animate([
    {top: '40px', left: '135px'},
    {left: '135px'},
  ], 700);
  paperCircle.animate([
    {top: '360px', left: '40px'},
    {top: '660px', left: '40px'},
  ], 700);
}