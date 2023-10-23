import { changeColorBorderInput } from "../helpers.js";
import { setFirstName, setLastName, setPassword, setEmail, setInputEmailCardLogInValue, setInputPasswordLogInValue, setInputReadersCardNumberValue } from "../variables.js";
import { inputsValidation } from "../inputsValidation.js";
import { resetColorBorderInput } from "../helpers.js";

export const regLogInOutAuth = () => {
    const btnRegister = document.querySelector('.register');
    const btnCloseModalRegistration = document.querySelector('.btn-close-modal-registration');
    const btnSignUpcards = document.querySelector('.sign-up-btn');
    const wrapperModalReg = document.querySelector('.wrapper-modal-register');
    const profileButton = document.querySelector('.link-user');
    const menuAuthorization = document.querySelector('.wrapper-menu-auth');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const formRegistrarion = document.getElementById('form-registration');
    const formCardDetails = document.getElementById('form-card-details');
    const btnSignUp = document.querySelector('.sign-up-btn-modal');
    const btnCloseUserProfile = document.querySelector('.btn-close-modal-user-profile');
    const modalUserProfile = document.querySelector('.wrapper-modal-user-profile');
    const btnLogIn = document.querySelector('.log-in');
    const btnLogInCards = document.querySelector('.log-in-btn');
    const btnProfileCard = document.querySelector('.profile-btn');
    const btnCloseModalLogIn = document.querySelector('.btn-close-modal-log-in');
    const wrapperModalLogIn = document.querySelector('.wrapper-modal-log-in');
    const inputEmailCardLogIn = document.getElementById('log-in-email-card');
    const inputPasswordLogIn = document.getElementById('log-in-password');
    const btnCloseModalBuycard = document.querySelector('.btn-close-modal-buy-library-card');
    const modalBuyCard = document.querySelector('.wrapper-modal-buy-library-card');
    const body = document.querySelector('body');

    const cardNumberInput = document.getElementById('card-number');
    const expirationCodeMounth = document.getElementById('expiration-code-mounth');
    const expirationCodeYear = document.getElementById('expiration-code-year');
    const cardCvc = document.getElementById('card-cvc');

    const readersName = document.getElementById('readers-name');
    const readersCardNumber = document.getElementById('readers-card-number');

    const btnRegistartionInModal = document.querySelector('.btn-registration');
    const btnLogInInModal = document.querySelector('.btn-login')

    //Event listeners

    btnRegistartionInModal.addEventListener('click', () => {
        wrapperModalLogIn.classList.remove('active-blackout');
        wrapperModalReg.classList.add('active-blackout');
    });

    btnLogInInModal.addEventListener('click', () => {
        wrapperModalReg.classList.remove('active-blackout');
        wrapperModalLogIn.classList.add('active-blackout');
    });

    readersName.addEventListener('input', () => {
        setInputEmailCardLogInValue(readersName.value);
        inputsValidation(readersName);
    });

    readersCardNumber.addEventListener('input', () => {
        setInputReadersCardNumberValue(readersCardNumber.value);
        inputsValidation(readersCardNumber);
    });

    btnSignUpcards.addEventListener('click', () => {
        wrapperModalReg.classList.add('active-blackout');
        body.classList.add('no-scroll');
    });

    profileButton.addEventListener('mouseover', () => {
        profileButton.getAttribute('title');
    });

    profileButton.addEventListener('click', () => {
        menuAuthorization.classList.add('active-profile-menu');
    });

    btnCloseModalRegistration.addEventListener('click', () => {
        formRegistrarion.reset();
        resetColorBorderInput(firstName, lastName, email, password)
        wrapperModalReg.classList.remove('active-blackout');
        body.classList.remove('no-scroll');
    });

    btnSignUp.addEventListener('click', () => {
        wrapperModalReg.classList.add('active-blackout');
        body.classList.add('no-scroll');
    });

    firstName.addEventListener('input', () => {
        setFirstName(firstName.value);
        inputsValidation(firstName);
    });

    lastName.addEventListener('input', () => {
        setLastName(lastName.value);
        inputsValidation(lastName);
    });

    email.addEventListener('input', () => {
        setEmail(email.value);
        inputsValidation(email);
    });

    password.addEventListener('input', () => {
        setPassword(password.value);
        inputsValidation(password);
    });

    if (btnLogIn) {
        btnLogIn.addEventListener('click', () => {
            wrapperModalLogIn.classList.add('active-blackout');
            body.classList.add('no-scroll');
        });
    };

    if (btnRegister) {
        btnRegister.addEventListener('click', () => {
            wrapperModalReg.classList.add('active-blackout');
            body.classList.add('no-scroll');
        });
    };

    btnCloseModalLogIn.addEventListener('click', () => {
        wrapperModalLogIn.classList.remove('active-blackout');
        body.classList.remove('no-scroll');
    });

    btnCloseModalBuycard.addEventListener('click', () => {
        modalBuyCard.classList.remove('active-blackout');
        body.classList.remove('no-scroll');
        formCardDetails.reset();
        resetColorBorderInput(cardNumberInput, expirationCodeMounth, expirationCodeYear, cardCvc);
    });

    cardNumberInput.addEventListener('input',
        function () {
            this.value = this.value.replace(/[^\d.]/g, '');
            inputsValidation(cardNumberInput);
        }
    );

    expirationCodeMounth.addEventListener('input',
        function () {
            this.value = this.value.replace(/[^\d.]/g, '');
            inputsValidation(expirationCodeMounth);
        }
    );

    expirationCodeYear.addEventListener('input',
        function () {
            this.value = this.value.replace(/[^\d.]/g, '');
            inputsValidation(expirationCodeYear);
        }
    );

    cardCvc.addEventListener('input',
        function () {
            this.value = this.value.replace(/[^\d.]/g, '');
            inputsValidation(cardCvc);
        }
    );

    btnLogInCards.addEventListener('click', () => {
        wrapperModalLogIn.classList.add('active-blackout');
        body.classList.add('no-scroll');
    });

    btnProfileCard.addEventListener('click', () => {
        modalUserProfile.classList.add('active-blackout');
        body.classList.add('no-scroll');
    });

    btnCloseUserProfile.addEventListener('click', () => {
        modalUserProfile.classList.remove('active-blackout');
        body.classList.remove('no-scroll');
    });

    inputEmailCardLogIn.addEventListener('input', () => {
        changeColorBorderInput(inputEmailCardLogIn.value.length >= 1, inputEmailCardLogIn);
        setInputEmailCardLogInValue(inputEmailCardLogIn.value);
    });

    inputPasswordLogIn.addEventListener('input', () => {
        changeColorBorderInput(inputPasswordLogIn.value.length >= 8, inputPasswordLogIn);
        setInputPasswordLogInValue(inputPasswordLogIn.value);
    });
};