import { paperCircle, paper, titlePaper } from "../../../../variables.js";

export const paperAnimationBack = () => {
  paper.style.top = '40px';
  paper.style.left = '260px';
  paperCircle.style.top = '700px';
  paperCircle.style.left = '65x';
  titlePaper.style.top = '480px';
  titlePaper.style.left = '500px';

  paper.animate([
    {top: '40px', left: '-195px'},
    {left: '260px'},
  ], 700);

  paperCircle.animate([
    {top: '360px', left: '-265px'},
    {top: '700px', left: '65px'},
  ], 700);

  titlePaper.animate([
    {left: '165px'},
    {top: '480px', left: '500px'}
  ], 700);
};