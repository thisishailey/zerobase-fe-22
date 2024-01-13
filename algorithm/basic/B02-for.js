// Problem 2: use the for loop to print out the sum of the even numbers

const n = 10; // input n will be a positive integer

function solution(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) { sum += i; }
    }
    return sum;
}

console.log(solution(n));