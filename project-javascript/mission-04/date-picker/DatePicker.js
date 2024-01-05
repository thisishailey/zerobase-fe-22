import { makeElement, styleInput } from "./functions.js";
import addPickerEvent from "./event.js";

const DatePicker = ($datePicker) => {
    styleInput(makeElement('input', $datePicker, 'date-input'));
    addPickerEvent($datePicker);
}

export default DatePicker;