import { startTimer, stopTimer, isTimerStart } from "../utils/timer.js";
import handleOpenModal from "../utils/modal.js";
import { TOUCH_NUMBER_SCORE } from "../constants/gameScore.js";

const RAND_MIN_HEIGHT = 20;
const RAND_MAX_HEIGHT = 80;
const RAND_MIN_WIDTH = 10;
const RAND_MAX_WIDTH = 90;

const numberGameContainer = document.querySelector('#number-field');
const numberButtons = numberGameContainer.querySelectorAll('.number-button');
const timer = document.querySelector('.game-time');

const setTouchNumberGame = () => {
    numberButtons.forEach(e => {
        e.style.top = Math.floor(Math.random() * (RAND_MAX_HEIGHT - RAND_MIN_HEIGHT) + RAND_MIN_HEIGHT) + '%';
        e.style.left = Math.floor(Math.random() * (RAND_MAX_WIDTH - RAND_MIN_WIDTH) + RAND_MIN_WIDTH) + '%';
        e.onclick = (e) => {
            const number = Number(e.target.innerHTML);
            if (isNaN(number)) return;
            if (!isTimerStart && number === Number(numberButtons[0].innerHTML)) {
                numberChecker(number);
                e.target.style.display = 'none';
                startTimer(timer, handleGameLose);
            } else if (isTimerStart) {
                if (number === numberButtons.length && numberChecker()) {
                    e.target.style.display = 'none';
                    stopTimer(handleGameWin);
                } else {
                    if (!numberChecker(number)) stopTimer(handleGameLose);
                    e.target.style.display = 'none';
                }
            }
        }
    });
}

let clickedNum = [];
const numberChecker = (n) => {
    if (clickedNum.length === 0) {
        clickedNum.push(n);
        return true;
    } else if (clickedNum.length + 1 === numberButtons.length) {
        clickedNum = [];
        return true;
    } else {
        if (Number(clickedNum.slice(-1)) + 1 === n) {
            clickedNum.push(n);
            return true;
        } else {
            return false;
        }
    }
}

const handleGameWin = () => {
    handleOpenModal({ title: '성공 🥳', desc: `${timer.innerHTML}만에 성공하였습니다!` });
    const originalScore = localStorage.getItem(TOUCH_NUMBER_SCORE);
    if (!originalScore || timer.dataset.time < originalScore) {
        localStorage.setItem(TOUCH_NUMBER_SCORE, timer.dataset.time);
    }
}

const handleGameLose = () => {
    handleOpenModal({ title: '실패 😭', desc: '실패하였습니다...' });
}

export default setTouchNumberGame;