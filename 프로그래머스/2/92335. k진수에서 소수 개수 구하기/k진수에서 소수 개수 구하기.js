function solution(n, k) {
    const number = (n).toString(k);
    
    const potentialPrimes = number.split("0").map(Number);
    
    const count = potentialPrimes.filter(number => isPrime(number)).length;
    
    return count;
    
    function isPrime(number) {
        if(number <= 1) return false;
        if(number <= 3) return true;
        if(number % 2 === 0 || number % 3 === 0) return false;
        
        let i = 5;
        while (i * i <= number) {
            if (number % i === 0 || number % (i + 2) === 0) return false;
            i += 6;
        }
        
        return true;
    }
}