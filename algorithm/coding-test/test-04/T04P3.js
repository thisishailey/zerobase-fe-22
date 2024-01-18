function solution(A) {
    let maxProfit = 0;
    for (let i = 0; i < A.length - 1; i++) {
        for (let j = i + 1; j < A.length; j++) {
            const profit = A[j] - A[i];
            if (profit > maxProfit) maxProfit = profit;
        }
    }
    return maxProfit;
}

console.log(solution([10000, 9800, 9600, 9900, 9300, 9700, 9800]));