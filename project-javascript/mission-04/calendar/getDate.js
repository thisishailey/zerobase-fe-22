function getDate(obj) {
    const date = obj;
    return {
        year: date.getFullYear(),
        month: date.toLocaleString('default', { month: 'long' }),
        numMonth: date.getMonth() + 1,
        day: date.getDate(),
        weekday: date.getDay() + 1
    }
}

export default getDate;