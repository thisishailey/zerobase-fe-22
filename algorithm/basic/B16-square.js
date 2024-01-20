/* 2. 제곱 구현 */

/* my solution */
function answer(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) result *= x;
  return result;
}

/* test case */
let input = [
  // TC-1 output=8
  [2, 3],
  // TC-2 output=4096
  [4, 6],
  // TC-3 output=1
  [1, 100],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}