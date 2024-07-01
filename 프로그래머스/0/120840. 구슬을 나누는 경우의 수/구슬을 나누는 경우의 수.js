function factorial(n) {
    if (n === 0 || n === 1) return BigInt(1);
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
        result *= BigInt(i);
    }
    return result;
}

function combination(n, r) {
    if (r > n) return BigInt(0);
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function solution(balls, share) {
    return combination(balls, share);
}