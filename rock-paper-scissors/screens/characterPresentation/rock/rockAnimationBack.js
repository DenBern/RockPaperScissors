import { rockCircle, titleRock, rock, rockScreenContainer } from "../../../variables.js";

export const rockAnimationBack = () => {
  rock.style.left = '40px';
  rockCircle.style.left = '30px';
  rockCircle.style.top = '360px';
  titleRock.style.left = '440px';
  titleRock.style.top = '160px';
  rockScreenContainer.style.transform = 'translateX(225px)';

  rock.animate([
    {top: '40px', left: '100px'},
    {top: '435px', left: '470px'},
  ], 700);
  rockCircle.animate([
    {top: '360px', left: '30px'},
    {top: '655px', left: '290px'},
  ], 700);

  titleRock.animate([
    {left: '170px', top: '480px'},
    {left: '440px', top: '160px'},
  ]);

}