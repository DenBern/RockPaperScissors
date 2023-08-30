export const modalRegister = () => {
    const btnRegister = document.querySelector('.register');
    const btnCloseModal = document.querySelector('.btn-close-modal');
    const wrapperModalReg = document.querySelector('.wrapper-modal-register')

    btnRegister.addEventListener('click', () => {
        wrapperModalReg.classList.add('active-blackout')
    });

    btnCloseModal.addEventListener('click', () => {
        wrapperModalReg.classList.remove('active-blackout')
    })
}