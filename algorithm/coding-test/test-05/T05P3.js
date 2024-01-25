function solution(S) {
    return Number(S === S.split('').reverse().join(''));
}

console.log(solution('bob'));