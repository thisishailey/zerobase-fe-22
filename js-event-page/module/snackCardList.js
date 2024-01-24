import createCustomElement from "../utils/createElement.js";
import SELECTED_SNACK from "../constants/selectedSnack.js";
import getResultContainer from "./snackResult.js";

const snackCardInfo = [
    {
        id: 1,
        src: './public/assets/choco.jpeg',
        name: '초코꼬북칩',
        desc: '맛있는 초코꼬북칩'
    },
    {
        id: 2,
        src: './public/assets/nacho.jpeg',
        name: '나쵸',
        desc: '맛있는 나쵸'
    },
    {
        id: 3,
        src: './public/assets/honeyButter.jpeg',
        name: '허니버터칩',
        desc: '맛있는 허니버터칩'
    },
    {
        id: 4,
        src: './public/assets/homeRun.jpeg',
        name: '홈런볼',
        desc: '맛있는 홈런볼'
    },
]

const parentNode = document.querySelector('#participate-section');
const siblingNode = document.querySelector('.participate-button');


// ------ main function ------ //

const getSnackCardList = () => {
    const snackCardList = createCustomElement('div', { className: 'snack-card-list', onclick: (e) => setSelectEvent(e) }, false);
    parentNode.insertBefore(snackCardList, siblingNode);
    getSnackCard(snackCardInfo, snackCardList);
    setSubmitEvent(parentNode.querySelector('.participate-button'), snackCardList, snackCardInfo);
}


// ------ functions for getSnackCardList ------ //

const getSnackCard = (info, parentNode) => {
    info.forEach(e => {
        const card = createCustomElement('button', { className: 'snack-card', id: 'select-' + e.id }, parentNode);
        const selectedCard = Number(localStorage.getItem(SELECTED_SNACK));
        if (selectedCard) {
            if (e.id === selectedCard) { card.classList.add('select'); getResultContainer(selectedCard, info); }
        }
        createCustomElement('img', { src: e.src, alt: e.name }, card);
        const cardDesc = createCustomElement('div', { className: 'snack-description' }, card);
        createCustomElement('div', { innerHTML: e.name }, cardDesc);
        createCustomElement('div', { innerHTML: e.desc }, cardDesc);
    });
}

const setSelectEvent = (e) => {
    if (e.target === e.currentTarget) return;
    e.currentTarget.querySelector('.select')?.classList.remove('select');
    e.target.closest('button.snack-card').classList.add('select');
}

const setSubmitEvent = (btn, list, info) => {
    btn.onclick = () => {
        const selectedCard = list.querySelector('.select');
        if (!selectedCard) { alert('선택된 카드가 없습니다.'); return; }
        const selectedID = selectedCard.id.split('-')[1];
        localStorage.setItem(SELECTED_SNACK, selectedID);
        getResultContainer(selectedID, info);
    }
}

export default getSnackCardList;