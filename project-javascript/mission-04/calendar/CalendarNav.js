import CurrentDate from "./CurrentDate.js";
import { makeElement, styleNav, styleNavBtn, styleNavDiv } from "./style.js";

const currentDate = CurrentDate();

const CalendarNav = ($calendar) => {
    const cldrNav = makeElement('nav', $calendar, 'calendar-nav');
    styleNav(cldrNav);
    styleNavBtn(makeElement('button', cldrNav, 'prev-mo'));
    styleNavDiv(makeElement('div', cldrNav, 'current-mo'), currentDate.year, currentDate.month);
    styleNavBtn(makeElement('button', cldrNav, 'next-mo'));
}

export default CalendarNav;