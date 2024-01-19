/* 체스 세트 */

/* my solution */
function answer(chess) {
  // K(1), Q(1), R(2), B(2), K(2), P(8)
  const realChess = [1, 1, 2, 2, 2, 8];
  let result = chess.map((e, i) => { return realChess[i] - e; });
  return result;
}

/* test case */
let input = [
  // TC-1 output=[ 1, 0, 0, 0, 0, 1 ]
  [0, 1, 2, 2, 2, 7],

  // TC-2 output=[ -1, 0, 0, 1, 0, 7 ]
  [2, 1, 2, 1, 2, 1],

  // TC-3 output=[ 1, 0, 1, -3, -1, 2 ]
  [0, 1, 1, 5, 3, 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}