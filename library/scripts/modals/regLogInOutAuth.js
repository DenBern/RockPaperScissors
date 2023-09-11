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

    let inputEmailCardLogInValue;
    let inputPasswordLogInValue;
    let inputReadersNameValue;
    let inputReadersCardNumberValue;

    let currentUserCreditsLogged = {};
    let localStorageUsersCredits = [];
    let usersCredits = [];
    let checkCardCredits = {};

    let newRentedBook = {
        bookName: '',
        bookAuthor: '',
        btnDisabled: true,
    }

    let userRentedBooks = [];

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

    const generateCardNumber = () => {
        let cardNumber = '';
        for (let i = 0; i < 9; i++) {
            const randomDigit = Math.floor(Math.random() * 16);
            const hexDigit = randomDigit.toString(16);
            cardNumber += hexDigit;
        }
        return cardNumber.toUpperCase();
    }

    const hasRegisteredUsers = () => localStorage.getItem('usersCredits') ? true : false;

    const getLocalStorageUsersCredits = (registered) => {
        if (!registered) return;
        const getLocalCredits = localStorage.getItem('usersCredits');
        localStorageUsersCredits = JSON.parse(getLocalCredits);
    }

    const changeBtns = () => {
        getLocalStorageUsersCredits(hasRegisteredUsers());
        localStorageUsersCredits.find(user => {
            if (user.logged) {
                userRentedBooks = user.rentedBooks;
            }
            if (userRentedBooks.length) {
                userRentedBooks.forEach(book => {
                    buyBtns.forEach(buy => {
                        let name = buy.parentElement.childNodes[1].childNodes[3].childNodes[1].textContent.trim().toLocaleLowerCase();
                        if (book.bookName.toLowerCase() === name) {
                            buy.classList.add('book-own');
                            buy.textContent = 'Own';
                            buy.setAttribute('disabled', '');
                        }
                    })
                })
            }
        })
    }

    const checkCard = () => {
        if (!hasRegisteredUsers()) return;
        getLocalStorageUsersCredits(hasRegisteredUsers())
        checkCardCredits = localStorageUsersCredits.find(user => user.firstName === inputReadersNameValue) || {};
        if (!Object.keys(checkCardCredits).length) {
            return alert('Check user name or card number')
        }

        if (checkCardCredits.firstName === inputReadersNameValue && checkCardCredits.cardNumber === inputReadersCardNumberValue) {
            findLibraryCard.style.display = 'none';
            checkDetails.style.display = 'flex';
            readersName.setAttribute('disabled', '');
            readersCardNumber.setAttribute('disabled', '');
            checkVisitsCount.textContent = `${checkCardCredits.visits}`;
            checkBooksCount.textContent = `${checkCardCredits.books}`;
            checkBonusesCount.textContent = `${checkCardCredits.bonuses}`;
            setTimeout(() => {
                findLibraryCard.style.display = 'block';
                checkDetails.style.display = 'none';
                readersName.removeAttribute('disabled')
                readersCardNumber.removeAttribute('disabled')
                readersName.value = '';
                readersCardNumber.value = '';
                inputReadersNameValue = '';
                inputReadersCardNumberValue = '';
                checkCardCredits = {};
            }, 10000)
        } else {
            alert('Check user name or card number');
        }
    }

    const changeCard = () => {
        getLocalStorageUsersCredits(hasRegisteredUsers());
        localStorageUsersCredits.forEach(user => {
            if (user.logged) {
                checkVisitsCount.textContent = `${user.visits}`;
                checkBooksCount.textContent = `${user.books}`;
                checkBonusesCount.textContent = `${user.bonuses}`;
                findLibraryCard.style.display = 'none';
                checkDetails.style.display = 'flex';
                readersName.value = user.firstName + ' ' + user.lastName;
                readersCardNumber.value = user.cardNumber;
                readersName.setAttribute('disabled', '');
                readersCardNumber.setAttribute('disabled', '');
                readersName.style.color = '#BB945F';
                readersCardNumber.style.color = '#BB945F';
                cardTitle.textContent = 'Visit your profile';
                cardText.textContent = `With a digital library card you get free access
                                        to the Library’s wide array of digital resources
                                        including e-books, databases, educational resources,
                                        and more.`;
                btnProfileCard.style.display = 'block';
                btnLogInCards.style.display = 'none';
                btnSignUpcards.style.display = 'none';
                cardTitleFind.textContent = 'Your Library card';
            }
        })
    }

    changeCard();

    const changeModalUserProfile = () => {
        initials.textContent = `${currentUserCreditsLogged.firstName[0].toUpperCase() + currentUserCreditsLogged.lastName[0].toUpperCase()}`;
        userFirstName.textContent = `${currentUserCreditsLogged.firstName}`;
        userLastName.textContent = `${currentUserCreditsLogged.lastName}`;
        visitsCount.textContent = `${currentUserCreditsLogged.visits}`;
        bonusesCount.textContent = `${currentUserCreditsLogged.bonuses}`;
        booksCount.textContent = `${currentUserCreditsLogged.books}`;
        userCardNumber.textContent = `${currentUserCreditsLogged.cardNumber}`
    }

    const renderRentedBooks = () => {
        getLocalStorageUsersCredits(hasRegisteredUsers());
        localStorageUsersCredits.find(user => {
            if (user.logged) {
                userRentedBooks = user.rentedBooks;
            }
        })
        if (userRentedBooks) {
            booksList.innerHTML = '';
            userRentedBooks.forEach(book => {
                booksList.innerHTML += `<li class="rented-book">
                    ${book.bookName.trim().toLowerCase() + ',' + book.bookAuthor.toLowerCase()}
                </li>`
            })
        }
    }

    const changeProfileMenu = (registered) => {
        getLocalStorageUsersCredits(registered);
        currentUserCreditsLogged = localStorageUsersCredits.find(user => user.logged) || {};
        if (Object.keys(currentUserCreditsLogged).length && currentUserCreditsLogged.logged) {
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
            renderRentedBooks();
            changeBtns();
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
        const experationCodeLength = 2;
        const cvcLength = 3;
        const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const patterCardNumber = /^[0-9]{16}$/;
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
                (changeColorBorderInput(input.value.length === experationCodeLength, input));
                break;
            case 'expiration-code-year':
                (changeColorBorderInput(input.value.length === experationCodeLength, input));
                break;
            case 'card-cvc':
                (changeColorBorderInput(input.value.length === cvcLength, input));
                break;
            default:
                input.style.borderColor = '';
        }
    }

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
                buyBtns.forEach(buy => {
                    buy.classList.remove('book-own')
                    buy.classList.add('book-buy');
                    buy.textContent = 'Buy';
                    buy.removeAttribute('disabled');
                })
            }
        })
        formCard.reset();
        findLibraryCard.style.display = 'block';
        checkDetails.style.display = 'none';
        readersName.removeAttribute('disabled')
        readersCardNumber.removeAttribute('disabled')
        readersName.style.color = '#BB945F';
        readersCardNumber.style.color = '#BB945F';
        cardTitle.textContent = 'Get a reader card';
        cardText.textContent = `You will be able to see a reader card after logging
                                into account or you can register a new account`;
        btnProfileCard.style.display = 'none';
        btnLogInCards.style.display = 'block';
        btnSignUpcards.style.display = 'block';
        cardTitleFind.textContent = 'Find your Library card';
    };

    //Event listeners

    readersName.addEventListener('input', () => {
        inputReadersNameValue = readersName.value;
        inputsValidation(readersName);
    })

    readersCardNumber.addEventListener('input', () => {
        inputReadersCardNumberValue = readersCardNumber.value;
        inputsValidation(readersCardNumber);
    })

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
        formCardDetails.reset();
        resetColorBorderInput(cardNumberInput, expirationCodeMounth, expirationCodeYear, cardCvc)
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
    })

    buyBtns.forEach(buy => buy.addEventListener('click', (event) => {
        currentUserCreditsLogged = localStorageUsersCredits.find(user => user.logged) || {};
        if (!hasRegisteredUsers()) {
            wrapperModalReg.classList.add('active-blackout');
            body.classList.add('no-scroll');
        } else if (hasRegisteredUsers() && !Object.keys(currentUserCreditsLogged).length) {
            wrapperModalLogIn.classList.add('active-blackout');
            body.classList.add('no-scroll');
        }

        localStorageUsersCredits.find(user => {
            if (user.logged) {
                userRentedBooks = user.rentedBooks;
            }
        })

        if (currentUserCreditsLogged && currentUserCreditsLogged.logged) {
            if (currentUserCreditsLogged.logged && !currentUserCreditsLogged.subscription) {
                modalBuyCard.classList.add('active-blackout')
                body.classList.add('no-scroll');
            } else if (currentUserCreditsLogged.subscription && currentUserCreditsLogged.logged) {
                let book = event.target.parentNode;
                let btnBook = event.target;
                let getBookName = book.childNodes[1].childNodes[3].childNodes[1].outerText;
                let getBookAuthor = book.childNodes[1].childNodes[3].childNodes[3].childNodes[2].textContent;
                btnBook.classList.add('book-own');
                btnBook.textContent = 'Own';
                btnBook.setAttribute('disabled', '');
                newRentedBook.bookName = getBookName;
                newRentedBook.bookAuthor = getBookAuthor;
                localStorageUsersCredits.map(user => {
                    if (user === currentUserCreditsLogged) {
                        user.books += 1;
                        user.rentedBooks = [...userRentedBooks, newRentedBook];
                        localStorage.setItem('usersCredits', JSON.stringify(localStorageUsersCredits));
                        changeProfileMenu(hasRegisteredUsers);
                        renderRentedBooks();
                        changeCard();
                    }
                })
            } else {
                wrapperModalLogIn.classList.add('active-blackout');
                body.classList.add('no-scroll');
            }
        }
    }));

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

    //Forms

    formRegistrarion.addEventListener('submit', (event) => {
        event.preventDefault();
        const randomCardNumber = generateCardNumber();
        const randomBonuses = Math.floor(Math.random() * 1000);
        newUserCredits.cardNumber = randomCardNumber;
        newUserCredits.logged = true;
        newUserCredits.visits = 1;
        newUserCredits.bonuses = randomBonuses;
        usersCredits = [...localStorageUsersCredits, newUserCredits];
        localStorage.setItem('usersCredits', JSON.stringify(usersCredits));
        formRegistrarion.reset();
        resetColorBorderInput(firstName, lastName, email, password);
        setTimeout(() => {
            wrapperModalReg.classList.remove('active-blackout');
            body.classList.remove('no-scroll');
            btnSignUp.style.background = '';
            btnSignUp.textContent = 'Sign Up!';
        }, 1000);
        changeProfileMenu(hasRegisteredUsers());
        btnSignUp.style.background = '#32CD32';
        btnSignUp.textContent = 'Welcome!';
        changeBtns();
        changeCard();
    });

    formLogIn.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!hasRegisteredUsers()) {
            return alert('User is not registered');
        };

        currentUserCreditsLogged = localStorageUsersCredits.find(user =>
            (user.email === inputEmailCardLogInValue || user.cardNumber === inputEmailCardLogInValue) &&
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
                        btnLogInModal.textContent = 'Log In!';
                    }, 1000);
                    btnLogInModal.style.background = '#32CD32';
                    btnLogInModal.textContent = 'Welcome!';
                    changeBtns();
                    changeCard();
                }
            })
        }
    });

    formCardDetails.addEventListener('submit', (event) => {
        event.preventDefault();
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

    formCard.addEventListener('submit', (event) => {
        event.preventDefault();
        checkCard();
    })
}