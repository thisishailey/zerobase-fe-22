import Calendar from "./calendar/Calendar.js";

const $calendars = document.querySelectorAll('.calendar');

$calendars.forEach($calendar => {
    Calendar($calendar);
});