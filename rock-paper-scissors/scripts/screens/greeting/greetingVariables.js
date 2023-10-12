const btnTap = document.createElement('button');
const greetingScreen = document.createElement('div');

const btnNext = document.createElement('button');
btnNext.classList.add('btn-next');
btnNext.textContent = 'Next';
const arrowNext = document.createElement('img');
arrowNext.src = './assets/svg/buttons/arrowRight.svg';
btnNext.append(arrowNext);

const btnPrev = document.createElement('button');
btnPrev.classList.add('btn-prev');
btnPrev.textContent = 'Back';
const arrowPrev = document.createElement('img');
arrowPrev.src = './assets/svg/buttons/arrowLeft.svg';
btnPrev.append(arrowPrev);

export {
  btnTap,
  greetingScreen,
  btnNext,
  btnPrev,
  arrowNext,
};