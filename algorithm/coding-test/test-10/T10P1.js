function solution(cards) {
    cards.sort((x, y) => y - x);

    while (cards.length > 1) {
        const newCard = cards[0] - cards[1];
        if (newCard === 0) {
            cards.splice(0, 2);
        } else {
            cards.splice(0, 2, newCard);
            cards.sort((x, y) => y - x);
        }
    }

    if (cards[0]) return cards[0];

    return 0;
}

console.log(solution([2, 2, 5, 3, 1, 7]));
console.log(solution([3, 9, 5, 21, 1, 17]));
