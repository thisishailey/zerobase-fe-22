/*** 4. 헨드폰 판매 ***/

/* my solution */
function answer(employee) {
  const maxVal = Math.max(...employee);
  const result = employee.indexOf(maxVal) + 1;
  return result;
}

/* test case */
let input = [
  // TC-1 output=3
  [3, 7, 9, 6, 1],
  // TC-2 output=2
  [2, 7, 1, 4, 3, 0, 5],
  // TC-3 output=6
  [7, 5, 0, 1, 2, 12, 6],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}