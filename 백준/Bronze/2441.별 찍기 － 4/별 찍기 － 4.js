const fs = require('fs');
const filePath = '/dev/stdin';

const input = +fs.readFileSync(filePath).toString().trim();

const solution = input => {
  for (let i = 0; i < input; i++) {
    console.log(' '.repeat(i) + '*'.repeat(input - i));
  }
};

solution(input);
