function solution(A) {
    let idx = Math.ceil(A.length / 2),
        answer = 0;
    A.sort((x, y) => x - y);

    for (let i = 1; i <= A.length; i++) {
        if (i % 2) {
            answer += parseInt(A[idx - 1]) * i;
            idx += i * -1;
        } else {
            answer += parseInt(A[idx - 1]) * i * -1;
            idx += i;
        }
    }

    return answer;
}
