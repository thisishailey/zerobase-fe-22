import { getDate, lastMonth, nextMonth } from "./getDate.js";
import { createElement, styleGrid } from "./tools.js";
import DateValues from "./DateValues.js";
import { gridContent } from "./CalendarDays.js";

const CalendarGrid = $calendar => {
    const cldrGrid = createElement('div', $calendar, 'calendar-grid');
    styleGrid(cldrGrid);
    const now = new Date();
    gridContent(cldrGrid, DateValues(getDate(now)), DateValues(getDate(lastMonth(now))), DateValues(getDate(nextMonth(now))));
}

export default CalendarGrid;