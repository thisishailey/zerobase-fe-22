import { insertDate } from "./getDate.js";
import { makeElement, styleNav, styleNavBtn, styleNavDiv } from "./style.js";

const CalendarNav = ($calendar) => {
    const cldrNav = makeElement('nav', $calendar, 'calendar-nav');
    styleNav(cldrNav);
    styleNavBtn(makeElement('button', cldrNav, 'last-mo'));
    insertDate(styleNavDiv(makeElement('div', cldrNav, 'this-mo')), new Date);
    styleNavBtn(makeElement('button', cldrNav, 'next-mo'));
}

export default CalendarNav;