export const modalLogIn = () => {
  const btnLogIn = document.querySelector('.log-in');
  const btnLogInCards = document.querySelector('.log-in-btn');
  const btnCloseModalLogIn = document.querySelector('.btn-close-modal-log-in');
  const buyBtns = document.querySelectorAll('.book-buy');
  const wrapperModalLogIn = document.querySelector('.wrapper-modal-log-in');

  btnLogIn.addEventListener('click', () => {
    wrapperModalLogIn.classList.add('active-blackout');
  });

  btnCloseModalLogIn.addEventListener('click', () => {
    wrapperModalLogIn.classList.remove('active-blackout');
  });

  btnLogInCards.addEventListener('click', () => {
    wrapperModalLogIn.classList.add('active-blackout');
  });

  buyBtns.forEach(buy => buy.addEventListener('click', () => {
    wrapperModalLogIn.classList.add('active-blackout');
  }))

}