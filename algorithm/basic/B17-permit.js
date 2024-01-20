/* 3. 놀이기구 입장 제한 */

/* my solution */
function answer(user) {
  // solution #1
  if (user.height < 150) return false;
  return true;
  // solution #2
  return user.height < 150 ? false : true;
}

/* test case */
let input = [
  // TC-1 output=true
  { name: "john", age: 27, height: 181 },
  // TC-2 output=false
  { name: "alice", age: 12, height: 148 },
  // TC-3 output=true
  { name: "bob", age: 14, height: 156 },
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}