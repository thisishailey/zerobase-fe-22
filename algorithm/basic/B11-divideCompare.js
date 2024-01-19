/*** 2. 나누기와 대소비교 ***/

/* my solution */
function answer(a, b, c, d) {
  if (a / b > c / d) return 1;
  else if (a / b < c / d) return -1;
  else return 0;
}

/* test case */
let input = [
  // TC-1 output=1
  [14, 2, 6, 6],
  // TC-2 output=-1
  [6, 7, 8, 9],
  // TC-3 output=0
  [18, 2, 36, 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(
    `#${i + 1} ${answer(input[i][0], input[i][1], input[i][2], input[i][3])}`
  );
}