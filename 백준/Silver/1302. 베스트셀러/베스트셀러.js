const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = (input) => {
    const N = +input.shift();
    const obj = {};
    
    // frequency Counter object
    for (const value of input) {
        obj[value] ? (obj[value] += 1) : (obj[value] = 1);
    }
    
    const items = Object.keys(obj).map((key) => [key, obj[key]]);
    
    items.sort((a, b) => {
        if (a[1] > b[1]) return -1;
        if (a[1] < b[1]) return 1;
        
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1; 
    }); 
    
    console.log(items[0][0]); 
}; 

solution(input);