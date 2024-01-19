/* 2. 잃어버린 카드 찾기 */

/* my solution */
function answer() {
  const num = [...arguments];
  num.sort((x, y) => x - y);
  let number = num[1] - num[0];
  for (let i = 1; i < num.length - 1; i++) {
    const d = num[i + 1] - num[i];
    if (d !== number) d > number ? number += num[i] : number = num[0] + d;
  }
  return number;
}

/* test case */
let input = [
  // TC-1 output=4
  [1, 7, 10],

  // TC-2 output=13
  [3, 8, 18],

  // TC-3 output=8
  [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}