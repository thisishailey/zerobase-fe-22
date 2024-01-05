import CurrentDate from "./CurrentDate.js";
import { makeElement, styleNav, styleNavBtn, styleNavDiv } from "./style.js";

const CalendarNav = ($calendar) => {
    const cldrNav = makeElement('nav', $calendar, 'calendar-nav');
    styleNav(cldrNav);
    styleNavBtn(makeElement('button', cldrNav, 'prev-mo'));
    insertDate(styleNavDiv(makeElement('div', cldrNav, 'current-mo')));
    styleNavBtn(makeElement('button', cldrNav, 'next-mo'));
}

function insertDate([month, year]) {
    const currentDate = CurrentDate();
    month.innerHTML = currentDate.month;
    year.innerHTML = currentDate.year;
}

export default CalendarNav;