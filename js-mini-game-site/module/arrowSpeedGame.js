import createCustomElement from "../utils/createElement.js";
import { timer, startTimer, stopTimer, isTimerStart } from "../utils/timer.js";
import { handleGameWin, handleGameLose } from "../utils/gameHandler.js";
import { ARROW_SPEED_SCORE } from "../constants/gameScore.js";
import setRetryEvent from "../utils/retryButton.js";

const NUMBER_OF_ARROWS = 8;

const retryButton = document.querySelector('#header .retry-button');
const arrowContainerElement = document.querySelector('#arrow-field');
const arrowElements = [];

const setArrowSpeedGame = () => {
    const arrows = [];

    for (let i = 0; i < NUMBER_OF_ARROWS; i++) {
        const arrowType = (Math.floor(Math.random() * 100) > 50) ? 'arrow-left' : 'arrow-right';
        arrows[i] = arrowType;
    }

    arrows.forEach(e => {
        const arrow = createCustomElement('span', { className: 'arrow' }, arrowContainerElement);
        arrow.classList.add(e);
        arrow.innerHTML = (e === 'arrow-left') ? '&lt;' : '&gt;';
        arrowElements.push(arrow);
    });

    setKeyboardEvent();
    setRetryEvent(retryButton);
}

const setKeyboardEvent = () => {
    let i = 0;
    const maxIdx = arrowElements.length - 1;

    window.onkeydown = (e) => {
        switch (e.key) {
            case 'ArrowLeft':
                arrowElements[i].innerHTML === '&lt;' ? correct() : wrong();
                break;
            case 'ArrowRight':
                arrowElements[i].innerHTML === '&gt;' ? correct() : wrong();
                break;
            default:
                if (isTimerStart) wrong();
                break;
        }
    }

    const correct = () => {
        arrowElements[i].style.color = 'green';
        if (i === 0) {
            startTimer(timer, handleGameLose);
        }
        if (i === maxIdx) {
            stopTimer;
            handleGameWin(ARROW_SPEED_SCORE);
            i = 0;
        }
        i++;
    }
    const wrong = () => {
        arrowElements[i].style.color = 'red';
        stopTimer(handleGameLose);
    }
}

export default setArrowSpeedGame;