import Calendar from "./calendar/Calendar.js";
import DatePicker from "./date-picker/DatePicker.js";

const $calendars = document.querySelectorAll('.calendar');
const $datePickers = document.querySelectorAll('.date-picker');

$calendars.forEach($calendar => {
    Calendar($calendar);
});

$datePickers.forEach($datePicker => {
    DatePicker($datePicker);
});