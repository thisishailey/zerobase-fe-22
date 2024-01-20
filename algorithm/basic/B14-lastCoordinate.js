/*** 5. 네번째 좌표 ***/

/* my solution */
function answer(x_arr, y_arr) {
  const result = [];
  for (let i = 0; i < x_arr.length; i++) {
    if (x_arr.indexOf(x_arr[i]) === i && x_arr.lastIndexOf(x_arr[i]) === i) result[0] = x_arr[i];
    if (y_arr.indexOf(y_arr[i]) === i && y_arr.lastIndexOf(y_arr[i]) === i) result[1] = y_arr[i];
  }
  return result;
}

/* test case */
let input = [
  // TC-1 output=[ 8, 8 ]
  [
    [5, 5, 8],
    [5, 8, 5],
  ],
  // TC-2 output=[ 3, 1 ]
  [
    [3, 1, 1],
    [2, 1, 2],
  ],
  // TC-3 output=[ 3, 4 ]
  [
    [7, 7, 3],
    [4, 1, 1],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}