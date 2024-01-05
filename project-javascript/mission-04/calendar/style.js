

// All

function makeElement(element, parent, className) {
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
    const arrow = makeElement('div', e, 'nav-btn-arrow');
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
    const month = makeElement('p', e, 'nav-month');
    month.style.fontSize = 'calc(var(--calendar-size) * 0.06)';
    const year = makeElement('p', e, 'nav-year');
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

const gridContent = (e, value, last, next) => {
    weekdays(e);
    days(e, value, last, next);
}

const newGridContent = (e, value, last, next) => {
    e.querySelectorAll('.day').forEach(e => { e.remove() })
    days(e, value, last, next);
}

const weekdays = e => {
    const days = [];
    const dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    for (let i = 0; i < 7; i++) {
        days[i] = makeElement('div', e, `weekday${i}`);
        days[i].innerHTML = dayNames[i].toUpperCase();
    }
    days.forEach(e => {
        e.style.height = 'calc(var(--calendar-size) * 0.12)';
        e.style.fontSize = 'calc(var(--calendar-size) * 0.04)';
        e.style.letterSpacing = 'calc(var(--calendar-size) * 0.003)';
        e.style.color = 'var(--font-gray)';
        flexCenter(e);
    })
}

const days = (e, value, last, next) => {
    const weeks = value.weekCount;
    e.style.gridTemplateRows = `repeat(${weeks + 1}, 1fr)`;
    const days = [];
    const startPoint = 8 - value.dayCountFirst;
    let index = 0;
    for (let i = 1; i <= (weeks * 7); i++) {
        days[i] = makeElement('div', e, 'day');
        days[i].style.height = 'calc(var(--calendar-size) * 0.12)';
        days[i].style.fontSize = 'calc(var(--calendar-size) * 0.05)';
        days[i].style.color = 'var(--font-black)';
        days[i].style.cursor = 'pointer';
        flexCenter(days[i]);
        if (i < startPoint) { days[i].classList.add('last-month'); }
        else if (i < (startPoint + value.dayCount)) { days[i].classList.add('this-month'); }
        else days[i].classList.add('next-month');
        if (i === (1 + (7 * index))) { days[i].classList.add('sunday'); index++; }
    }
    // this month
    const thisMonth = e.querySelectorAll('.this-month');
    thisMonth.forEach((e, i) => {
        e.innerHTML = `${1 + i}`;
        e.setAttribute('data-date', `${value.dateString + e.innerHTML.padStart(2, '0')}`);
    });
    const sundays = e.querySelectorAll('.sunday.this-month');
    sundays.forEach(e => { e.style.color = 'var(--font-red)'; })
    // last month
    const lastMonth = e.querySelectorAll('.last-month');
    lastMonth.forEach((e, i) => {
        e.style.color = 'var(--font-gray)';
        e.innerHTML = `${last.dayCount - last.dayCountLast + 1 + i}`;
        e.setAttribute('data-date', `${last.dateString + e.innerHTML.padStart(2, '0')}`);
    });
    // next month
    const nextMonth = e.querySelectorAll('.next-month');
    nextMonth.forEach((e, i) => {
        e.style.color = 'var(--font-gray)';
        e.innerHTML = `${1 + i}`;
        e.setAttribute('data-date', `${next.dateString + e.innerHTML.padStart(2, '0')}`);
    });
    // today
    let today = new Date;
    today = `${today.getFullYear()}-${today.toLocaleString('default', { month: "2-digit" })}-${today.toLocaleString('default', { day: "2-digit" })}`;
    days.forEach(e => {
        if (e.dataset.date === today) {
            const t = makeElement('div', e, 'today');
            t.setAttribute('data-date', `${today}`)
            t.style.width = 'calc(var(--calendar-size) * 0.1)';
            t.style.height = 'calc(var(--calendar-size) * 0.1)';
            t.style.borderRadius = 'calc(var(--calendar-size) * 0.05)';
            t.style.background = 'var(--theme-green)';
            t.style.position = 'absolute';
            t.style.zIndex = '-1';
            e.style.background = 'transparent';
            e.style.color = 'var(--theme-white)';
            e.style.fontWeight = 'var(--font-bold)';
            e.style.zIndex = '10';
        }
    })
}

export { makeElement, styleCalendar, styleNav, styleNavBtn, styleNavDiv, styleGrid, gridContent, newGridContent };