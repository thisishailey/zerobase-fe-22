/* 7. 스팸 메일 */

/* my solution */
function answer(str) {
  return str.toLowerCase().includes('advert');
}

/* test case */
let input = [
  // TC-1 output=false
  "RE: Request documents",
  // TC-2 output=true
  "[Advertisement] free mobile!",
  // TC-3 output=true
  "50% off this week (advertising)",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}