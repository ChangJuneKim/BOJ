function solution(want, number, discount) {
    if (!want.every(item => discount.includes(item))) return 0;
    
    const freq = want.reduce((freq, item, index) => {
        freq[item] = number[index];
        return freq;
    }, {})
    
    let count = 0;
    
    for(let i = 0; i < discount.length - 9; i++){
        const _freq = {...freq};
        const canDiscount = discount.slice(i, i + 10);
        canDiscount.forEach(item => _freq[item] && _freq[item]--);
        
        if(Object.values(_freq).every(num => num <= 0)) {
            count++;
        }    
    } 
    
    return count;
}