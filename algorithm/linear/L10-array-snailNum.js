/* 달팽이 만들기 */

/* my solution */
function answer(length) {
  const result = [];
  for (let i = 0; i < length; i++) result[i] = [];

  let x, y, n, d;
  x = -1;
  y = 0;
  n = 1;
  d = true;

  while (0 < n <= length ** 2) {
    for (let i = 0; i < length; i++) {
      d ? result[y][++x] = n++ : result[y][--x] = n++;
    }
    length--;
    for (let j = 0; j < length; j++) {
      d ? result[++y][x] = n++ : result[--y][x] = n++;
    }
    d = !d;
  }

  return result;
}

/* test case */
let input = [
  // TC-1 output=[ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]
  3,

  // TC-2 output=[
  //        [ 1, 2, 3, 4, 5 ],
  //        [ 16, 17, 18, 19, 6 ],
  //        [ 15, 24, 25, 20, 7 ],
  //        [ 14, 23, 22, 21, 8 ],
  //        [ 13, 12, 11, 10, 9 ]
  //      ]
  5,

  // TC-3 output=[
  //        [ 1, 2, 3, 4, 5, 6 ],
  //        [ 20, 21, 22, 23, 24, 7 ],
  //        [ 19, 32, 33, 34, 25, 8 ],
  //        [ 18, 31, 36, 35, 26, 9 ],
  //        [ 17, 30, 29, 28, 27, 10 ],
  //        [ 16, 15, 14, 13, 12, 11 ]
  //      ]
  6,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}