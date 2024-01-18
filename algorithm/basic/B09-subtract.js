/*** 5. 무한 뺄셈 ***/

/* my solution */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);
  while (e >= 0) {
    n = s - e;
    sequence.push(n);
    s = e;
    e = n;
  }
  sequence.pop();
  return sequence;
}

/* test case */
let input = [
  // TC-1 output=[ 9, 3, 6 ]
  [9, 3],
  // TC-2 output=[ 6, 3, 3, 0, 3 ]
  [6, 3],
  // TC-3 output=[ 13, 7, 6, 1, 5 ]
  [13, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}