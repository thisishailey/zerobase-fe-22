import retryEvent from "./retryButton.js";

const modalElement = document.querySelector('.modal');
const [modalTitle, modalDesc, modalButtons] = modalElement.children;
const [homeButton, retryButton] = modalButtons.children;

const handleOpenModal = (info) => {
    modalElement.classList.add('open');
    modalTitle.innerHTML = info.title;
    modalDesc.innerHTML = info.desc;
    retryEvent(retryButton);
}

export default handleOpenModal