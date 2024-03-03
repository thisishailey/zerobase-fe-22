function solution(arr) {
    arr.sort((x, y) => x - y);
    arr.pop();
    arr.shift();

    const avg = Math.floor(arr.reduce((a, c) => a + c) / arr.length);

    return avg;
}

console.log(solution([1, 5, 6, 9, 12, 24]));
