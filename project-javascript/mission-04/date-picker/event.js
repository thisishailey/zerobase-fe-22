import { makeElement, stylePickedDate } from "./functions.js";
import Calendar from "../calendar/Calendar.js";

let pickedDate;

function addPickerEvent(picker) {
    picker.classList.add('calendar-collapsed');
    picker.addEventListener('click', e => {
        if (picker.classList.contains('calendar-collapsed')) {
            if (e.target.classList.contains('date-input')) {
                if (picker.querySelector('.calendar')) {
                    picker.querySelector('.calendar').hidden = false;
                }
                else {
                    Calendar(makeElement('div', picker, 'calendar'));
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
            let hasPickedDate = false;
            picker.querySelectorAll('.day').forEach(e => { if (e.dataset.date === pickedDate) { hasPickedDate = true } });
            if (hasPickedDate) { stylePickedDate(pickedDate, picker); }
        }
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