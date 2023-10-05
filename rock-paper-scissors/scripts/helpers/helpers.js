import { btnNext, btnPrev } from "../../variables.js";

export const changeBtnPresent = (value) => {
  if (value === 3) {
    btnPrev.style.right = '240px';
    btnNext.textContent = 'Let’s Start';
  };

  if (value === 2) {
    btnPrev.style.right = '200px';
  };
};

export const changeIcons = (counter) => {
  const icons = document.querySelectorAll('.icons');
  const pathScisssors = document.getElementById('scissors-path');
  const pathRock = document.getElementById('rock-path');
  const pathPaper= document.getElementById('paper-path');

  icons.forEach((icon, index) => {
    if (counter - 1 === index) {
      icon.style.transform = 'scale(2.5)';
    } else {
      icon.style.transform = 'scale(1)';
    };
  });

  switch (counter) {
    case 1:
      pathScisssors.setAttribute('fill', '#FFCC01');
      pathRock.setAttribute('fill', '#fff')
      break;
    case 2:
      pathScisssors.setAttribute('fill', '#90C67B');
      pathRock.setAttribute('fill', '#FFCC01');
      pathPaper.setAttribute('fill', '#fff')
      break;
    case 3:
      pathScisssors.setAttribute('fill', '#90C67B');
      pathRock.setAttribute('fill', '#90C67B');
      pathPaper.setAttribute('fill', '#232586')
      break;
    default:
      pathScisssors.setAttribute('fill', '#fff');
      pathRock.setAttribute('fill', '#fff');
      pathPaper.setAttribute('fill', '#fff')
  }
};