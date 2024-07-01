function solution(sides) {
    const [a, b, c] = sides.sort((a, b) => a - b);
    
    const max = c
    
    return a + b > c ? 1 : 2;
}