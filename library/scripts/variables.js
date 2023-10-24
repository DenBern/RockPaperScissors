const titleDropMenu = document.querySelector('.title-menu');
const btnLogInDropMenu = document.querySelector('.log-in');
const userFirstName = document.querySelector('.first-name');
const userLastName = document.querySelector('.last-name');
const initials = document.querySelector('.initials');
const bonusesCount = document.querySelector('.bonuses-number');
const visitsCount = document.querySelector('.visits-number');
const booksCount = document.querySelector('.books-number');
const btnSignUpCards = document.querySelector('.sign-up-btn');
const btnSignUp = document.querySelector('.sign-up-btn-modal');

const userCardNumber = document.querySelector('.card-number-user');
const btnsWrapper = document.querySelector('.btns-wrapper');
const btnMyProfile = document.createElement('button');
const btnLogOut = document.createElement('button');
const btnCloseUserProfile = document.querySelector('.btn-close-modal-user-profile');
const modalUserProfile = document.querySelector('.wrapper-modal-user-profile');
const btnLogIn = document.querySelector('.log-in');
const btnLogInCards = document.querySelector('.log-in-btn');
const btnProfileCard = document.querySelector('.profile-btn');
const btnCloseModalLogIn = document.querySelector('.btn-close-modal-log-in');
const buyBtns = document.querySelectorAll('.book-buy');
const inputEmailCardLogIn = document.getElementById('log-in-email-card');
const inputPasswordLogIn = document.getElementById('log-in-password');
const btnCloseModalBuycard = document.querySelector('.btn-close-modal-buy-library-card');

const body = document.querySelector('body');
const booksList = document.querySelector('.books-list');

const cardNumberInput = document.getElementById('card-number');
const expirationCodeMounth = document.getElementById('expiration-code-mounth');
const expirationCodeYear = document.getElementById('expiration-code-year');
const cardCvc = document.getElementById('card-cvc');

const cardTitle = document.querySelector('.create-card-title');
const cardText = document.querySelector('.create-card-text');
const cardTitleFind = document.querySelector('.find-card-title');

const btnRegistartionInModal = document.querySelector('.btn-registration');
const btnLogInInModal = document.querySelector('.btn-login');

let newRentedBook = {
  bookName: '',
  bookAuthor: '',
  btnDisabled: true,
};

const setNewRentedBook = (name, author) => {
  console.log('setBook')
  newRentedBook.bookName = name;
  newRentedBook.bookAuthor = author;
  newRentedBook.btnDisabled = !newRentedBook.btnDisabled;
};

let currentUserCreditsLogged = {};

const setCurrentUserCreditsLogged = (credits) => {
  currentUserCreditsLogged = credits;
};

let userRentedBooks = [];

const setUserRentedBooks = (books) => {
  userRentedBooks = books;
};


export {
  visitsCount,
  booksCount,
  btnSignUpCards,
  btnSignUp,

  currentUserCreditsLogged,
  setCurrentUserCreditsLogged,
  userRentedBooks,
  setUserRentedBooks,
  setNewRentedBook,
  newRentedBook,
  titleDropMenu,
  btnLogInDropMenu,
  userFirstName,
  userLastName,
  initials,
  bonusesCount,
  userCardNumber,
  btnsWrapper,
  btnMyProfile,
  btnLogOut,
  btnCloseUserProfile,
  modalUserProfile,
  btnLogIn,
  btnLogInCards,
  btnProfileCard,
  btnCloseModalLogIn,
  buyBtns,
  inputEmailCardLogIn,
  inputPasswordLogIn,
  btnCloseModalBuycard,
  body,
  booksList,
  cardNumberInput,
  expirationCodeMounth,
  expirationCodeYear,
  cardCvc,
  cardTitle,
  cardText,
  cardTitleFind,
  btnRegistartionInModal,
  btnLogInInModal
};