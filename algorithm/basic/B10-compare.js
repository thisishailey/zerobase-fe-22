/*** 1. 대소비교 ***/

/* my solution */
function answer(x, y) {
  if (x > y) return '>';
  else if (x < y) return '<';
  else return '=';
}

/* test case */
let input = [
  // TC-1 output='<'
  [3, 5],
  // TC-2 output='>'
  [7, 4],
  // TC-3 output='='
  [2, 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}