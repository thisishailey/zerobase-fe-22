import CurrentDate from "./CurrentDate.js";
import { makeElement, styleGrid } from "./style.js";

const currentDate = CurrentDate();

const CalendarGrid = ($calendar) => {
    const cldrGrid = makeElement('div', $calendar, 'calendar-grid');
    styleGrid(cldrGrid);
}

export default CalendarGrid;