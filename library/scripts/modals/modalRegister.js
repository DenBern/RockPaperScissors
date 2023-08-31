export const modalRegister = () => {
    const btnRegister = document.querySelector('.register');
    const btnCloseModal = document.querySelector('.btn-close-modal');
    const wrapperModalReg = document.querySelector('.wrapper-modal-register');
    const profileButton = document.querySelector('.link-user');
    const menuAuthorization = document.querySelector('.wrapper-menu-auth');

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const formRegistartion = document.getElementById('form-registration');
    const btnSignUp = document.querySelector('.sign-up-btn-modal');

    let userCreditsLocalStorage = localStorage.getItem('userCredits');
    const userIsRegistered = (userCreditsLocalStorage) => userCreditsLocalStorage ? true : false;

    const getLocalStorageUserCredits = () => {
        if (!userIsRegistered(userCreditsLocalStorage)) return;
        const userCreditsParse = JSON.parse(userCreditsLocalStorage);
        profileButton.style.background = 'none';
        profileButton.innerHTML = `<span class='user-logged'>${userCreditsParse.firstName[0].toUpperCase() + userCreditsParse.lastName[0].toUpperCase()}</span>`
    }

    getLocalStorageUserCredits();

    const userCredits = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cardNumber: '',
    }

    profileButton.addEventListener('click', () => [
        userIsRegistered(userCreditsLocalStorage)
        ? console.log('true')
        : menuAuthorization.classList.toggle('active-profile')
    ]);

    btnRegister.addEventListener('click', () => {
        wrapperModalReg.classList.add('active-blackout');
    });

    btnCloseModal.addEventListener('click', () => {
        formRegistartion.reset();
        resetColorBorderInput(firstName, lastName, email, password)
        wrapperModalReg.classList.remove('active-blackout');
    });

    btnSignUp.addEventListener('click', () => {
        wrapperModalReg.classList.add('active-blackout');
    });

    firstName.addEventListener('input', () => {
        userCredits.firstName = firstName.value;
        inputsValidation(firstName);
    });

    lastName.addEventListener('input', () => {
        userCredits.lastName = lastName.value;
        inputsValidation(lastName);
    });

    email.addEventListener('input', () => {
        userCredits.email = email.value;
        inputsValidation(email);
    });

    password.addEventListener('input', () => {
        userCredits.password = password.value;
        inputsValidation(password);
    });

    const changeColorBorderInput = (validation, input) => validation ? input.style.borderColor = '#228b22': input.style.borderColor = '#ff6161';

    const resetColorBorderInput = (...inputs) => {
        inputs.forEach( input => input.style.borderColor = '');
    }

    const inputsValidation = (input) => {
        const minLengthFirstLastName = 1;
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const minLengthPassword = 8;
        switch (input.id) {
            case 'first-name':
                (changeColorBorderInput(input.value.length >= minLengthFirstLastName, input))
                break;
            case 'last-name':
                (changeColorBorderInput(input.value.length >= minLengthFirstLastName, input))
                break;
            case 'email':
                (changeColorBorderInput(pattern.test(input.value), input))
                break;
            case 'password':
                (changeColorBorderInput(password.value.length >= minLengthPassword, input))
                break;
            default:
                input.style.borderColor = '';
        }
    }

    formRegistartion.addEventListener('submit', (event) => {
        const randomCardNumber = Math.floor(Math.random() * 100000000);
        userCredits.cardNumber = randomCardNumber;
        localStorage.setItem('userCredits', JSON.stringify(userCredits));
        userCreditsLocalStorage = localStorage.getItem('userCredits');
        userIsRegistered(userCreditsLocalStorage);
        formRegistartion.reset();
        resetColorBorderInput(firstName, lastName, email, password);
        setTimeout(() => {
            wrapperModalReg.classList.remove('active-blackout');
        }, 700);
        getLocalStorageUserCredits(userIsRegistered);
        event.preventDefault();
    });
}
