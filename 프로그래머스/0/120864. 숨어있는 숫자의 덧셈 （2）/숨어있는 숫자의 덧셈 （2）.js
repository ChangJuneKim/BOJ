function solution(my_string) {
    return my_string.split(/\D+/).map(Number).filter(v => Number.isInteger(v)).reduce((acc, cur) => acc + cur, 0);
}