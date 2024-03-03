function solution(n) {
    let answer = Math.pow(2, n) - 1;
    answer %= 1000000007;

    return Math.round(answer);
}

console.log(solution(5));
console.log(solution(12));
