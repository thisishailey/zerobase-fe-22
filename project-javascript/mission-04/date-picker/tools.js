function createElement(element, parent, className) {
    const e = document.createElement(`${element}`);
    parent.appendChild(e);
    e.classList.add(`${className}`);
    return e;
}

function styleInput(e) {
    e.name = 'date-picker-input';
    e.type = 'text';
    e.value = '';
    e.placeholder = 'Select Date';
    e.setAttribute('readonly', true);
    e.style.width = '200px';
    e.style.height = '40px';
    e.style.paddingLeft = '20px';
    e.style.borderRadius = '6px';
    e.style.boxShadow = 'var(--picker-box-shadow)';
    e.style.color = 'var(--heading-green)';
    e.style.fontSize = '16px';
    e.style.fontWeight = 300;
    e.style.cursor = 'pointer';
    e.style.userSelect = 'none';
}

function stylePickedDate(picked, picker) {
    picker.querySelectorAll('.day').forEach((e) => { if (e.dataset.date === picked) { picked = e } });
    const s = createElement('div', picked, 'picked');
    s.setAttribute('data-date', picked.dataset.date);
    s.style.width = 'calc(var(--calendar-size) * 0.1)';
    s.style.height = 'calc(var(--calendar-size) * 0.1)';
    s.style.borderRadius = 'calc(var(--calendar-size) * 0.05)';
    s.style.background = 'var(--theme-brown)';
    s.style.position = 'absolute';
    s.style.zIndex = '-1';
    picked.style.background = 'transparent';
    picked.style.color = 'var(--theme-white)';
    picked.style.fontWeight = 'var(--font-bold)';
    picked.style.zIndex = '10';
}

export { createElement, styleInput, stylePickedDate };