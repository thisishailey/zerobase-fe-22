function solution(S) {
    const arr = S.split('');
    const pair = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            pair.push(')');
        } else if (arr[i] === '{') {
            pair.push('}');
        } else if (arr[i] === '[') {
            pair.push(']');
        } else if (arr[i] === '<') {
            pair.push('>');
        } else if (arr[i] === pair[pair.length - 1]) {
            pair.pop();
        } else {
            return 0;
        }
    }

    return 1;
}

console.log(solution('(()){[<>]}'));
console.log(solution('(){}[<]>'));
