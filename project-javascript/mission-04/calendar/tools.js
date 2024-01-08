
// All

function createElement(element, parent, className) {
    const e = document.createElement(`${element}`);
    parent.appendChild(e);
    e.classList.add(`${className}`);
    return e;
}

function flexCenter(e) {
    e.style.display = 'flex';
    e.style.alignItems = 'center';
    e.style.justifyContent = 'center';
}

// Calendar

function styleCalendar(e) {
    const cldrWidth = e.clientWidth + 'px';
    e.style.setProperty('--calendar-size', cldrWidth);
    e.style.borderRadius = 'calc(var(--calendar-size) * 0.04)';
    e.style.boxShadow = 'var(--calendar-box-shadow)';
    e.style.userSelect = 'none';
}

// Nav

function styleNav(e) {
    e.style.width = 'var(--calendar-size)';
    e.style.height = 'calc(var(--calendar-size) * 0.25)';
    e.style.borderTopLeftRadius = e.style.borderTopRightRadius = 'calc(var(--calendar-size) * 0.04)';
    e.style.background = 'var(--theme-green)';
    flexCenter(e);
}

function styleNavBtn(e) {
    e.style.width = 'calc(var(--calendar-size) * 0.15)';
    e.style.height = 'calc(var(--calendar-size) * 0.15)';
    e.style.margin = 'calc(var(--calendar-size) * 0.05)';
    e.style.background = 'transparent';
    e.style.cursor = 'pointer';
    flexCenter(e);
    const arrow = createElement('div', e, 'nav-btn-arrow');
    if (e.classList.contains('last-mo')) {
        arrow.style.borderRight = 'calc(var(--calendar-size) * 0.025) solid var(--theme-white)';
        arrow.classList.add('last-mo');
    }
    else if (e.classList.contains('next-mo')) {
        arrow.style.borderLeft = 'calc(var(--calendar-size) * 0.025) solid var(--theme-white)';
        arrow.classList.add('next-mo');
    }
    arrow.style.borderTop = 'calc(var(--calendar-size) * 0.022) solid transparent';
    arrow.style.borderBottom = 'calc(var(--calendar-size) * 0.022) solid transparent';
}

function styleNavDiv(e) {
    e.style.width = 'calc(var(--calendar-size) * 0.5)';
    e.style.height = 'calc(var(--calendar-size) * 0.25)';
    e.style.color = 'var(--theme-white)';
    e.style.flexDirection = 'column';
    flexCenter(e);
    const month = createElement('p', e, 'nav-month');
    month.style.fontSize = 'calc(var(--calendar-size) * 0.06)';
    const year = createElement('p', e, 'nav-year');
    year.style.fontSize = 'calc(var(--calendar-size) * 0.04)';
    return e;
}

// Grid

function styleGrid(e) {
    e.style.width = 'var(--calendar-size)';
    e.style.padding = 'calc(var(--calendar-size) * 0.015) calc(var(--calendar-size) * 0.015) calc(var(--calendar-size) * 0.03)';
    e.style.borderBottomLeftRadius = e.style.borderBottomRightRadius = 'calc(var(--calendar-size) * 0.04)';
    e.style.background = 'var(--theme-white)';
    e.style.display = 'grid';
    e.style.gridTemplateColumns = 'repeat(7, 1fr)';
}

export { createElement, flexCenter, styleCalendar, styleNav, styleNavBtn, styleNavDiv, styleGrid };