function solution(s) {
    const str = s.split('').sort();
    const n = str.map(e => Number(e));

    let max = -1;
    let answer;

    for (let i = 0; i < 10; i++) {
        if (!n.includes(i)) continue;

        const count = n.lastIndexOf(i) - n.indexOf(i);

        if (count > max) {
            max = count;
            answer = i;
        }
    }

    return answer;
}

console.log(solution('17429873637714'));