function solution(array) {
    const max = Math.max(...array);
    return [max, array.findIndex(v => v === max)]
}