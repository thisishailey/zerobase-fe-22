/* 1. 최소값 구하기 */

/* my solution */
function answer(x, y) {
  // solution #1
  return Math.min(x, y);
  // solution #2
  return x > y ? y : x;
}

/* test case */
let input = [
  // TC-1 output=3
  [16, 3],
  // TC-2 output=-3
  [-3, 1],
  // TC-3 output=525
  [1000, 525],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}