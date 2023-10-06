import { rockCircle, titleRock, rock } from "../../../../variables.js";

export const rockAnimationBack = (count) => {
  if (count === 1) {
    rock.style.top = '430px';
    rock.style.left = '310px';
    rockCircle.style.top = '700px';
    rockCircle.style.left = '210px';
    titleRock.style.top = '80px';
    titleRock.style.left = '500px';

    rock.animate([
      {top: '40px', left: '-45px'},
      {top: '430px', left: '310px'},
    ], 700);
    rockCircle.animate([
      {top: '360px', left: '-115px'},
      {top: '700px', left: '210px'},
    ], 700);

    titleRock.animate([
      {top: '480px', left: '165px'},
      {top: '80px', left: '500px'},
    ], 700);
  };

  if (count === 2) {
    rock.style.top = '40px';
    rock.style.left = '-45px';
    rockCircle.style.top = '360px';
    rockCircle.style.left = '-115px';
    titleRock.style.top = '480px';
    titleRock.style.left = '165px';

    rock.animate([
      {top: '40px', left: '-440px'},
      {top: '40px', left: '-45px'},
    ], 700);

    rockCircle.animate([
      {top: '140px', left: '-645px'},
      {top: '360px', left: '-115px'},
    ], 700);

    titleRock.animate([
      {top: '480px', left: '-320px'},
      {top: '480px', left: '165px'}
    ], 700);
  };
}