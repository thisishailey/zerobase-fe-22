function solution(arr) {
    arr.sort((x, y) => x - y);
    return arr[0];
}

console.log(solution([5, 2, 1, 3]));
