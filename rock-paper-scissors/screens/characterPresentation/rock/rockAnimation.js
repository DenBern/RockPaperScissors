import { btnPrev, rockCircle } from "../../../variables";

export const rockAnimationjs = () => {
  rock.style.left = '-190px';
  rock.style.transform = 'scale(1)';
  rockCircle.style.left = '30px';
  rockCircle.style.top = '360px';
  btnPrev.style.bottom = '15px';

  // scissorsScreenContainer.style.transform = 'translateX(-220px)';
  rock.animate([
    {top: '40px', left: '100px'},
    {left: '-190px', transform: 'scale(0.5)'},
  ], 700);
  rockCircle.animate([
    {top: '0', left: '30px'},
    {top: '360px', left: '-265px'},
  ], 700);
  btnPrev.animate([
    {bottom: '-70px', right: '200px'},
    {bottom: '15px', right: '200px'}
  ], 700)
}