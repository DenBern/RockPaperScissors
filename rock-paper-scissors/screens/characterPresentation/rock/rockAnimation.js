import { btnPrev, rockCircle, titleRock, rock, paperScreenContainer } from "../../../variables.js";
import { paperRender } from "../paper/paperRender.js";

export const rockAnimation = () => {
  rock.style.left = '-190px';
  rockCircle.style.left = '30px';
  rockCircle.style.top = '360px';
  btnPrev.style.bottom = '15px';
  titleRock.style.left = '-120px';
  paperScreenContainer.style.transform = 'translateX(-285px)';

  rock.animate([
    {top: '40px', left: '100px'},
    {left: '-190px', transform: 'scale(0.5)'},
  ], 700);
  rockCircle.animate([
    {top: '360px', left: '30px'},
    {top: '360px', left: '-265px'},
  ], 700);

  paperRender();
}