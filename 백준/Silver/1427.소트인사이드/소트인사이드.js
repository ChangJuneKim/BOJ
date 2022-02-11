const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('');

const solution = input => {
  console.log(input.sort((a, b) => b - a).join(''));
};

solution(input);
