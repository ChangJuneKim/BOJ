const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim();

const solution = input => {
  const a = input.split('1').filter(el => el !== '').length;
  const b = input.split('0').filter(el => el !== '').length;

  if (a > b) {
    console.log(b);
  } else {
    console.log(a);
  }
};

solution(input);
