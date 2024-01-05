function makeElement(element, parent, className) {
    const e = document.createElement(`${element}`);
    parent.appendChild(e);
    e.classList.add(`${className}`);
    return e;
}

function styleInput(e) {
    e.name = 'date-picker-input';
    e.type = 'text';
    e.placeholder = 'Select Date';
    e.setAttribute('readonly', true);
    e.style.width = '200px';
    e.style.height = '40px';
    e.style.paddingLeft = '20px';
    e.style.borderRadius = '6px';
    e.style.boxShadow = 'var(--picker-box-shadow)';
    e.style.fontSize = '16px';
    e.style.cursor = 'pointer';
    e.style.userSelect = 'none';
}

export { makeElement, styleInput };