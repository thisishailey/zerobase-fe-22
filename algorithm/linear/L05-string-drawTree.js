/* 나무 그리기 */

/* my solution */
function answer(height) {
  let str = '\n';
  for (let i = 1; i <= height; i++) {
    const space = (height - i);
    const star = (2 * i) - 1;
    str += `${' '.repeat(space)}${'*'.repeat(star)}\n`
  }
  return str;
}

/* test case */
let input = [
  // TC-1 output=   *
  //               ***
  //              *****
  3,

  // TC-2 output=5-line-tree
  5,

  // TC-3 output=7-line-tree
  7,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}