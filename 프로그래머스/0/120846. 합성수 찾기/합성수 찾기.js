function solution(n) {
    // 일단 다 소수라고 생각해
    const isPrime = Array.from({length: n + 1}, () => true);
    
    // 0이랑 1은 소수가 아니야
    isPrime[0] = isPrime[1] = false;
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(isPrime[i]){
            for(let j = i * i; j <= n; j += i){
                isPrime[j] = false;
            }
        }
    }
    
    return (n - isPrime.filter(v => v === true).length - 1)
}