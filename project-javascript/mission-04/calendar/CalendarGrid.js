import getDate from "./getDate.js";
import { makeElement, styleGrid, gridContent } from "./style.js";
import DateValues from "./DateValues.js";

const CalendarGrid = $calendar => {
    const cldrGrid = makeElement('div', $calendar, 'calendar-grid');
    styleGrid(cldrGrid);
    gridContent(cldrGrid, DateValues(getDate(new Date)), DateValues(getDate(lastMonth())), DateValues(getDate(nextMonth())));
}

function lastMonth() {
    let lastMonth = new Date;
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    return lastMonth;
}

function nextMonth() {
    let nextMonth = new Date;
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    return nextMonth;
}

export default CalendarGrid;