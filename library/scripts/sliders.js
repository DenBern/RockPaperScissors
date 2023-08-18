export const sliders = () => {
  const sliderImages = document.querySelector('.slider');
  const sliderBtns = document.querySelectorAll('.dot');
  const rightButton = document.querySelector('.button-right');
  const leftButton = document.querySelector('.button-left');

  // Variables

  const sliderTabletStartPosition = 1016;
  const sliderTabletEndPosition = -1016;
  const sliderTabletStep = 508;
  const sliderDesktopStartPosition = 477;
  const sliderDesktopEndtPosition = -477;
  const sliderCenterPosition = 0;
  let sliderPosition = parseInt(window.getComputedStyle(sliderImages).left);
  const screenWith = window.screen.width > 1024;

  // Active buttons (dots)

  const setActiveBtn = (btnName) => {
    sliderBtns.forEach(btn => {
        btn.classList.toggle('active', btn.classList.contains(btnName));
    })
  }

// Set attribute btns (tablet)

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

  // Move slider (desktop & tablet)

  const moveSlider = (positionDesktop, positionTablet) => {
    sliderImages.style.left = `${screenWith ? positionDesktop : positionTablet }` + 'px';
  }

  sliderBtns.forEach(btn => btn.addEventListener('click', (btn) => {
    switch (btn.target.id) {
      case 'first-dot':
        setActiveBtn(btn.target.id);
        sliderPosition = sliderTabletStartPosition;
        moveSlider(sliderDesktopStartPosition, sliderPosition);
        setAttributeBtn(btn.target.id);
        break;
      case 'second-dot':
        setActiveBtn(btn.target.id);
        sliderPosition = sliderTabletStep;
        moveSlider(sliderCenterPosition, sliderPosition);
        setAttributeBtn(btn.target.id);
        break;
      case 'third-dot':
        setActiveBtn(btn.target.id);
        sliderPosition = sliderCenterPosition;
        moveSlider(sliderDesktopEndtPosition, sliderPosition);
        setAttributeBtn(btn.target.id);
        break;
      case 'fourth-dot':
        setActiveBtn(btn.target.id);
        sliderPosition = -sliderTabletStep;
        moveSlider(0, sliderPosition);
        setAttributeBtn(btn.target.id);
        break;
      case 'fifth-dot':
        setActiveBtn(btn.target.id);
        sliderPosition = sliderTabletEndPosition;
        moveSlider(0, sliderPosition);
        setAttributeBtn(btn.target.id);
        break;
    }
  }))

  // Disabled buttons(tablet)

  const setDisabledBtn = (arg) => {
    if (arg === sliderTabletStartPosition) {
      leftButton.setAttribute('disabled', '');
    } else if (arg === sliderTabletEndPosition) {
      rightButton.setAttribute('disabled', '');
    }
  }
  setDisabledBtn(sliderPosition);

  // Move slider buttons tablet

  const shiftLeft = () => {
      sliderPosition > sliderTabletEndPosition ? sliderPosition -= sliderTabletStep : 0;
      if (sliderPosition === sliderTabletEndPosition) {
          rightButton.setAttribute('disabled', '');
          moveSlider(0, sliderPosition);
      } else {
          moveSlider(0, sliderPosition);
          leftButton.removeAttribute('disabled', '');
      }
      setActiveBtn();
  }
  rightButton.addEventListener('click', (shiftLeft));

  const shiftRight = () => {
      sliderPosition < sliderTabletStartPosition ? sliderPosition += sliderTabletStep : 0;
      if (sliderPosition === sliderTabletStartPosition) {
          leftButton.setAttribute('disabled', '');
          moveSlider(0, sliderPosition);
      } else {
        moveSlider(0, sliderPosition);
        rightButton.removeAttribute('disabled', '');
      }
  }
  leftButton.addEventListener('click', (shiftRight));
}