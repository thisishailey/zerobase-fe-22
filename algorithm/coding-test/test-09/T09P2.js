function solution(bj, one, two) {
    const losers = one.concat(two);
    const winner = bj.find((e) => !losers.includes(e));
    const prize = (one.length + 2 * two.length + 3) * 150;

    return `${prize}만원(${winner})`;
}

console.log(
    solution(
        ['bj1', 'bj2', 'bj3', 'bj4', 'bj5'],
        ['bj2', 'bj5'],
        ['bj4', 'bj1']
    )
);
