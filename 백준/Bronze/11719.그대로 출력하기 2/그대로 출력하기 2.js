const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString();

const solution = input => {
  console.log(input);
};

solution(input);
