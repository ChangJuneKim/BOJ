function solution(numbers) {
    const [min1, min2, ...rest] = numbers.sort((a, b) => a - b);
    const max1 = numbers[numbers.length - 1]; 
    const max2 = numbers[numbers.length - 2]; 
    
    console.log(max1, numbers);
    
    return Math.max(min1 * min2, max1 * max2);
}