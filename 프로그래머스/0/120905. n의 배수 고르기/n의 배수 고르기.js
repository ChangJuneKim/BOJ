function solution(n, numlist) {
    return numlist.filter(number => number % n ===0)
}