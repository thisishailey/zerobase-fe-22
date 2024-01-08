import { getDate, insertDate, lastMonth, nextMonth } from "../calendar/getDate.js";
import { newGridContent } from "../calendar/CalendarDays.js";
import DateValues from "../calendar/DateValues.js";
import Calendar from "../calendar/Calendar.js";
import { createElement, stylePickedDate } from "./tools.js";

let pickedDate;

function addPickerEvent(picker) {
    picker.classList.add('calendar-collapsed');
    picker.addEventListener('click', e => {
        if (picker.classList.contains('calendar-collapsed')) {
            if (e.target.classList.contains('date-input')) {
                if (picker.querySelector('.calendar')) {
                    if (e.target.value !== '') {
                        const targetDate = new Date(e.target.value);
                        insertDate(picker.querySelector('.calendar'), targetDate);
                        newGridContent(picker.querySelector('.calendar-grid'), DateValues(getDate(targetDate)), DateValues(getDate(lastMonth(targetDate))), DateValues(getDate(nextMonth(targetDate))));
                    }
                    picker.querySelector('.calendar').hidden = false;
                }
                else {
                    Calendar(createElement('div', picker, 'calendar'));
                    picker.querySelector('.calendar').style.marginTop = '10px';
                }
                picker.classList.remove('calendar-collapsed');
            }
        }
        else {
            if (e.target.dataset.date) {
                pickedDate = e.target.dataset.date;
                stylePickedDate(pickedDate, picker);
                picker.querySelector('.date-input').value = e.target.dataset.date;
                picker.querySelector('.calendar').hidden = true;
                picker.classList.add('calendar-collapsed');
            }
        }
        let hasPickedDate = false;
        picker.querySelectorAll('.day').forEach(e => { if (e.dataset.date === pickedDate) { hasPickedDate = true } });
        if (hasPickedDate) { stylePickedDate(pickedDate, picker); }
        pickerClicked = true;
    });
    document.addEventListener('click', () => {
        documentClicked = true;
        checkClicked(picker);
    });
}

let documentClicked = false;
let pickerClicked = false;

function checkClicked(picker) {
    if (documentClicked && !pickerClicked && picker.querySelector('.calendar')) {
        picker.querySelector('.calendar').hidden = true;
        picker.classList.add('calendar-collapsed');
    }
    documentClicked = false;
    pickerClicked = false;
}

export default addPickerEvent;