function makeElement(element, parent, className) {
    const e = document.createElement(`${element}`);
    parent.appendChild(e);
    if (className) { e.classList.add(`${className}`); }
    return e;
}

function styleScrollImg(e) {
    e.src = './img/ball-triangle.svg';
    e.alt = 'Loading...';
}

export { makeElement, styleScrollImg };