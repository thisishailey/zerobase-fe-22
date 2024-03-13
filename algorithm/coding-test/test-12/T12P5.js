function solution(state, linkNums) {
    const moleIn = [],
        moleOut = [],
        candidate = [];

    for (let i = 0; i < state.length; i++) {
        state[i] === 1 ? moleOut.push(i) : moleIn.push(i);
    }

    // for (let i = 0; i < linkNums.length; i++) {
    //     const arr = moleIn.filter(n => linkNums[i].includes(n));
    //     if (arr.length === 0) {
    //         continue;
    //     }

    //     if (arr.length === linkNums[i].length) {
    //         candidate.push(i);
    //     } else {
    //         const others = linkNums[i].filter(n => !arr.includes(n));
    //     }
    // }

    return 3;
}
