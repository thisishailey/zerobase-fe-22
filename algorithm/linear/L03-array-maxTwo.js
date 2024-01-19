/* 두 수 최대합 */

/* my solution */
function answer(nums, n) {
  let result = [];

  // solution #1
  for (let i = 0; i < n; i++) {
    const maxVal = nums.splice(nums.indexOf(Math.max(...nums)), 1);
    result.push(...maxVal);
  }

  // solution #2
  nums.sort((x, y) => x - y);
  for (let i = 1; i <= n; i++) {
    result.push(nums[nums.length - i]);
  }

  return result;
}

/* test case */
let input = [
  // TC-1 output=[ 18, 17 ]
  [-11, 5, 18, -2, -3, 6, 4, 17, 10, 9],

  // TC-2 output=[ 19, 14 ]
  [3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19],

  // TC-3 output=[ 19, 15 ]
  [
    -15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18,
    14,
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i], 2));
}