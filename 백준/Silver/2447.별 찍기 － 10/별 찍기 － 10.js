const fs = require('fs');
const filePath =  '/dev/stdin';

const input = +fs.readFileSync(filePath).toString().trim();

let answer = '';
const paintStar = (i, j) => {
  if (i % 3 === 1 && j % 3 === 1) {
    answer += ' ';
  } else {
    if (Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0) {
      answer += '*';
    } else {
      paintStar(Math.floor(i / 3), Math.floor(j / 3));
    }
  }
};

const solution = input => {
  for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
      paintStar(i, j);
    }
    if (1 !== input - 1) {
      answer += '\n';
    }
  }
  console.log(answer);
};

solution(input);
