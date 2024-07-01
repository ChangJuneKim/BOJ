function solution(my_string) {
    return [...my_string].map(Number).filter(v => Number.isInteger(v)).sort()
}