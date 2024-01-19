/*** 3. 윤년 판별기 ***/

/* my solution */
function answer(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) return true;
  return false;
}

/* test case */
let input = [
  // TC-1 output=true
  4,
  // TC-2 output=false
  100,
  // TC-3 output=true
  124,
  // TC-4 output=false
  247,
  // TC-5 output=true
  400,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}