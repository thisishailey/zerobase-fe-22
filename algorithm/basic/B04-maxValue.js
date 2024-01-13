// Problem 4: print out the greater number among the two input values

const x = 5; // the first input
const y = 10; // the second input

function solution(x, y) {
    return x > y ? x : y;
}

console.log(solution(x, y));


// + bonus: print out the greatest number among all the inputs

function max() {
    let maxNumber = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxNumber) maxNumber = arguments[i];
    }
    return maxNumber;
}

console.log(max(5, 3, 5, 9, 2, 7, 11));