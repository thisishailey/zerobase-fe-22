const DateValues = inputDate => {
    const dayCount = numOfDays(inputDate.numMonth, inputDate.year);
    const dayCountFirst = daysInFirstWeek(inputDate.day, inputDate.weekday);
    const [dayCountLast, weekCount] = daysInLastWeek(dayCountFirst, dayCount);
    return {
        dayCount: dayCount,
        dayCountFirst: dayCountFirst,
        dayCountLast: dayCountLast,
        weekCount: weekCount,
        dateString: `${inputDate.year}-${inputDate.numMonth.toString().padStart(2, '0')}-`
    }
}

function numOfDays(month, year) {
    if (month === 2) {
        if (year % 4 !== 0) { return 28; }
        else if (year % 100 !== 0) { return 29; }
        else if (year % 400 !== 0) { return 28; }
        else return 29;
    }
    else if (month < 8) {
        if (month % 2 === 1) { return 31; }
        else return 30;
    }
    else {
        if (month % 2 === 0) { return 31; }
        else return 30;
    }
}

function daysInFirstWeek(day, weekday) {
    day -= weekday;
    while (day > 0) { day -= 7; }
    day += 7;
    return day;
}

function daysInLastWeek(day, month) {
    let numOfWeeks = 1;
    while (day < month) { day += 7; numOfWeeks++; }
    day -= month;
    day = 7 - day;
    return [day, numOfWeeks];
}

export default DateValues;