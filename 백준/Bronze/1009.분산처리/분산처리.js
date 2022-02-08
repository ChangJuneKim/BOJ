const fs = require('fs');
const filePath =  '/dev/stdin';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();
const solution = (input) => {
      const result = input.map(v => {
      const [a, b] = v.split(' ');  
    
      let pow = 1;

      for (let i = 0; i < b; i++) {
        pow = (pow * a) % 10;
      }
      return pow === 0 ? 10 : pow;
    });
    console.log(result.join("\n"));    
}

solution(input)


