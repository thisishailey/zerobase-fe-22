import { getDate, lastMonth, nextMonth } from "./getDate.js";
import { createElement, styleGrid } from "./tools.js";
import DateValues from "./DateValues.js";
import { gridContent } from "./CalendarDays.js";

const CalendarGrid = $calendar => {
    const cldrGrid = createElement('div', $calendar, 'calendar-grid');
    styleGrid(cldrGrid);
    gridContent(cldrGrid, DateValues(getDate()), DateValues(getDate(lastMonth())), DateValues(getDate(nextMonth())));
}

export default CalendarGrid;