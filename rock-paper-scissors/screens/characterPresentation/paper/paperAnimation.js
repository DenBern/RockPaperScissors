import { btnPrev, paperCircle, rockCircle, titleRock } from "../../../variables";

export const paperAnimation = () => {
  paper.style.left = '-190px';
  paper.style.transform = 'scale(1)';
  paperCircle.style.left = '30px';
  paperCircle.style.top = '360px';

  // scissorsScreenContainer.style.transform = 'translateX(-220px)';
  paper.animate([
    {top: '-190px', left: '100px'},
    {top: '40px', left: '100px'},
  ], 700);
  paperCircle.animate([
    {top: '0', left: '30px'},
    {top: '360px', left: '-265px'},
  ], 700);

  paperScreenContainer.style.transform = 'translateX(-220px)';
}