export const sliders = () => {
  const sliderImages = document.querySelector('.slider');
  const sliderBtns = document.querySelectorAll('.dot');
  const rightButton = document.querySelector('.button-right');
  const leftButton = document.querySelector('.button-left');

  const sliderStartPosition = 1016;
  const sliderCenterPosition = 0;
  const sliderEndPosition = -1016;
  const sliderStep = 508;
  let sliderPosition = parseInt(window.getComputedStyle(sliderImages).left);

  // Slider Desktop

  const setActiveBtn = (btnName) => {
    sliderBtns.forEach(btn => {
        btn.classList.toggle('active', btn.classList.contains(btnName));
    })
  }

  const setAttributeBtn = (btn) => {
    switch (btn) {
      case 'second-dot' || 'third-dot' || 'fourth-dot':
        leftButton.removeAttribute('disabled', '');
        rightButton.removeAttribute('disabled', '');
        setActiveBtn(btn);
        break;
      case 'first-dot':
        leftButton.setAttribute('disabled', '');
        rightButton.removeAttribute('disabled', '');
        break;
      case 'fifth-dot':
        leftButton.removeAttribute('disabled', '');
        rightButton.setAttribute('disabled', '');
        break;
    }
  }

  const moveSlider = (position) => {
    sliderImages.style.left = `${position}` + 'px';
  }

  sliderBtns.forEach(btn => btn.addEventListener('click', (btn) => {
    switch (btn.target.id) {
      case 'first-dot':
        setActiveBtn(btn.target.id);
        sliderPosition = sliderStartPosition;
        window.screen.width > 1024 ? sliderImages.style.left = '477px' : moveSlider(sliderPosition);
        setAttributeBtn(btn.target.id);
        break;
      case 'second-dot':
        setActiveBtn(btn.target.id);
        sliderPosition = sliderStep;
        window.screen.width > 1024 ? sliderImages.style.left = '0px' : moveSlider(sliderPosition);
        setAttributeBtn(btn.target.id);
        break;
      case 'third-dot':
        setActiveBtn(btn.target.id);
        sliderPosition = sliderCenterPosition;
        window.screen.width > 1024 ? sliderImages.style.left = '-477px' : moveSlider(sliderPosition);
        setAttributeBtn(btn.target.id);
        break;
      case 'fourth-dot':
        setActiveBtn(btn.target.id);
        sliderPosition = -sliderStep;
        moveSlider(sliderPosition);
        setAttributeBtn(btn.target.id);
        break;
      case 'fifth-dot':
        setActiveBtn(btn.target.id);
        sliderPosition = sliderEndPosition;
        moveSlider(sliderPosition);
        setAttributeBtn(btn.target.id);
        break;
      default:
        sliderImages.style.left = '477px';
    }
  }))

  // Slider Tablet

  const setDisabledBtn = (arg) => {
    if (arg === sliderStartPosition) {
      leftButton.setAttribute('disabled', '');
    } else if (arg === sliderEndPosition) {
      rightButton.setAttribute('disabled', '');
    }
  }
  setDisabledBtn(sliderPosition);

  const shiftLeft = () => {
      sliderPosition > sliderEndPosition ? sliderPosition -= sliderStep : 0;
      if (sliderPosition === sliderEndPosition) {
          rightButton.setAttribute('disabled', '');
          moveSlider(sliderPosition);
      } else {
          moveSlider(sliderPosition);
          leftButton.removeAttribute('disabled', '');
      }
      setActiveBtn();
  }
  rightButton.addEventListener('click', (shiftLeft));

  const shiftRight = () => {
      sliderPosition < sliderStartPosition ? sliderPosition += sliderStep : 0;
      if (sliderPosition === sliderStartPosition) {
          leftButton.setAttribute('disabled', '');
          moveSlider(sliderPosition);
      } else {
        moveSlider(sliderPosition);
          rightButton.removeAttribute('disabled', '');
      }
  }
  leftButton.addEventListener('click', (shiftRight));
}