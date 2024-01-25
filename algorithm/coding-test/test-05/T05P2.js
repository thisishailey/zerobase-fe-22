function solution(S) {
    let n = parseInt(S, 2);
    let count = 0;

    while (n !== 0) {
        n % 2 === 0 ? n /= 2 : n -= 1;
        count++;
    }

    return count;
}

console.log(solution('1101'));