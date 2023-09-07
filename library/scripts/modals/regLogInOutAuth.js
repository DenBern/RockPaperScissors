export const regLogInOutAuth = () => {
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
    const btnSignUp = document.querySelector('.sign-up-btn-modal');
    const initials = document.querySelector('.initials');
    // const firstLastName = document.querySelector('.first-last');
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

    const cardNumberInput = document.getElementById('card-number');
    const expirationCodeMounth = document.getElementById('expiration-code-mounth');
    const expirationCodeYear = document.getElementById('expiration-code-year');
    const cardCvc = document.getElementById('card-cvc');

    let inputEmailCardLogInValue;
    let inputPasswordLogInValue;

    let currentUserCreditsLogged = {};
    let localStorageUsersCredits = [];
    let usersCredits = [];

    const newUserCredits = {
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
    };

    const hasRegisteredUsers = () => localStorage.getItem('usersCredits') ? true : false;

    const getLocalStorageUsersCredits = (registered) => {
        if (!registered) return;
        const getLocalCredits = localStorage.getItem('usersCredits');
        localStorageUsersCredits = JSON.parse(getLocalCredits);
    }

    const changeModalUserProfile = () => {
        initials.textContent = `${currentUserCreditsLogged.firstName[0].toUpperCase() + currentUserCreditsLogged.lastName[0].toUpperCase()}`;
        userFirstName.textContent = `${currentUserCreditsLogged.firstName}`;
        userLastName.textContent = `${currentUserCreditsLogged.lastName}`;
        visitsCount.textContent = `${currentUserCreditsLogged.visits}`;
        bonusesCount.textContent = `${currentUserCreditsLogged.bonuses}`;
        booksCount.textContent = `${currentUserCreditsLogged.books}`;
        userCardNumber.textContent = `${currentUserCreditsLogged.cardNumber}`
    }

    const changeProfileMenu = (registered) => {
        getLocalStorageUsersCredits(registered);
        currentUserCreditsLogged = localStorageUsersCredits.find(user => user.logged) || {};
        if(Object.keys(currentUserCreditsLogged).length && currentUserCreditsLogged.logged) {
            profileButton.style.background = 'none';
            profileButton.innerHTML = `<span class='user-logged'>
                ${currentUserCreditsLogged.firstName[0].toUpperCase() + currentUserCreditsLogged.lastName[0].toUpperCase()}
            </span>`;
            titleDropMenu.textContent = `${currentUserCreditsLogged.cardNumber}`;
            btnLogInDropMenu.remove();
            btnMyProfile.classList.add('btn-my-profile');
            btnMyProfile.textContent = 'My profile';
            btnsWrapper.appendChild(btnMyProfile);
            btnRegister.remove();
            btnLogOut.classList.add('log-out');
            btnLogOut.textContent = 'Log Out';
            btnsWrapper.appendChild(btnLogOut);
            profileButton.setAttribute('title',
                `${currentUserCreditsLogged.firstName.toUpperCase() + ' ' + currentUserCreditsLogged.lastName.toUpperCase()}`);
            changeModalUserProfile();
        } else {
            profileButton.style.background = '';
            profileButton.innerHTML = '';
        }
    }

    changeProfileMenu(hasRegisteredUsers());

    const changeColorBorderInput = (validation, input) => validation ? input.style.borderColor = '#228b22' : input.style.borderColor = '#ff6161';

    const resetColorBorderInput = (...inputs) => {
        inputs.forEach(input => input.style.borderColor = '');
    }

    const inputsValidation = (input) => {
        const minLengthFirstLastName = 1;
        const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const patterCardNumber = /^[0-9]{16}$/;
        const patterOnlyDigits = /^[0-9]{2}$/;
        const minLengthPassword = 8;
        switch (input.id) {
            case 'first-name':
                (changeColorBorderInput(input.value.length >= minLengthFirstLastName, input));
                break;
            case 'last-name':
                (changeColorBorderInput(input.value.length >= minLengthFirstLastName, input));
                break;
            case 'email':
                (changeColorBorderInput(patternEmail.test(input.value), input));
                break;
            case 'password':
                (changeColorBorderInput(input.value.length >= minLengthPassword, input));
                break;
            case 'card-number':
                (changeColorBorderInput(patterCardNumber.test(input.value), input));
                break;
            case 'expiration-code-mounth':
                (changeColorBorderInput(patterOnlyDigits.test(input.value), input));
                break;
            case 'expiration-code-year':
                (changeColorBorderInput(patterOnlyDigits.test(input.value), input));
                break;
            case 'card-cvc':
                (changeColorBorderInput(patterOnlyDigits.test(input.value), input));
                break;
            default:
                input.style.borderColor = '';
        }
    }

    formRegistrarion.addEventListener('submit', (event) => {
        event.preventDefault();
        const randomCardNumber = Math.floor(Math.random() * 1000000000);
        newUserCredits.cardNumber = randomCardNumber;
        newUserCredits.logged = true;
        newUserCredits.visits += 1;
        usersCredits = [...localStorageUsersCredits, newUserCredits];
        localStorage.setItem('usersCredits', JSON.stringify(usersCredits));
        formRegistrarion.reset();
        resetColorBorderInput(firstName, lastName, email, password);
        setTimeout(() => {
            wrapperModalReg.classList.remove('active-blackout');
            body.classList.remove('no-scroll');
            btnSignUp.style.background = '';
        }, 1000);
        changeProfileMenu(hasRegisteredUsers());
        btnSignUp.style.background = '#32CD32';
        btnSignUp.textContent = 'Welcome!';
    });

    const userLogOut = () => {
        localStorageUsersCredits.map(user => {
            if (user.logged) {
                user.logged = false;
                localStorage.setItem('usersCredits', JSON.stringify(localStorageUsersCredits));
                changeProfileMenu(localStorageUsersCredits.logged);
                btnLogOut.remove();
                btnMyProfile.remove();
                btnsWrapper.appendChild(btnLogInDropMenu);
                btnsWrapper.appendChild(btnRegister);
                titleDropMenu.textContent = 'Profile';
            }
        })
    };

    //Event listeners

    btnSignUpcards.addEventListener('click', () => {
        wrapperModalReg.classList.add('active-blackout');
        body.classList.add('no-scroll');
    })

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
        newUserCredits.firstName = firstName.value;
        inputsValidation(firstName);
    });

    lastName.addEventListener('input', () => {
        newUserCredits.lastName = lastName.value;
        inputsValidation(lastName);
    });

    email.addEventListener('input', () => {
        newUserCredits.email = email.value;
        inputsValidation(email);
    });

    password.addEventListener('input', () => {
        newUserCredits.password = password.value;
        inputsValidation(password);
    });

    if (btnLogIn) {
        btnLogIn.addEventListener('click', () => {
            wrapperModalLogIn.classList.add('active-blackout');
            body.classList.add('no-scroll');
        });
    }

    if (btnRegister) {
        btnRegister.addEventListener('click', () => {
            wrapperModalReg.classList.add('active-blackout');
            body.classList.add('no-scroll');
        });
    }

    btnCloseModalLogIn.addEventListener('click', () => {
        wrapperModalLogIn.classList.remove('active-blackout');
        body.classList.remove('no-scroll');
    });

    btnCloseModalBuycard.addEventListener('click', () => {
        modalBuyCard.classList.remove('active-blackout');
        body.classList.remove('no-scroll');
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
    });

    expirationCodeYear.addEventListener('input',
    function () {
        this.value = this.value.replace(/[^\d.]/g, '');
        inputsValidation(expirationCodeYear);
    });

    cardCvc.addEventListener('input',
        function () {
            this.value = this.value.replace(/[^\d.]/g, '');
            inputsValidation(cardCvc);
    });

    btnLogInCards.addEventListener('click', () => {
        wrapperModalLogIn.classList.add('active-blackout');
        body.classList.add('no-scroll');
    });

    buyBtns.forEach(buy => buy.addEventListener('click', (event) => {
        if (!hasRegisteredUsers()) {
            wrapperModalReg.classList.add('active-blackout');
            body.classList.add('no-scroll');
        };
        currentUserCreditsLogged = localStorageUsersCredits.find(user => user.logged);

        if (!currentUserCreditsLogged) {
            wrapperModalLogIn.classList.add('active-blackout');
            body.classList.add('no-scroll');
        }

        if (currentUserCreditsLogged) {
            if (currentUserCreditsLogged.logged && !currentUserCreditsLogged.subscription) {
                modalBuyCard.classList.add('active-blackout')
                body.classList.add('no-scroll');
            } else if (currentUserCreditsLogged.subscription && currentUserCreditsLogged.logged) {
                buy.classList.add('own');
                buy.textContent = 'Own';
                buy.setAttribute('disabled', '');
            } else {
                wrapperModalLogIn.classList.add('active-blackout');
                body.classList.add('no-scroll');
            }
        }
    }))

    btnMyProfile.addEventListener('click', () => {
        menuAuthorization.classList.remove('active-profile-menu');
        modalUserProfile.classList.add('active-blackout');
        body.classList.add('no-scroll');
    });

    btnCloseUserProfile.addEventListener('click', () => {
        modalUserProfile.classList.remove('active-blackout');
        body.classList.remove('no-scroll');
    });

    btnLogOut.addEventListener('click', () => userLogOut());

    inputEmailCardLogIn.addEventListener('input', () => {
        changeColorBorderInput(inputEmailCardLogIn.value.length >= 1, inputEmailCardLogIn);
        inputEmailCardLogInValue = inputEmailCardLogIn.value;
    });

    inputPasswordLogIn.addEventListener('input', () => {
        changeColorBorderInput(inputPasswordLogIn.value.length >= 8, inputPasswordLogIn);
        inputPasswordLogInValue = inputPasswordLogIn.value;
    });

    //Event listeners end

    formLogIn.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!hasRegisteredUsers()) {
            return alert('User not registered');
        };

        currentUserCreditsLogged = localStorageUsersCredits.find(user =>
            (user.email === inputEmailCardLogInValue || user.cardNumber === +inputEmailCardLogInValue)
                &&
            (user.password === inputPasswordLogInValue)
        );

        if (!currentUserCreditsLogged) {
            return alert('Check email / readers card or password');
        }

        if (Object.keys(currentUserCreditsLogged).length) {
            localStorageUsersCredits.map(user => {
                if (user === currentUserCreditsLogged) {
                    user.logged = true;
                    user.visits += 1;
                    localStorage.setItem('usersCredits', JSON.stringify(localStorageUsersCredits));
                    changeProfileMenu(hasRegisteredUsers());
                    changeProfileMenu(hasRegisteredUsers());
                    formLogIn.reset();
                    resetColorBorderInput(inputEmailCardLogIn, inputPasswordLogIn);
                    setTimeout(() => {
                        wrapperModalLogIn.classList.remove('active-blackout');
                        body.classList.remove('no-scroll');
                        btnLogInModal.style.background = '';
                    }, 1000);
                    btnLogInModal.style.background = '#32CD32';
                    btnLogInModal.textContent = 'Welcome!';
                }
            })
        }
    })

    formCardDetails.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(currentUserCreditsLogged)
        localStorageUsersCredits.map(user => {
            if (user.logged && !user.subscription) {
                user.subscription = true;
                localStorage.setItem('usersCredits', JSON.stringify(localStorageUsersCredits));
                setTimeout(() => {
                    modalBuyCard.classList.remove('active-blackout');
                    btnBuyCard.style.background = '';
                    body.classList.remove('no-scroll');
                }, 1000);
                btnBuyCard.style.background = '#32CD32';
                btnBuyCard.textContent = 'Done!';
            }
        })
    });
}