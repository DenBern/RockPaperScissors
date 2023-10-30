const buttonsHomeRestart = document.createElement('div');
buttonsHomeRestart.classList.add('btns-home-restart')
const btnHome = document.createElement('button');
btnHome.classList.add('btn-home');
const btnRestart = document.createElement('button');
btnRestart.classList.add('btn-restart');

const btnHomeIcon = document.createElement('img');
btnHomeIcon.src = './assets/svg/endGame/maiMenu.svg';

const btnRestartIcon = document.createElement('img');
btnRestartIcon.src = './assets/svg/endGame/restartGame.svg';

btnRestart.append(btnRestartIcon);
btnHome.append(btnHomeIcon);

export {
  btnHome,
  btnRestart,
  buttonsHomeRestart,
};