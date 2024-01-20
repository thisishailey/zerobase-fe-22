/* 6. 배열 내 최대값 구하기 */

/* my solution */
function answer(arr) {
  // solution #1
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
  // solution #2
  arr.sort((x, y) => y - x);
  return arr[0];
  // solution #3
  return Math.max(...arr);
}

/* test case */
let input = [
  // TC-1 output=6
  [1, 6, 5, 2, 3],
  // TC-2 output=41
  [19, 41, 23, -4, 17],
  // TC-3 output=-27
  [-64, -27, -41, -33, -59],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}