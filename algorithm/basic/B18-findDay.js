/* 4. 요일 구하기 */

/* my solution */
function answer(str) {
  const week = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const day = new Date(str).getDay();
  return week[day];
}

/* test case */
let input = [
  // TC-1 output=수요일
  "2021-01-27",
  // TC-2 output=토요일
  "2021-02-27",
  // TC-3 output=일요일
  "2021-03-14",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}