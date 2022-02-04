const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(v => +v);

const [A, B] = input;

const solution = (A, B) => {
  const primes = new Array(B + 1).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.ceil(Math.sqrt(B)); i++) {
    if (primes[i]) {
      let m = 2;
      while (i * m <= B) {
        primes[i * m] = false;
        m++;
      }
    }
  }

  const answer = [];
  for (let i = A; i <= B; i++) {
    if (primes[i]) {
      answer.push(i);
    }
  }
  if (answer.length === 0) {
    return console.log(-1);
  } else {
    console.log(
      answer.reduce((acc, cur) => {
        return acc + cur;
      }, 0)
    );
    console.log(answer[0]);
  }
};

solution(A, B);
