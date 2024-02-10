function solution(orders, n) {
    let x = 1,
        i = 0;
    while (n) {
        if (orders[i] !== x) {
            n--;
        }
        if (n === 0) return x;
        x = orders[i] + 1;
        i++;
    }
}

console.log(solution([2, 4, 5, 7], 3));
