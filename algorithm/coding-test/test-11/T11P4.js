function solution(arr) {
    for (let i = 1; i < arr.length / 2; i++) {
        if (arr[i] > arr[i * 2] || arr[i] > arr[i * 2 + 1]) {
            return 'NO';
        }
    }
    return 'YES';
}

console.log(solution([0, 5, 10, 13]));
console.log(solution([0, 5, 10, 13, 20, 23, 24]));
console.log(solution([0, 5, 10, 13, 20, 23, 24, 15, 20, 10]));
