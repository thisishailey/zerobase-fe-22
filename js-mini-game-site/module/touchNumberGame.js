import { timer, startTimer, stopTimer, isTimerStart } from "../utils/timer.js";
import { handleGameWin, handleGameLose } from "../utils/gameHandler.js";
import { TOUCH_NUMBER_SCORE } from "../constants/gameScore.js";

const RAND_MIN_HEIGHT = 20;
const RAND_MAX_HEIGHT = 80;
const RAND_MIN_WIDTH = 10;
const RAND_MAX_WIDTH = 90;

const numberGameContainer = document.querySelector('#number-field');
const numberButtons = numberGameContainer.querySelectorAll('.number-button');
const retryButton = document.querySelector('#header .retry-button');

const setTouchNumberGame = () => {
    numberButtons.forEach(e => {
        e.style.top = Math.floor(Math.random() * (RAND_MAX_HEIGHT - RAND_MIN_HEIGHT) + RAND_MIN_HEIGHT) + '%';
        e.style.left = Math.floor(Math.random() * (RAND_MAX_WIDTH - RAND_MIN_WIDTH) + RAND_MIN_WIDTH) + '%';
        e.style.display = 'block';
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
                    handleGameWin(TOUCH_NUMBER_SCORE);
                    stopTimer();
                } else {
                    if (!numberChecker(number)) stopTimer(handleGameLose);
                    e.target.style.display = 'none';
                }
            }
        }
    });
    retryButton.onclick = () => {
        location.reload();
    }
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

export default setTouchNumberGame;