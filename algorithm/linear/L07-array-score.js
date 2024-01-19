/* OX 퀴즈 */

/* my solution */
function answer(mark) {
  let result = 0;
  let score = 0;
  for (const value of mark) {
    value === 1 ? result += ++score : score = 0;
  }
  return result;
}

/* test case */
let input = [
  // TC-1 output=10
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],

  // TC-2 output=16
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],

  // TC-3 output=18
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}