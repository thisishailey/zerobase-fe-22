import { newGridContent } from "./functions.js";
import { getDate, insertDate, lastMonth, nextMonth } from "./getDate.js";
import DateValues from "./DateValues.js";


function addCalendarEvents($calendar) {
    changeMonth($calendar);
    printDate($calendar);
}

function changeMonth(calendar) {
    calendar.addEventListener('click', e => {
        let targetDate = new Date(calendar.querySelector('.day.this-month').dataset.date);
        if (e.target.classList.contains('last-mo')) {
            targetDate.setMonth(targetDate.getMonth() - 1);
        }
        if (e.target.classList.contains('next-mo')) {
            targetDate.setMonth(targetDate.getMonth() + 1);
        }
        insertDate(calendar, targetDate);
        newGridContent(calendar.querySelector('.calendar-grid'), DateValues(getDate(targetDate)), DateValues(getDate(lastMonth(targetDate))), DateValues(getDate(nextMonth(targetDate))));
    })
}

function printDate(calendar) {
    calendar.addEventListener('click', e => {
        if (e.target.dataset.date) {
            console.log(e.target.dataset.date);
        }
    })
}

export default addCalendarEvents;