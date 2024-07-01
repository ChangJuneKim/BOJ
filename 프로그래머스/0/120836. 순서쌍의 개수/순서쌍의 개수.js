function solution(n) {
    let flag = false;
    let count = 0;
    for(let i = 1; i <= Math.floor(Math.sqrt(n)); i++){
        if(n % i === 0) count++;
    }
    
    if(Math.sqrt(n) === Math.floor(Math.sqrt(n))) flag = true;
    
    return flag ? count * 2 - 1 : count * 2;
}