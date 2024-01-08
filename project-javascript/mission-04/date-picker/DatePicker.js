import { createElement, styleInput } from "./tools.js";
import addPickerEvent from "./events.js";

const DatePicker = ($datePicker) => {
    styleInput(createElement('input', $datePicker, 'date-input'));
    addPickerEvent($datePicker);
}

export default DatePicker;