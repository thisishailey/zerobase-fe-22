function solution(s) {
    let arr = [];
    let longest = 1;

    for (const c of s.toLowerCase()) {
        if (arr.length > longest) longest = arr.length;
        arr.includes(c) ? arr = [c] : arr.push(c);
    }

    return longest;
}

console.log(solution('sdbdskeossk'));