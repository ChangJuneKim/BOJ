function solution(topping) {
    const n = topping.length;
    const leftCount = new Array(topping.length).fill(0);
    const rightCount = new Array(topping.length).fill(0);
    
    const left = new Set();
    const right = new Set();
    
    topping.forEach((cake, i) => {
        left.add(cake);
        leftCount[i] = left.size;
    })
    
    for (let i = n - 1; i >= 0; i--) {
        right.add(topping[i]);
        rightCount[i] = right.size;
    }
    
    let count = 0;
    
    for(let i = 0; i < n - 1; i++){
         if (leftCount[i] === rightCount[i + 1]) {
            count++;
        }
    }
    
    return count;
}