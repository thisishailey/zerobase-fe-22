function solution(puzzle, word) {
    const wordArr = word.split('');
    const idxArr = [];

    for (let i = 0; i < wordArr.length; i++) {
        puzzle.forEach((arr, y) =>
            arr.forEach((e, x) => {
                if (e === wordArr[i]) idxArr.push([y, x]);
            })
        );
    }

    for (let i = 0; i < idxArr.length - 1; i++) {
        const current = idxArr[i];
        const next = idxArr[i + 1];
        if (current[0] !== next[0] && current[1] !== next[1]) {
            return false;
        }
    }

    return true;
}
