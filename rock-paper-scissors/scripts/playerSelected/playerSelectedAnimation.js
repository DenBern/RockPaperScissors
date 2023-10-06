import { computerChangeContainer, userChangeContainer } from "../../variables.js";

export const playerSelectedAnimation = () => {
  computerChangeContainer.style.bottom = '400px';
  computerChangeContainer.style.opacity = 0.5;
  userChangeContainer.style.top = '670px';
  userChangeContainer.style.opacity = '0.5';

  computerChangeContainer.style.animationPlayState = 'paused';
  userChangeContainer.style.animationPlayState = 'paused';

  computerChangeContainer.animate([
    {opacity: 1, bottom: '150px'},
    {opacity: 0.5, bottom: '400px'}
  ], 700);

  userChangeContainer.animate([
    {opacity: 1, top: '425px'},
    {opacity: 0.5, top: '670px'}
  ], 700);
}