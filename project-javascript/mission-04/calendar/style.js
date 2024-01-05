
// Calendar

function styleCalendar(e) {
    const cldrWidth = e.clientWidth + 'px';
    e.style.setProperty('--calendar-size', cldrWidth);
    e.style.borderRadius = 'calc(var(--calendar-size) * 0.04)';
    e.style.boxShadow = 'var(--calendar-box-shadow)';
}

function makeElement(element, parent, className) {
    const e = document.createElement(`${element}`);
    parent.appendChild(e);
    e.classList.add(`${className}`);
    return e;
}

// Nav

function styleNav(e) {
    e.style.width = 'var(--calendar-size)';
    e.style.height = 'calc(var(--calendar-size) * 0.25)';
    e.style.borderTopLeftRadius = e.style.borderTopRightRadius = 'calc(var(--calendar-size) * 0.04)';
    e.style.background = 'var(--theme-color-green)';
    e.style.display = 'flex';
    e.style.alignItems = 'center';
    e.style.justifyContent = 'space-between';
}

function styleNavBtn(e) {
    e.style.width = 'calc(var(--calendar-size) * 0.15)';
    e.style.height = 'calc(var(--calendar-size) * 0.15)';
    e.style.margin = 'calc(var(--calendar-size) * 0.05)';
    e.style.background = 'transparent';
    e.style.display = 'flex';
    e.style.alignItems = 'center';
    e.style.justifyContent = 'center';
    e.style.cursor = 'pointer';
    const arrow = makeElement('div', e, 'nav-btn-arrow');
    if (e.classList.contains('prev-mo')) {
        arrow.style.borderRight = 'calc(var(--calendar-size) * 0.025) solid var(--theme-color-white)';
    }
    else if (e.classList.contains('next-mo')) {
        arrow.style.borderLeft = 'calc(var(--calendar-size) * 0.025) solid var(--theme-color-white)';
    }
    arrow.style.borderTop = 'calc(var(--calendar-size) * 0.022) solid transparent';
    arrow.style.borderBottom = 'calc(var(--calendar-size) * 0.022) solid transparent';
}

function styleNavDiv(e) {
    e.style.width = 'calc(var(--calendar-size) * 0.5)';
    e.style.height = 'calc(var(--calendar-size) * 0.25)';
    e.style.color = 'var(--theme-color-white)';
    e.style.display = 'flex';
    e.style.flexDirection = 'column';
    e.style.alignItems = 'center';
    e.style.justifyContent = 'center';
    const month = makeElement('p', e, 'nav-month');
    month.style.fontSize = 'calc(var(--calendar-size) * 0.06)';
    const year = makeElement('p', e, 'nav-year');
    year.style.fontSize = 'calc(var(--calendar-size) * 0.04)';
    return [month, year];
}


// Grid

function styleGrid(e) {
    e.style.width = 'var(--calendar-size)';
    e.style.height = 'var(--calendar-size)';
    e.style.borderBottomLeftRadius = e.style.borderBottomRightRadius = 'calc(var(--calendar-size) * 0.04)';
    e.style.background = 'var(--theme-color-white)';
    e.style.display = 'grid';
    e.style.gridTemplateColumns = 'repeat(7, 1fr)';
}


export { styleCalendar, styleNav, styleNavBtn, styleNavDiv, styleGrid, makeElement };