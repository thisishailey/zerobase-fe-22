function solution(arr) {
    if (arr.length === 1) return arr[0].split('');
    return arr.reduce(getCommon);
}

function getCommon(a, b) {
    const y = b.split('');
    const z = [];

    for (x of a) {
        if (y.includes(x) && !z.includes(x)) {
            z.push(x);
        }
    }

    return z.sort((x, y) => x > y);
}

console.log(solution(['apple', 'naver']));
