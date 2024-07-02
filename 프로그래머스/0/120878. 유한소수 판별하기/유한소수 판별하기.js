function gcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

function solution(a, b) {
    let gcdValue = gcd(a, b);
    b /= gcdValue; // 기약분수의 분모

    // 분모의 소인수가 2와 5만 있는지 확인
    while (b % 2 === 0) {
        b /= 2;
    }
    while (b % 5 === 0) {
        b /= 5;
    }

    return b === 1 ? 1 : 2;
}