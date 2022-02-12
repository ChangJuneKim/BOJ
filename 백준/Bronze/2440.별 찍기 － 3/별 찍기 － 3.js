const fs = require('fs');
const filePath = '/dev/stdin';

const input = +fs.readFileSync(filePath).toString().trim();

const solution = input => {
  for (let i = input; i > 0; i--) {
    console.log('*'.repeat(i));
  }
};

solution(input);
