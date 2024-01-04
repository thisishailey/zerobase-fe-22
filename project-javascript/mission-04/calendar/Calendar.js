import { styleCalendar } from "./style.js";
import CalendarNav from "./CalendarNav.js";
import CalendarGrid from "./CalendarGrid.js";

const Calendar = ($calendar) => {
    styleCalendar($calendar);
    CalendarNav($calendar);
    CalendarGrid($calendar);
}

export default Calendar;