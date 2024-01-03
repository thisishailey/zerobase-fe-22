const CurrentDate = () => {
    const date = new Date;
    return {
        year: date.getFullYear(),
        month: date.toLocaleString('default', { month: 'long' }),
        day: date.getDate(),
        weekday: date.getDay() + 1
    }
}

export default CurrentDate;