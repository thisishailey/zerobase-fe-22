/* 10. 2차원 배열의 곱셈 합 */

/* my solution */
function answer(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result *= arr[i][j];
    }
  }
  return result;
}

/* test case */
let input = [
  // TC-1 output=6
  [[1], [2], [3]],
  // TC-2 output=5040
  [
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ],
  // TC-3 output=54
  [
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}