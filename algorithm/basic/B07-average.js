/*** 3. 반 평균 ***/

/* my solution */
function answer(score) {
  let avg = 0;
  for (let i = 0; i < score.length; i++) avg += score[i];
  avg /= score.length;
  return avg.toFixed(2);
}

/* test case */
let input = [
  // TC-1 output=82.00
  [80, 95, 65, 70, 100],
  // TC-2 output=73.86
  [82, 77, 51, 64, 73, 90, 80],
  // TC-3 output=81.13
  [100, 71, 59, 88, 72, 75, 91, 93],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}