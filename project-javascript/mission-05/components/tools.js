function makeElement(element, parent, className) {
    const e = document.createElement(`${element}`);
    parent.appendChild(e);
    if (className) { e.classList.add(`${className}`); }
    return e;
}

function setLinkAttr(e) {
    e.target = '_blank';
    e.rel = 'noopener noreferrer';
    return e;
}

function addThumbnailImg(e) {
    e.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
    e.alt = 'thumbnail';
}

function addScrollImg(e) {
    e.src = './img/ball-triangle.svg';
    e.alt = 'Loading...';
}

export { makeElement, setLinkAttr, addThumbnailImg, addScrollImg };