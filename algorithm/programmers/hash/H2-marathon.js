function solution(participant, completion) {
    const hash = new Map();

    for (let i = 0; i < participant.length; i++) {
        const p = participant[i];
        const c = completion[i];

        hash.set(p, (hash.get(p) || 0) + 1);
        hash.set(c, (hash.get(c) || 0) - 1);
    }

    for (const [key, val] of hash) {
        if (val >= 1) return key;
    }
}