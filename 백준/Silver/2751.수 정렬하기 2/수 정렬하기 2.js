const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const numbers = input.slice(1, N + 1).map(v => +v);

const solution = (N, numbers) => {
  let result = '';
  const sortedNumbers = numbers.sort((a, b) => a - b)
  for (let i = 0; i < N; i++) {
    result += `${sortedNumbers[i]}\n`;
  }
  console.log(result)
};

solution(N, numbers);
