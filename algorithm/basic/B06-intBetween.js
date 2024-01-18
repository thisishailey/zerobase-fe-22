/*** 2. 두 수 사이 숫자 ***/

/* my solution */
function answer(x, y) {
  let result = [];
  for (let i = Math.min(x, y); i <= Math.max(x, y); i++) result.push(i);
  return result;
}

/* test case */
let input = [
  // TC-1 output=[ 3, 4, 5, 6, 7 ]
  [3, 7],
  // TC-2 output=[ 3, 4, 5, 6, 7, 8 ]
  [8, 3],
  // TC-3 output=[ 10, 11, 12 ]
  [12, 10],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}