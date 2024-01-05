import { getDate, lastMonth, nextMonth } from "./getDate.js";
import { makeElement, styleGrid, gridContent } from "./functions.js";
import DateValues from "./DateValues.js";

const CalendarGrid = $calendar => {
    const cldrGrid = makeElement('div', $calendar, 'calendar-grid');
    styleGrid(cldrGrid);
    const targetDate = new Date;
    gridContent(cldrGrid, DateValues(getDate(targetDate)), DateValues(getDate(lastMonth(targetDate))), DateValues(getDate(nextMonth(targetDate))));
}

export default CalendarGrid;