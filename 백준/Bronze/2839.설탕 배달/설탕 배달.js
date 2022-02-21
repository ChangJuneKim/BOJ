const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs.readFileSync(filePath).toString().trim();

const solution = input => {
  let N = +input;
  let bag = 0;

  while (N >= 0) {
    if (N % 5 === 0) {
      bag += Math.floor(N / 5);
      console.log(bag);
      return;
    }
    N -= 3;
    bag++;
  }
  console.log(-1);
};

solution(input);