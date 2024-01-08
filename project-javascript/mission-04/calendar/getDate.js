function getDate(targetDate) {
    const date = targetDate;
    return {
        year: date.getFullYear(),
        month: date.toLocaleString('default', { month: 'long' }),
        numMonth: date.getMonth() + 1,
        day: date.getDate(),
        weekday: date.getDay() + 1
    }
}

function insertDate(e, targetDate) {
    const currentDate = getDate(targetDate);
    e.querySelector('.nav-month').innerHTML = currentDate.month;
    e.querySelector('.nav-year').innerHTML = currentDate.year;
}

function lastMonth(targetDate) {
    targetDate.setDate(1);
    let lastMonth = targetDate;
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    return lastMonth;
}

function nextMonth(targetDate) {
    targetDate.setDate(1);
    let nextMonth = targetDate;
    nextMonth.setMonth(nextMonth.getMonth() + 2);
    return nextMonth;
}

export { getDate, insertDate, lastMonth, nextMonth };