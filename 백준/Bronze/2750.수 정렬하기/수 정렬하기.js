const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const numbers = input.slice(1, N + 1).map(v => +v);

const solution = (N, numbers) => {
  for (let i = 0; i < N; i++) {
    let temp;
    for (let j = 0; j < N - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < N; i++) {
    console.log(numbers[i]);
  }
};

solution(N, numbers);
