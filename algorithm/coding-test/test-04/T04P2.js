function solution(num) {
    if (num < 4) {
        return num > 1;
    }
    return (num - 1) % 3 === 0;
}

console.log(solution(5));