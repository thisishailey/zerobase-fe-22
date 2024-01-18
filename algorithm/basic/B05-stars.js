/*** 1. 별별별 ***/

/* my solution */
function answer(num) {
  let result = "";
  for (let i = 0; i < num; i++) result += '*';
  return result;
}

/* test case */
let input = [
  // TC-1 output="*****"
  5,
  // TC-2 output="*******"
  7,
  // TC-3 output="************"
  12,
  // TC-4 output=""
  0,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}