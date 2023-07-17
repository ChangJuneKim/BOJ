function solution(numbers) {
    let count = 0;
    
    const combination = (depth, start, sum) => {
        if(sum === 0 && depth === 3){
            count++;
            return;
        }
        
        for(let i = start; i < numbers.length; i++){
            combination(depth + 1, i + 1,sum + numbers[i])
        }
    }
    combination(0, 0, 0);
    
    return count;
}
