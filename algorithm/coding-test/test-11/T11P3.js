function solution(arr1, arr2) {
    const answer = arr1.filter((n) => arr2.includes(n));
    answer.sort((x, y) => x - y);

    return answer;
}

console.log(solution([5, 4, 1, 9], [10, 2, 3, 9, 6, 1]));
