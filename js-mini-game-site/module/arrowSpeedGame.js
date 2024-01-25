import createCustomElement from "../utils/createElement.js";
import { startTimer, stopTimer, isTimerStart } from "../utils/timer.js";
import handleOpenModal from "../utils/modal.js";
import { ARROW_SPEED_SCORE } from "../constants/gameScore.js";
import retryEvent from "../utils/retryButton.js";

const NUMBER_OF_ARROWS = 8;

const retryButton = document.querySelector('#header .retry-button');
const arrowContainer = document.querySelector('#arrow-field');
let arrows;

const setArrowSpeedGame = () => {
    arrows = [];

    for (let i = 0; i < NUMBER_OF_ARROWS; i++) {
        const arrowType = (Math.floor(Math.random() * 100) > 50) ? 'arrow-left' : 'arrow-right';
        arrows[i] = arrowType;
    }

    arrows.forEach(e => {
        const arrow = createCustomElement('span', { className: 'arrow' }, arrowContainer);
        arrow.classList.add(e);
        arrow.innerHTML = (e === 'arrow-left') ? '&lt;' : '&gt;';
    })

    retryEvent(retryButton);
}

export default setArrowSpeedGame;