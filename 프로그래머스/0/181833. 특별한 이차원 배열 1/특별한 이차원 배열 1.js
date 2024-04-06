function solution(n) {
    return Array.from({length: n}, (_, a) => Array.from({length: n},  (_, b) => a === b ? 1 : 0))
}