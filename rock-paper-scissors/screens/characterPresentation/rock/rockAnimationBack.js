import { rockCircle, titleRock, rock, rockScreenContainer } from "../../../variables.js";

export const rockAnimationBack = (count) => {
  // titleRock.style.left = '440px';
  // titleRock.style.top = '160px';
  if (count === 1) {
    rock.style.left = '40px';
    rockCircle.style.left = '290px';
    rockCircle.style.top = '655px';

    rock.animate([
      {top: '40px', left: '100px'},
      {top: '435px', left: '470px'},
    ], 700);
    rockCircle.animate([
      {top: '360px', left: '30px'},
      {top: '655px', left: '290px'},
    ], 700);
    titleRock.animate([
      {left: '440px', top: '160px'},
      {left: '170px', top: '480px'},
    ]);
    console.log('rock animation back')
    // rockScreenContainer.style.transform = 'translateX(-215px)';
  };

  if (count === 2) {
    console.log('count 2');
    rock.style.left = '100px';
    rockCircle.style.left = '30px';
    rockCircle.style.top = '360px';

    rock.animate([
      {left: '-190px'},
      {top: '40px', left: '100px'},
    ], 700);
    rockCircle.animate([
      {top: '140px', left: '-265px'},
      {top: '360px', left: '30px'},
    ], 700);
    rockScreenContainer.style.transform = 'translateX(-155px)';

    // titleRock.animate([
    //   {left: '440px', top: '160px'},
    //   {left: '170px', top: '480px'},
    // ]);
  };
}