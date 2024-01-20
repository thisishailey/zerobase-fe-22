function solution(n) {
    const b = n.toString(2).split('');
    let maxDist = 1;
    b.forEach((e, i) => {
        if (e === '1') {
            for (let idx = 1; idx < b.length - i; idx++) {
                if (b[i + idx] === '1') {
                    const dist = idx;
                    if (dist > maxDist) maxDist = dist;
                    break;
                }
            }
        }
    });
    return maxDist;
}

console.log(solution(5));