import createCustomElement from "../utils/createElement.js";

const setBoxes = (row, col, start, end, walls) => {
    const boxContainer = createCustomElement('div', { id: 'control-box-container' }, document.querySelector('#game-field'));

    boxContainer.style.display = 'grid';
    boxContainer.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    boxContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;

    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            const box = createCustomElement('div', { className: 'control-box', id: `box-${i}-${j}` }, boxContainer);
            if (i === start[0] && j === start[1]) {
                box.classList.add('start');
                box.innerHTML = 'start';
            } else if (i === end[0] && j === end[1]) {
                box.classList.add('end');
                box.innerHTML = 'end';
            }
            walls.forEach(wall => {
                if (i === wall[0] && j === wall[1]) {
                    box.classList.add('wall');
                    return;
                }
            });
        }
    }
}

export default setBoxes;