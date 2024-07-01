function solution(sides) {
    const [a, b] = sides;
    const maxSide = Math.max(a, b);
    const minSide = Math.min(a, b);
    
    // 가능한 c의 범위
    const lowerLimit = maxSide - minSide + 1;
    const upperLimit = a + b - 1;
    
    // 가능한 정수의 개수는 두 범위의 개수의 합
    return upperLimit - lowerLimit + 1;
}