function solution(arr) {
    let answer = 0;
    arr.forEach(s => { answer |= parseInt(s, 2); });
    return answer;
}

console.log(solution(['10110', '1010', '11110']));