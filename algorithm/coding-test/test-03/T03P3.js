function solution(arr) {
    let answer = arr.filter(n => n % 2 === 0);
    return answer.length;
}

console.log(solution([1, 9, 9, 1, 3, 2, 6]));