const btnRegister = document.querySelector('.register');
const btnCloseModalRegistration = document.querySelector('.btn-close-modal-registration');
const btnSignUpcards = document.querySelector('.sign-up-btn');
const wrapperModalReg = document.querySelector('.wrapper-modal-register');
const profileButton = document.querySelector('.link-user');
const menuAuthorization = document.querySelector('.wrapper-menu-auth');
const titleDropMenu = document.querySelector('.title-menu');
const btnLogInDropMenu = document.querySelector('.log-in');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const userFirstName = document.querySelector('.first-name');
const userLastName = document.querySelector('.last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const formRegistrarion = document.getElementById('form-registration');
const formCardDetails = document.getElementById('form-card-details');
const formLogIn = document.getElementById('form-log-in');
const formCard = document.getElementById('form-card');
const btnSignUp = document.querySelector('.sign-up-btn-modal');
const initials = document.querySelector('.initials');
const visitsCount = document.querySelector('.visits-number');
const bonusesCount = document.querySelector('.bonuses-number');
const booksCount = document.querySelector('.books-number');
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
const wrapperModalLogIn = document.querySelector('.wrapper-modal-log-in');
const inputEmailCardLogIn = document.getElementById('log-in-email-card');
const inputPasswordLogIn = document.getElementById('log-in-password');
const btnLogInModal = document.querySelector('.log-in-btn-modal');
const btnCloseModalBuycard = document.querySelector('.btn-close-modal-buy-library-card');
const modalBuyCard = document.querySelector('.wrapper-modal-buy-library-card');
const body = document.querySelector('body');
const btnBuyCard = document.querySelector('.buy-card-btn');
const booksList = document.querySelector('.books-list');

const cardNumberInput = document.getElementById('card-number');
const expirationCodeMounth = document.getElementById('expiration-code-mounth');
const expirationCodeYear = document.getElementById('expiration-code-year');
const cardCvc = document.getElementById('card-cvc');

const readersName = document.getElementById('readers-name');
const readersCardNumber = document.getElementById('readers-card-number');
const findLibraryCard = document.querySelector('.check-card');
const checkDetails = document.querySelector('.check-details');
const checkVisitsCount = document.querySelector('.check-visits-number');
const checkBooksCount = document.querySelector('.check-books-number');
const checkBonusesCount = document.querySelector('.check-bonuses-number');
const cardTitle = document.querySelector('.create-card-title');
const cardText = document.querySelector('.create-card-text');
const cardTitleFind = document.querySelector('.find-card-title');

const btnRegistartionInModal = document.querySelector('.btn-registration');
const btnLogInInModal = document.querySelector('.btn-login');

let usersCredits = [];
let checkCardCredits = {};

let newRentedBook = {
  bookName: '',
  bookAuthor: '',
  btnDisabled: true,
};

const setNewRentedBook = (name, author) => {
  newRentedBook.bookName = name;
  newRentedBook.bookAuthor = author;
  newRentedBook.btnDisabled = !newRentedBook.btnDisabled
}

let newUserCredits = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  cardNumber: '',
  logged: false,
  visits: 0,
  bonuses: 0,
  books: 0,
  subscription: false,
  rentedBooks: [],
};

let currentUserCreditsLogged = {};

let inputEmailCardLogInValue;
let inputPasswordLogInValue;
let inputReadersNameValue;
let inputReadersCardNumberValue;

const setInputEmailCardLogInValue = (value) => {
  inputEmailCardLogInValue = value;
};

const setInputPasswordLogInValue = (value) => {
  inputPasswordLogInValue = value;
};

const setInputReadersNameValue = (value) => {
  inputReadersNameValue = value;
};

const setInputReadersCardNumberValue = (value) => {
  inputReadersCardNumberValue = value;
};

const setCurrentUserCreditsLogged = (credits) => {
  currentUserCreditsLogged = credits;
};

const setFirstName = (value) => {
  newUserCredits.firstName = value;
};

const setLastName = (value) => {
  newUserCredits.lastName = value;
};

const setEmail = (value) => {
  newUserCredits.email = value;
};

const setPassword = (value) => {
  newUserCredits.password = value;
};

const setUsersCredits = (value) => {
  usersCredits = value;
};

const setUserCardNumber = (value) => {
  newUserCredits.cardNumber = value;
};

const setUserLogged = () => {
  newUserCredits.logged = !newUserCredits.logged;
};

const setUserVisits = () => {
  newUserCredits.visits += 1;
};

const setUserBonuses = (value) => {
  newUserCredits.bonuses = value;
};

let userRentedBooks = [];

const setUserRentedBooks = (books) => {
  userRentedBooks = books;
};


export {
  newUserCredits,
  currentUserCreditsLogged,
  setCurrentUserCreditsLogged,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setUserCardNumber,
  setUserLogged,
  setUserVisits,
  setUserBonuses,
  setUsersCredits,
  usersCredits,
  userRentedBooks,
  setUserRentedBooks,
  checkCardCredits,
  setInputEmailCardLogInValue,
  setInputReadersCardNumberValue,
  setInputPasswordLogInValue,
  setInputReadersNameValue,
  setNewRentedBook,
  newRentedBook,
  inputEmailCardLogInValue,
  inputPasswordLogInValue,
  btnRegister,
  btnCloseModalRegistration,
  btnSignUpcards,
  wrapperModalReg,
  profileButton,
  menuAuthorization,
  titleDropMenu,
  btnLogInDropMenu,
  firstName,
  lastName,
  userFirstName,
  userLastName,
  email,
  password,
  formRegistrarion,
  formCardDetails,
  formLogIn,
  formCard,
  btnSignUp,
  initials,
  visitsCount,
  bonusesCount,
  booksCount,
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
  wrapperModalLogIn,
  inputEmailCardLogIn,
  inputPasswordLogIn,
  btnLogInModal,
  btnCloseModalBuycard,
  modalBuyCard,
  body,
  btnBuyCard,
  booksList,
  cardNumberInput,
  expirationCodeMounth,
  expirationCodeYear,
  cardCvc,
  readersName,
  readersCardNumber,
  findLibraryCard,
  checkDetails,
  checkVisitsCount,
  checkBooksCount,
  checkBonusesCount,
  cardTitle,
  cardText,
  cardTitleFind,
  btnRegistartionInModal,
  btnLogInInModal
};