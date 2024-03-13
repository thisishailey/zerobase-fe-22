function solution(A) {
    let answer = 0;
    const arr = A.toString().split('');

    for (let i = 0; i < arr.length; i++) {
        let value = parseInt(arr[i]);

        if (value >= 5) {
            value -= 5;
            answer++;
        }

        while (value > 0) {
            value--;
            answer++;
        }
    }

    return answer;
}
