/* 1. 등차수열의 항 찾기 */

/* my solution */
function answer(a, d, value) {
  let index = -1;
  const diff = (value - a);
  if (diff % d === 0) index = (diff / d) + 1;
  return index;
}

/* test case */
let input = [
  // TC-1 output=4
  [1, 2, 7],
  // TC-2 output=-1
  [2, 3, 10],
  // TC-3 output=5
  [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}