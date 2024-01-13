// Problem 3: use two for loops to print out times tables

const n = 9; // input n indicates the times tables from 1 to n

function solution(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            console.log(`${i} X ${j} = ${i * j}`);
        }
    }
}

solution(n);