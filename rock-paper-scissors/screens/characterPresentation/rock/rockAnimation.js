import { btnPrev, rockCircle, titleRock, rock, currentIcon } from "../../../variables.js";

export const rockAnimation = () => {
  console.log('animation');
  if (currentIcon === 2) {
    rock.style.left = '-45px';
    rock.style.top = '40px';
    rockCircle.style.left = '-115px';
    rockCircle.style.top = '360px';
    btnPrev.style.bottom = '15px';
    titleRock.style.left = '165px';
    titleRock.style.top = '480px';

    rock.animate([
      {top: '430px', left: '310px'},
      {top: '40px', left: '-45px'},
    ], 700);

    rockCircle.animate([
      {top: '700px', left: '210px'},
      {top: '360px', left: '-115px'},
    ], 700);

    titleRock.animate([
      {left: '500px', top: '80px'},
      {left: '165px', top: '480px'},
    ], 700);
  };

  if (currentIcon === 3) {
    rock.style.left = '-440px';
    rock.style.top = '40px';
    rockCircle.style.left = '-645px';
    rockCircle.style.top = '140px';
    titleRock.style.left = '-320px';
    titleRock.style.top = '480px';

    rock.animate([
      {top: '40px', left: '-45px'},
      {top: '40px', left: '-440px'},
    ], 700);

    rockCircle.animate([
      {top: '360px', left: '-115px'},
      {top: '140px', left: '-645px'},
    ], 700);

    titleRock.animate([
      {left: '170px', top: '480px'},
      {left: '-320px'},
    ], 700);
  }
}