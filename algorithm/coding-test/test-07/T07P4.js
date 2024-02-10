function solution(history, infected) {
    let isInfected = false,
        result = new Set();
    infected = Math.abs(infected);

    for (let n of history) {
        n = Math.abs(n);

        if (isInfected) {
            n === infected ? (isInfected = false) : result.add(n);
        } else if (n === infected) {
            isInfected = true;
        }
    }

    result = result.size > 0 ? Array.from(result).sort((x, y) => x - y) : [];

    return result;
}

console.log(solution([3, 2, -3, 1, -1, -2, 4, -4, 1, -11], 2));
