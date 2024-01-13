function solution(s) {
    let answer = [];
    for (const i in s) {
        answer.includes(s[i]) ? {} : answer.push(s[i]);
    }
    return answer.length;
}

console.log(solution('google'));


// + another solution using Set

function anotherSolution(s) {
    return new Set(s).size;
}

console.log(anotherSolution('google'));