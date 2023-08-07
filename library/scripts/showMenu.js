export const showMenu = () => {
  const burgerButton = document.querySelector('.burger-menu-button');
  const burgerLinks = document.querySelectorAll('.burger-link');
  const burgerMenu = document.querySelector('.burger-links');
  const activeBlackout = document.querySelector('.burger-menu');

  burgerButton.addEventListener('click', () => {
    activeBlackout.classList.toggle('active-blackout');
    burgerButton.classList.toggle('active-button');
    burgerMenu.classList.toggle('active-menu');
  });

  burgerLinks.forEach(link => link.addEventListener('click', () => {
    burgerButton.classList.toggle('active-button');
    burgerMenu.classList.toggle('active-menu');
    activeBlackout.classList.toggle('active-blackout');
  }));

  activeBlackout.addEventListener('click', (e) => {
    if (e.target === activeBlackout) {
      burgerButton.classList.remove('active-button');
      burgerMenu.classList.remove('active-menu');
      activeBlackout.classList.toggle('active-blackout');
    }
  })
}