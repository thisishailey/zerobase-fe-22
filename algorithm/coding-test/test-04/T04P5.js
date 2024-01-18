function solution(nums, d) {
    let answer = 0;
    for (let i = 0; i < nums.length; i++) {
        const firstNum = nums[i];
        if (nums.lastIndexOf(firstNum) !== i) {
            if (nums[i] % d === 0) answer++;
        }
    }
    return answer;
}

console.log(solution([4, 1, 2, 1, 4], 2));