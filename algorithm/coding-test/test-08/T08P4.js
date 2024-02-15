function solution(area) {
    let result = [];

    for (let i = 1; i <= Math.sqrt(area); i++) {
        if (Number.isInteger(area / i)) {
            result = [i, area / i];
        } else {
            continue;
        }
    }

    return result;
}

console.log(solution(4));
console.log(solution(25));
console.log(solution(20));
