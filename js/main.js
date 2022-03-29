const modalWindow = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
const buttonModals = document.querySelectorAll(".modal__button");
const body = document.querySelector('body');
buttonModals.forEach((item) => {
    item.addEventListener('click',() => {
        modalWindow.style.display = 'flex';
        body.classList.add('noscsrol');
    });
});
modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');

    if(!isModal) {
        modalWindow.style.display = 'none';
        body.classList.remove('noscsrol');
    }
});
modalClose.addEventListener('click', () =>{
    modalWindow.style.display = 'none';
    body.classList.remove('noscsrol');
})