export const modalLogIn = () => {
  const btnLogIn = document.querySelector('.log-in');
  const wrapperModalLogIn = document.querySelector('.wrapper-modal-log-in');
  const btnCloseModalLogIn = document.querySelector('.btn-close-modal-log-in');
  // const formLogIn = document.getElementById('form-log-in');


  btnLogIn.addEventListener('click', () => {
    wrapperModalLogIn.classList.add('active-blackout');
  });

  btnCloseModalLogIn.addEventListener('click', () => {
    wrapperModalLogIn.classList.remove('active-blackout');
  })

}