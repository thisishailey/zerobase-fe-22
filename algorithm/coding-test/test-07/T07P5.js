function solution(n) {
    let answer = 0;

    for (let i = 0; i <= n; i++) {
        const arr = i
            .toString(2)
            .split('')
            .filter((e) => e === '1');
        answer += arr.length;
    }

    return answer;
}

console.log(solution(3));
