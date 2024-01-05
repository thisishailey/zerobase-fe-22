import getDate from "./getDate.js";
import { makeElement, styleNav, styleNavBtn, styleNavDiv } from "./style.js";

const CalendarNav = ($calendar) => {
    const cldrNav = makeElement('nav', $calendar, 'calendar-nav');
    styleNav(cldrNav);
    styleNavBtn(makeElement('button', cldrNav, 'last-mo'));
    insertDate(styleNavDiv(makeElement('div', cldrNav, 'this-mo')));
    styleNavBtn(makeElement('button', cldrNav, 'next-mo'));
}

function insertDate([month, year]) {
    const currentDate = getDate(new Date);
    month.innerHTML = currentDate.month;
    year.innerHTML = currentDate.year;
}

export default CalendarNav;