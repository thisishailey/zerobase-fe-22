import CurrentDate from "./CurrentDate.js";

const currentDate = CurrentDate();

const CalendarNav = ($calendar) => {
    const calNav = makeElement('nav', $calendar, 'calendar-nav');
    styleNav(calNav);
    styleNavBtn(makeElement('button', calNav, 'prev-mo'));
    styleNavDiv(makeElement('div', calNav, 'current-mo'), currentDate.year, currentDate.month);
    styleNavBtn(makeElement('button', calNav, 'next-mo'));
}

function makeElement(element, parent, className) {
    const e = document.createElement(`${element}`);
    parent.appendChild(e);
    e.classList.add(`${className}`);
    return e;
}

function styleNav(e) {

}

function styleNavBtn(e) {

}

function styleNavDiv(e) {

}


export default CalendarNav;