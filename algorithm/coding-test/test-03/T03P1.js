function solution(n) {
    let answer = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            i * i === n ? answer++ : answer += 2;
        }
    }
    return answer;
}

console.log(solution(10));