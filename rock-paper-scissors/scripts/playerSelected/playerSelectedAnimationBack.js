import { computerChangeContainer, playerChangeContainer } from "../../variables.js";

export const playerSelectedAnimationBack = () => {
  computerChangeContainer.style.bottom = '150px';
  computerChangeContainer.style.opacity = '1';
  playerChangeContainer.style.top = '425px';
  playerChangeContainer.style.opacity = '1';

  computerChangeContainer.style.animationPlayState = 'running'
  playerChangeContainer.style.animationPlayState = 'running'

  computerChangeContainer.animate([
    {opacity: 0.5, bottom: '600px'},
    {opacity: 1, bottom: '150px'}
  ], 700);

  playerChangeContainer.animate([
    {opacity: 0.5, top: '670px'},
    {opacity: 1, top: '425px'}
  ], 700);
};