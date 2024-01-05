import { getDate, lastMonth, nextMonth } from "./getDate.js";
import { makeElement, styleGrid, gridContent } from "./style.js";
import DateValues from "./DateValues.js";

const CalendarGrid = $calendar => {
    const cldrGrid = makeElement('div', $calendar, 'calendar-grid');
    styleGrid(cldrGrid);
    gridContent(cldrGrid, DateValues(getDate(targetDate)), DateValues(getDate(lastMonth(targetDate))), DateValues(getDate(nextMonth(targetDate))));
}

const targetDate = new Date;

export default CalendarGrid;