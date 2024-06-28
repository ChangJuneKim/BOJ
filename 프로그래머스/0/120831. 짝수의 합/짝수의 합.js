function solution(n) {
    return Array.from({length: n}, (_, index) => index + 1).filter(v => v % 2 === 0).reduce((acc, cur) => acc + cur, 0);

}