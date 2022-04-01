const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] == 0) {
      continue;
    } else if (input[i] === input[i].split('').reverse().join('')) {
      console.log('yes');
    } else {
      console.log('no');
    }
  }
};

solution(input);