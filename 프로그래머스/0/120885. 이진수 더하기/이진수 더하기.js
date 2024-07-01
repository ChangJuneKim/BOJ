function solution(bin1, bin2) {
    const dec1 = parseInt(bin1, 2)
    const dec2 = parseInt(bin2, 2)
    const sum = dec1 + dec2;
    
    return sum.toString(2);
}