import { formCard } from "../variables.js";

export const formCheckCard = () => {
  console.log('check card')
  formCard.addEventListener('submit', (event) => {
    event.preventDefault();
    checkCard();
  });
};