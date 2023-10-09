import { paperCircle, paper, titlePaper } from "../../../../variables.js";

export const paperAnimation = () => {
  paper.style.left = '-195px';
  paperCircle.style.top = '360px';
  paperCircle.style.left = '-265px';
  titlePaper.style.left = '165px';

  paper.animate([
    {top: '40px', left: '260px'},
    {top: '40px', left: '-195px'},
  ], 700);

  paperCircle.animate([
    {top: '700px', left: '210px'},
    {top: '360px', left: '-265px'},
  ], 700);

  titlePaper.animate([
    {top: '480px', left: '500px'},
    {top:'480px', left: '165px'},
  ], 700);
};