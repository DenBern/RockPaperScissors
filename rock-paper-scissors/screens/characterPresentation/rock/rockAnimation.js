import { btnPrev, rockCircle, titleRock, rock, rockScreenContainer } from "../../../variables.js";

export const rockAnimation = () => {
  rock.style.left = '-190px';
  rockCircle.style.left = '-265px';
  rockCircle.style.top = '140px';
  btnPrev.style.bottom = '15px';
  titleRock.style.left = '-190px';
  titleRock.style.top = '480px';
  rockScreenContainer.style.transform = 'translateX(-365px)';

  rock.animate([
    {top: '40px', left: '100px'},
    {left: '-190px'},
  ], 700);

  rockCircle.animate([
    {top: '360px', left: '30px'},
    {top: '140px', left: '-265px'},
  ], 700);

  titleRock.animate([
    {left: '170px'},
    {left: '-190px'}
  ], 700);
}