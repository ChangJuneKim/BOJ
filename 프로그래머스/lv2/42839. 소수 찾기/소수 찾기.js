function solution(numbers) {
    const allCombs = getAllCombinations(numbers);
    const uniqueNumbers = new Set(allCombs.map(comb => parseInt(comb, 10)).filter(num => num > 1)); // 1보다 큰 수만 선택
    let count = 0;

    uniqueNumbers.forEach(num => {
        if(isPrime(num)) {
            count++;
        }
    });

    return count;
}

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function getAllCombinations(str) {
    const results = [];
    
    const f = (prefix, chars) => {
        for (let i = 0; i < chars.length; i++) {
            results.push(prefix + chars[i]);
            f(prefix + chars[i], chars.slice(0, i) + chars.slice(i + 1));
        }
    }
    
    f('', str);
    return results;
}
