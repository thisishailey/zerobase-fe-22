// Problem 1: use the switch statement to print out the day of the week

const n = 3; // input n will be in range of 0 to 6 (Sun - Sat)

function solution(n) {
    let day = '';
    switch (n) {
        case 0: day = 'Sunday'; break;
        case 1: day = 'Monday'; break;
        case 2: day = 'Tuesday'; break;
        case 3: day = 'Wednesday'; break;
        case 4: day = 'Thursday'; break;
        case 5: day = 'Friday'; break;
        case 6: day = 'Saturday'; break;
        default: day = new Error("Input is invalid.");
    }
    return day;
}

console.log(solution(n));