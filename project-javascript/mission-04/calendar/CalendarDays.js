import { createElement, flexCenter } from "./tools.js";

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
        days[i] = createElement('div', e, `weekday${i}`);
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
        days[i] = createElement('div', e, 'day');
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
            selected(e, 'today', 'var(--theme-green)');
        }
    })
}

function selected(e, className, color) {
    const s = createElement('div', e, `${className}`);
    s.setAttribute('data-date', e.dataset.date)
    s.style.width = 'calc(var(--calendar-size) * 0.1)';
    s.style.height = 'calc(var(--calendar-size) * 0.1)';
    s.style.borderRadius = 'calc(var(--calendar-size) * 0.05)';
    s.style.background = `${color}`;
    s.style.position = 'absolute';
    s.style.zIndex = '-1';
    e.style.background = 'transparent';
    e.style.color = 'var(--theme-white)';
    e.style.fontWeight = 'var(--font-bold)';
    e.style.zIndex = '10';
}

export { gridContent, newGridContent }