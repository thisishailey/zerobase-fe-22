function solution(s) {
    let answer = [];
    for (const i in s) {
        answer.includes(s[i]) ? {} : answer.push(s[i]);
    }
    return answer.length;
}

console.log(solution('google'));