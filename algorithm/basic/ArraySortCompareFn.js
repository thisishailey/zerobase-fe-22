const ascOrder = function (x, y) {
    if (typeof x === 'string') x = x.toUpperCase();
    if (typeof y === 'string') y = y.toUpperCase();
    return x > y ? 1 : -1;
}

const descOrder = function (x, y) {
    if (typeof x === 'string') x = x.toUpperCase();
    if (typeof y === 'string') y = y.toUpperCase();
    return x < y ? 1 : -1;
}

const nums = [4, 2, -43, 9, 14, -5, -21, 37, 29];
console.log(nums.sort(ascOrder));
console.log(nums.sort(descOrder));

const fruits = ['apple', 'orange', 'Banana', 'kiwi', 'Lemon', 'Strawberry'];
console.log(fruits.sort(ascOrder));
console.log(fruits.sort(descOrder));