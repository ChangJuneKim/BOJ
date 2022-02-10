const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const numbers = input[1].split(' ').map(v => +v);

const solution = numbers => {
  console.log(Math.max(...numbers) * Math.min(...numbers));
};

solution(numbers);