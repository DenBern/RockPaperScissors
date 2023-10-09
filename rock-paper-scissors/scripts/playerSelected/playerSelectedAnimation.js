import { computerChangeContainer, playerChangeContainer } from "../../variables.js";

export const playerSelectedAnimation = () => {
  computerChangeContainer.style.bottom = '600px';
  computerChangeContainer.style.opacity = 0.5;
  playerChangeContainer.style.top = '670px';
  playerChangeContainer.style.opacity = '0.5';

  computerChangeContainer.style.animationPlayState = 'paused';
  playerChangeContainer.style.animationPlayState = 'paused';

  computerChangeContainer.animate([
    {opacity: 1, bottom: '150px'},
    {opacity: 0.5, bottom: '600px'}
  ], 700);

  playerChangeContainer.animate([
    {opacity: 1, top: '425px'},
    {opacity: 0.5, top: '670px'}
  ], 700);
};