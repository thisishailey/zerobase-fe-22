import { getTime, hour, minute, second } from "./CurrentTime.js";

const handClass = ['hour', 'minute', 'second']

export function createHandDiv(clock) {
    for (let i = 0; i < 3; i++) {
        const newHandDiv = document.createElement('div');
        newHandDiv.classList.add('hand', handClass[i]);
        clock.appendChild(newHandDiv);
    }
}

export function rotateHands(clock) {
    setInterval(() => {
        getTime();
        updateHands(clock);
    }, 1000);
}

function updateHands(clock) {
    clock.querySelector('.hand.hour').style.setProperty('--deg', (hour % 12) * (360 / 12));
    clock.querySelector('.hand.minute').style.setProperty('--deg', minute * (360 / 60));
    clock.querySelector('.hand.second').style.setProperty('--deg', second * (360 / 60));
}