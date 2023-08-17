export const slider = () => {
  const sliderImages = document.querySelector('.slider');
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
        window.screen.width > 1024 ? sliderImages.style.left = '477px' : sliderImages.style.left = '1020px';
        break;
      case 'second-dot':
        setActiveBtn(btn.target.id);
        window.screen.width > 1024 ? sliderImages.style.left = '0px' : sliderImages.style.left = '508px';
        break;
      case 'third-dot':
        setActiveBtn(btn.target.id);
        window.screen.width > 1024 ? sliderImages.style.left = '-471px' : sliderImages.style.left = '0px';
        break;
      case 'fourth-dot':
        setActiveBtn(btn.target.id);
        sliderImages.style.left = '-508px';
        break;
      case 'fifth-dot':
        setActiveBtn(btn.target.id);
        sliderImages.style.left = '-1020px';
        break;
      default:
        sliderImages.style.left = '477px';
    }
  }))
}