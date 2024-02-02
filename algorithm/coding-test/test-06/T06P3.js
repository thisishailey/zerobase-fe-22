function solution(A) {
    const result = A.reduce((acc, cur) => {
        while (cur) {
            let x = cur;
            cur = acc % cur;
            acc = x;
        }
        return acc;
    });

    return result;
}

console.log(solution([6, 12, 4]));