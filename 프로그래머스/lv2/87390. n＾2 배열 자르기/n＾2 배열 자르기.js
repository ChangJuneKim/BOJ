function solution(n, left, right) {
    let result = [];
    for (let index = left; index <= right; index++) {
        let row = Math.floor(index / n);
        let col = index % n;
        result.push(Math.max(row, col) + 1);
    }
    return result;
}
