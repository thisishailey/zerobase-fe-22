/* 수열 최소값 위치 */

/* my solution */
function answer(nums) {
  const minVal = Math.min(...nums);
  let result = [];
  nums.forEach((e, i) => { if (e === minVal) result.push(i); })
  return result;
}

/* test case */
let input = [
  // TC-1 output=[ 1, 3 ]
  [5, 2, 10, 2],

  // TC-2 output=[ 0, 3 ]
  [4, 5, 7, 4, 8],

  // TC-3 output=[ 1, 2, 4 ]
  [12, 11, 11, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}