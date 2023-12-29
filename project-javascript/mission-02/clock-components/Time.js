export function createTimeDiv(clock) {
    for (let i = 1; i < 13; i++) {
        const newTimeDiv = document.createElement('div');
        styleTimeContainer(newTimeDiv);
        newTimeDiv.classList.add('time', `time${i}`);
        const newTimeElem = document.createElement('div');
        styleTimeElement(newTimeElem);
        newTimeDiv.appendChild(newTimeElem);
        clock.appendChild(newTimeDiv);
    }
}

function styleTimeContainer(timeContainer) {
    timeContainer.style.display = 'flex';
    timeContainer.style.flexDirection = 'column';
    timeContainer.style.alignItems = 'center';
}

function styleTimeElement(timeElement) {
    timeElement.style.width = '2px';
    timeElement.style.height = '20px';
    timeElement.style.marginTop = '5px';
    timeElement.style.background = 'black';
}