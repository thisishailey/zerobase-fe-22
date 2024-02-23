function solution(arr) {
    arr.sort((x, y) => y - x);
    let a, b, c;

    for (let i = 0; i < arr.length - 2; i++) {
        a = arr[i];
        b = arr[i + 1];
        c = arr[i + 2];

        if (a + b > c && a + c > b && b + c > a) {
            return a + b + c;
        }
    }

    return 0;
}

console.log(solution([1, 2, 6, 56, 10]));
console.log(solution([7, 8, 12, 1, 4]));
