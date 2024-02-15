function solution(s) {
    let result = [];

    s.split('').forEach((e) => {
        if (e === result[result.length - 1]) {
            result.pop();
        } else {
            result.push(e);
        }
    });

    return result.join('');
}

console.log(solution('aacddefg'));
