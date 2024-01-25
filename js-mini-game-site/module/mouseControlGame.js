import createCustomElement from "../utils/createElement.js";
import { startTimer, stopTimer, isTimerStart } from "../utils/timer.js";
import handleOpenModal from "../utils/modal.js";
import { MOUSE_CONTROL_SCORE } from "../constants/gameScore.js";

const timer = document.querySelector('.game-time');

const setMouseControlGame = (row, col, start, end, walls) => {
    const boxContainer = createCustomElement('div', { id: 'control-box-container' }, document.querySelector('#game-field'));

    boxContainer.style.display = 'grid';
    boxContainer.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    boxContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    boxContainer.onmouseleave = (e) => {
        if (!isTimerStart) return;
        stopTimer(handleGameLose);
    }

    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            const box = createCustomElement('div', { className: 'control-box', id: `box-${i}-${j}` }, boxContainer);
            if (i === start[0] && j === start[1]) {
                box.classList.add('start');
                box.innerHTML = 'start';
                box.onmouseover = (e) => {
                    e.target.innerHTML = '';
                    startTimer(timer, handleGameLose);
                }
            } else if (i === end[0] && j === end[1]) {
                box.classList.add('end');
                box.innerHTML = 'finish';
                box.onmouseover = (e) => {
                    if (!isTimerStart) return;
                    e.target.innerHTML = '';
                    stopTimer(handleGameWin);
                }
            }
            walls.forEach(wall => {
                if (i === wall[0] && j === wall[1]) {
                    box.classList.add('wall');
                    box.onmouseover = (e) => {
                        if (!isTimerStart) return;
                        e.target.innerHTML = '';
                        stopTimer(handleGameLose);
                    }
                    return;
                }
            });
            if (box.classList.length === 1) {
                box.onmouseover = (e) => {
                    if (!isTimerStart) return;
                    e.target.style.background = 'linen';
                }
            }
        }
    }
}

const handleGameWin = () => {
    handleOpenModal({ title: '성공 🥳', desc: `${timer.innerHTML}만에 성공하였습니다!` });
    const originalScore = localStorage.getItem(MOUSE_CONTROL_SCORE);
    if (!originalScore || timer.dataset.time < originalScore) {
        localStorage.setItem(MOUSE_CONTROL_SCORE, timer.dataset.time);
    }
}

const handleGameLose = () => {
    handleOpenModal({ title: '실패 😭', desc: '실패하였습니다...' });
}

export default setMouseControlGame;