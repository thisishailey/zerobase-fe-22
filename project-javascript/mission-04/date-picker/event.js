import { makeElement } from "./functions.js";
import Calendar from "../calendar/Calendar.js";

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
                picker.querySelector('.date-input').value = e.target.dataset.date;
                picker.querySelector('.calendar').hidden = true;
                picker.classList.add('calendar-collapsed');
            }
        }
    });
    document.addEventListener('click', e => {
        if (!(e.target.classList.contains('date-input') || e.target.classList.contains('calendar'))) {
            picker.querySelector('.calendar').hidden = true;
            picker.classList.add('calendar-collapsed');
        };
    });
}

export default addPickerEvent;