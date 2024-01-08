import { styleCalendar } from "./tools.js";
import CalendarNav from "./CalendarNav.js";
import CalendarGrid from "./CalendarGrid.js";
import addCalendarEvents from "./events.js";

const Calendar = ($calendar) => {
    styleCalendar($calendar);
    CalendarNav($calendar);
    CalendarGrid($calendar);
    addCalendarEvents($calendar);
}

export default Calendar;