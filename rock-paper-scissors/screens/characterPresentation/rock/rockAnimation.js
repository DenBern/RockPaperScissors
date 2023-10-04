import { btnPrev, rockCircle, titleRock, rock, currentIcon } from "../../../variables.js";

export const rockAnimation = () => {
  if (currentIcon === 2) {
    rock.style.top = '40px';
    rock.style.left = '-45px';
    rockCircle.style.top = '360px';
    rockCircle.style.left = '-115px';
    titleRock.style.top = '480px';
    titleRock.style.left = '165px';
    btnPrev.style.bottom = '15px';

    rock.animate([
      {top: '430px', left: '310px'},
      {top: '40px', left: '-45px'},
    ], 700);

    rockCircle.animate([
      {top: '700px', left: '210px'},
      {top: '360px', left: '-115px'},
    ], 700);

    titleRock.animate([
      {top: '80px', left: '500px'},
      {top: '480px', left: '165px'}
    ], 700);
  };

  if (currentIcon === 3) {
    rock.style.top = '40px';
    rock.style.left = '-440px';
    rockCircle.style.top = '140px';
    rockCircle.style.left = '-645px';
    titleRock.style.top = '480px';
    titleRock.style.left = '-320px';

    rock.animate([
      {top: '40px', left: '-45px'},
      {top: '40px', left: '-440px'},
    ], 700);

    rockCircle.animate([
      {top: '360px', left: '-115px'},
      {top: '140px', left: '-645px'},
    ], 700);

    titleRock.animate([
      {top: '480px', left: '170px'},
      {left: '-320px'}
    ], 700);
  };
}