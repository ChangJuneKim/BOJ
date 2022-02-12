const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split(' ');

const solution = input => {
  console.log(new Date(2007, +input[0] - 1, input[1]).toDateString().slice(0, 3).toUpperCase());
};

solution(input);
