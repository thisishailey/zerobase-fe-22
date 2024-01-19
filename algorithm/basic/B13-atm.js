/*** 4. ATM 기기 ***/

/* my solution */
function answer(withdraw, total) {
  if (withdraw % 5 !== 0) return total;
  if (total - withdraw < 0.5) return total;
  return total - withdraw - 0.5;
}

/* test case */
let input = [
  // TC-1 output=89.5
  [40, 130.0],
  // TC-2 output=130
  [33, 130.0],
  // TC-3 output=300
  [300, 300.0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}