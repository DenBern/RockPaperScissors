export const slider = () => {
  const images = document.querySelector('.slider');
  const sliderBtns = document.querySelectorAll('.dot');

  const setActiveBtn = (btnName) => {
    sliderBtns.forEach(btn => {
      btn.classList.toggle('active', btn.classList.contains(btnName));
    })
  }

  sliderBtns.forEach(btn => btn.addEventListener('click', (btn) => {
    switch (btn.target.id) {
      case 'first-dot':
        setActiveBtn(btn.target.id);
        images.style.left = '477px';
        break;
      case 'second-dot':
        setActiveBtn(btn.target.id);
        images.style.left = '0px';
        break;
      case 'third-dot':
        setActiveBtn(btn.target.id);
        images.style.left = '-471px';
        break;
    }
  }))
}