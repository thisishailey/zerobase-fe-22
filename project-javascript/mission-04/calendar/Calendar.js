import { styleCalendar } from "./style.js";
import CalendarNav from "./CalendarNav.js";
import CalendarGrid from "./CalendarGrid.js";
import addCalendarEvents from "./event.js";

const Calendar = ($calendar) => {
    styleCalendar($calendar);
    CalendarNav($calendar);
    CalendarGrid($calendar);
    addCalendarEvents($calendar);
}

export default Calendar;