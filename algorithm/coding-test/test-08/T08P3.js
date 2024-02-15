function solution(S) {
    const arr = [];

    S.split('').forEach((e) => {
        if (e === arr[arr.length - 1]) {
            arr.pop();
        } else {
            arr.push(e);
        }
    });

    if (arr.length > 0) {
        return 0;
    }

    return 1;
}

console.log(solution('abba'));
console.log(solution('aabab'));
console.log(solution('aabceffecbee'));
