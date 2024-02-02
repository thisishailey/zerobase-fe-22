function solution(phone_book) {
    const arr = phone_book.sort();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1]?.indexOf(arr[i]) === 0) return false;
    }

    return true;
}