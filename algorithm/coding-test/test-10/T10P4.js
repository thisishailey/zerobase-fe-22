function solution(A) {
    let maxCnt = 0,
        currCnt = 1,
        prevIdx = [];

    for (let i = 0; i < A.length; i++) {
        const currIdx = [];

        for (let j = 0; j < A[i].length; j++) {
            if (A[i][j] === 1) currIdx.push(j);
        }

        const connected = currIdx.some((i) => prevIdx.includes(i));

        if (connected) {
            currCnt++;
        } else {
            maxCnt = Math.max(maxCnt, currCnt);
            currCnt = 1;
        }

        prevIdx = currIdx;
    }

    return maxCnt;
}

console.log(
    solution([
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
    ])
);
