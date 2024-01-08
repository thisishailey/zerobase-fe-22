import { insertDate } from "./getDate.js";
import { createElement, styleNav, styleNavBtn, styleNavDiv } from "./tools.js";

const CalendarNav = ($calendar) => {
    const cldrNav = createElement('nav', $calendar, 'calendar-nav');
    styleNav(cldrNav);
    styleNavBtn(createElement('button', cldrNav, 'last-mo'));
    insertDate(styleNavDiv(createElement('div', cldrNav, 'this-mo')));
    styleNavBtn(createElement('button', cldrNav, 'next-mo'));
}

export default CalendarNav;