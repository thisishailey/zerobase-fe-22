/* 2. 잃어버린 카드 찾기 */

/* my solution */
function answer(a, b, c) {
  let number = 0;

  // sort
  num = [a, b, c];
  num.sort((x, y) => x - y);

  // 코드 구현 시작 영역

  // …

  // 코드 구현 종료 영역

  return number;
}

/* test case */
let input = [
  // TC-1 output=
  [1, 7, 10],

  // TC-2 output=
  [3, 8, 18],

  // TC-3 output=
  [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}