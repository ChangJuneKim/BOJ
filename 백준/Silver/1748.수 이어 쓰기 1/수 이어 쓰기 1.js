const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs.readFileSync(filePath).toString().trim();

const solution = input => {
  let result = 0;
  for (let i = 1; i <= +input; i *= 10) {
    result += +input - i + 1;
  }
  console.log(result);
};

solution(input);
