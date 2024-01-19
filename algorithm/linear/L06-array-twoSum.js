/* two sum */

/* my solution */
function answer(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const idx = nums.lastIndexOf(target - nums[i]);
    if (idx > 0) {
      return [i, idx];
    }
  }
}

/* test case */
let input = [
  // TC-1 output=[ 0, 1 ]
  [[2, 7, 11, 15], 9],

  // TC-2 output=[ 1, 2 ]
  [[3, 2, 4], 6],

  // TC-3 output=[ 0, 1 ]
  [[3, 3], 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}