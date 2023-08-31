export const modalRegister = () => {
    const btnRegister = document.querySelector('.register');
    const btnCloseModal = document.querySelector('.btn-close-modal');
    const btnSignUp = document.querySelector('.sign-up-btn');
    const wrapperModalReg = document.querySelector('.wrapper-modal-register');
    const btnSignUpModalReg = document.querySelector('.sign-up-btn-modal');

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const formRegistartion = document.getElementById('formRegistration')

    const userCredits = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }

    btnRegister.addEventListener('click', () => {
        wrapperModalReg.classList.add('active-blackout');
    });

    btnCloseModal.addEventListener('click', () => {
        wrapperModalReg.classList.remove('active-blackout');
    });

    btnSignUp.addEventListener('click', () => {
        wrapperModalReg.classList.add('active-blackout');
    });

    firstName.addEventListener('input', () => {
        userCredits.firstName = firstName.value;
        if (firstName.value.length) {
            firstName.style.borderColor = '#228b22';
        } else {
            firstName.style.borderColor = '';
        }
    });

    lastName.addEventListener('keyup', () => {
        userCredits.lastName = lastName.value;
        if (lastName.value.length) {
            lastName.style.borderColor = '#228b22';
        } else {
            lastName.style.borderColor = '';
        }
    });

    email.addEventListener('keyup', () => {
        userCredits.email = email.value;
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (pattern.test(email.value)) {
            email.style.borderColor = '#228b22';
        } else {
            email.style.borderColor = '';
        }
    });

    password.addEventListener('keyup', () => {
        userCredits.password = password.value;
        if (password.value.length >= 8) {
            password.style.borderColor = '#228b22';
        } else {
            password.style.borderColor = '';
        }
    });

    formRegistartion.addEventListener('submit', () => {
        localStorage.setItem('userCredits', JSON.stringify(userCredits));
        // event.preventDefault();
    });
}
