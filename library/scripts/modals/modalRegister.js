export const modalRegister = () => {
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
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const formRegistartion = document.getElementById('form-registration');
    const btnSignUp = document.querySelector('.sign-up-btn-modal');

    const userIsRegistered = () => localStorage.getItem('userCredits') ? true : false;
    let userCreditsStorage = {};

    userIsRegistered();

    const getLocalStorageUserCredits = (registered) => {
        if(!registered) return;
        const getLocalCredits = localStorage.getItem('userCredits');
        userCreditsStorage = JSON.parse(getLocalCredits);
    }

    const userCredits = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cardNumber: '',
        logged: false,
    }

    const setTooltip = () => {
        getLocalStorageUserCredits(userIsRegistered());
        if (userCreditsStorage.logged) {
            profileButton.setAttribute('title', `${userCreditsStorage.firstName + ' ' + userCreditsStorage.lastName}`);
        }
    }

    setTooltip();

    const changeProfileMenu = (registered) => {
        if (!registered) return;
        getLocalStorageUserCredits(registered);
        if (userCreditsStorage.logged) {
            profileButton.style.background = 'none';
            profileButton.innerHTML = `<span class='user-logged'>
                ${userCreditsStorage.firstName[0].toUpperCase() + userCreditsStorage.lastName[0].toUpperCase()}
            </span>`;
            titleDropMenu.textContent = `${userCreditsStorage.cardNumber}`;
            btnLogInDropMenu.textContent = 'My profile';
            btnLogInDropMenu.classList.remove('log-in');
            btnLogInDropMenu.classList.add('btn-my-profile');
            btnRegister.textContent = 'Log Out';
            btnRegister.classList.remove('register');
            btnRegister.classList.add('log-out')
        }
    }

    changeProfileMenu(userIsRegistered());

    profileButton.addEventListener('mouseover', () => {
        profileButton.getAttribute('title');
    });

    profileButton.addEventListener('click', () => {
        menuAuthorization.classList.add('active-profile-menu');
    });

    btnCloseModalRegistration.addEventListener('click', () => {
        formRegistartion.reset();
        resetColorBorderInput(firstName, lastName, email, password)
        wrapperModalReg.classList.remove('active-blackout');
    });

    btnSignUp.addEventListener('click', () => {
        wrapperModalReg.classList.add('active-blackout');
    });

    btnSignUpcards.addEventListener('click', () => {
        wrapperModalReg.classList.add('active-blackout');
    })

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
        event.preventDefault();
        const randomCardNumber = Math.floor(Math.random() * 1000000000);
        userCredits.cardNumber = randomCardNumber;
        userCredits.logged = true;
        localStorage.setItem('userCredits', JSON.stringify(userCredits));
        formRegistartion.reset();
        resetColorBorderInput(firstName, lastName, email, password);
        setTimeout(() => {
            wrapperModalReg.classList.remove('active-blackout');
        }, 1000);
        getLocalStorageUserCredits(userIsRegistered());
        changeProfileMenu(userCredits.logged);
        setTooltip();
        document.location.reload();
    });

    // User logged

    const btnMyProfile = document.querySelector('.btn-my-profile');
    const btnLogOut = document.querySelector('.log-out');


    if (btnMyProfile) {
        btnMyProfile.addEventListener('click', () => {
        console.log('show profile')
        })
    }

    if (btnLogOut) {
        btnLogOut.addEventListener('click', () => {
            console.log(userCreditsStorage)
            userCreditsStorage.logged = false;
            localStorage.setItem('userCredits', JSON.stringify(userCredits));
            setTooltip();
            changeProfileMenu(userCreditsStorage.logged);
            document.location.reload();
        })
    }
}
