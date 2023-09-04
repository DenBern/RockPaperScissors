export const checkCard = () => {
  const readersName = document.querySelector('.card-name');
  const cardNumber = document.querySelector('.card-number');
  const btnCheckCard = document.querySelector('.check-card');

  let readersNameValue = '';
  let cardNumberValue = '';
  let userCreditsParse = {};

  const getUserCredits = () => {
    const userCreditsLocalStorage = localStorage.getItem('userCredits');
    if (userCreditsLocalStorage) {
      userCreditsParse = JSON.parse(userCreditsLocalStorage);
    }
  }
  getUserCredits();

  readersName.addEventListener('input', () => {
    readersNameValue = readersName.value;
  })

  cardNumber.addEventListener('input', () => {
    cardNumberValue = cardNumber.value;
  })

  const checkCard = (readersName, cardNumber) => {
    console.log(typeof readersName, typeof cardNumber);

    if(userCreditsParse.firstName === readersName && userCreditsParse.cardNumber === cardNumber) {
      console.log('ok')
      readersName.value = '';
      cardNumber.value = '';
    } else {
      console.log('not ok')
    }
  }

  btnCheckCard.addEventListener('click', () => {
    checkCard(readersNameValue, cardNumberValue)
  })
}