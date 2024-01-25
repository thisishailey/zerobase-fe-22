import createCustomElement from "../utils/createElement.js";
import { getFormattedTime } from "../utils/timer.js";

const gameListContainer = document.querySelector('#game-list-container');

const getGameCard = (infoList) => {
    for (const info of infoList) {
        const card = createCustomElement('a', { className: 'game-card', href: info.href }, gameListContainer);

        createCustomElement('img', { src: info.src, alt: info.title }, card);
        if (info.new) createCustomElement('span', { className: 'game-new-badge', innerHTML: 'new' }, card);
        createCustomElement('div', { className: 'game-title', innerHTML: info.title }, card);

        const result = createCustomElement('div', { className: 'game-result', innerHTML: '도전해보세요!' }, card);
        const savedResult = Number(localStorage.getItem(info.storageKey));
        if (savedResult) result.innerHTML = '최고기록: ' + getFormattedTime(savedResult);
    }
}

export default getGameCard;