function solution(members) {
    const map = new Map(), result = [];
    let mafia;

    for (let i = 0; i < members.length; i++) {
        map.set(members[i], (map.get(members[i]) || 0) + 1);
    }

    map.forEach((val, key) => { if (val === 2) mafia = key; });

    members.filter((e, i) => { if (e === mafia) result.push(i); });

    return result;
}

console.log(solution([4, 4, 10, 4, 10]));