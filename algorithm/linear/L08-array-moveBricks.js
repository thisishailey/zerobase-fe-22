/* 벽돌 옮기기 */

/* my solution */
function answer(bricks) {
  let result = 0;
  const avg = bricks.reduce((a, c) => a + c) / bricks.length;
  bricks.filter(e => e > avg).forEach(e => result += (e - avg));
  return result;
}

/* test case */
let input = [
  // TC-1 output=5
  [5, 2, 4, 1, 7, 5],

  // TC-2 output=6
  [12, 8, 10, 11, 9, 5, 8],

  // TC-3 output=21
  [27, 14, 19, 11, 26, 25, 23, 15],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}