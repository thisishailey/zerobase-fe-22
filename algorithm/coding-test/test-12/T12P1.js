function solution(A, limit) {
    let answer = 0,
        value,
        idx;

    while (A.length > 0) {
        const current = A[0];
        A.shift();

        const arr = A.filter((e) => e <= limit - current);

        if (arr.length > 1) {
            value = arr.sort((x, y) => y - x)[0];
        } else if (arr.length === 1) {
            value = arr[0];
        } else {
            value = null;
        }

        idx = A.findIndex((e) => e === value);
        idx && A.splice(idx, 1);

        answer++;
    }

    return answer;
}
