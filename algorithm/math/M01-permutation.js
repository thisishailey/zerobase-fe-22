let input = ["a", "b", "c"];
let cnt = 0;
let wordArr = [];

function permutation(arr, start, end) {
    if (start === end) {
        cnt++;
        wordArr.push(arr.join(''));
        return;
    }

    for (let i = start; i <= end; i++) {
        [arr[start], arr[i]] = [arr[i], arr[start]];
        permutation(arr, start + 1, end);
        [arr[start], arr[i]] = [arr[i], arr[start]];
    }
}

permutation(input, 0, 2);
console.log(wordArr, cnt);