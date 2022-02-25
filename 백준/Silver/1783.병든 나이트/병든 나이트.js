const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);

const solution = input => {
  const [N, M] = input;

  if (N === 1) {
    console.log(1);
  } else if (N === 2) {
    if (4 < Math.floor((M + 1) / 2)) {
      console.log(4);
    } else {
      console.log(Math.floor((M + 1) / 2));
    }
  } else if (M < 7) {
    if (4 < M) {
      console.log(4);
    } else {
      console.log(M);
    }
  } else {
    console.log(M - 7 + 5);
  }
};

solution(input);
