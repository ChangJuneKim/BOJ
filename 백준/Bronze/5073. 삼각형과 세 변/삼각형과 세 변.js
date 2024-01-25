const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  let inputIndex = 0;

  while(true) {
    const [a, b, c] = input[inputIndex++].split(" ").map(Number).sort((a, b) => a - b);
    const set = new Set([a, b, c]);

    if(a === 0 && b === 0 && b === 0) break;
    if(c >= a + b) console.log('Invalid');
    else if(set.size === 1) console.log('Equilateral');
    else if(set.size === 2) console.log('Isosceles');
    else if(set.size === 3) console.log('Scalene');
  }
};

solution();