function solution(n) {
    const result = [];
    
    while(n % 2 === 0){
        result.push(2);
        n /= 2;
    }
    
    for(let i = 3; i <= Math.sqrt(n); i++){
        while(n % i === 0){
            result.push(i);
            n /= i;
        }
    }
    
    if(n > 2) {
        result.push(n);
    }
    
    return [...new Set(result)];
}