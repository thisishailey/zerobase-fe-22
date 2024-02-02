function solution(clothes) {
    const hash = new Map();
    let result = 1;

    clothes.forEach(e => hash.set(e[1], (hash.get(e[1]) || 0) + 1));

    hash.forEach(val => result *= val + 1);

    return --result;
}