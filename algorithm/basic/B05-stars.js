/*** 1. 별별별 ***/

/* my solution */
function answer(num) {
  let result = "";
  for (let i = 0; i < num; i++) result += '*';
  return result;
}

/* test case */
let input = [
  // TC-1 result="*****"
  5,
  // TC-2 result="*******"
  7,
  // TC-3 result="************"
  12,
  // TC-4 result=""
  0,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}