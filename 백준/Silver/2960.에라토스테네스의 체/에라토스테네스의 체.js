const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split(' ');

const N = +input[0];
const K = +input[1];

const solution = (N, K) => {
  const numbers = new Array(N);
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i;
  }

  for (let i = 2; i <= N; i++) {
    for (let j = i; j <= N; j += i) {
      if (numbers[j] === 0) continue;
      numbers[j] = 0;
      count++;

      if (count === K) {
        console.log(j);
        return;
      }
    }
  }
};

solution(N, K);