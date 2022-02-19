const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split(' ');

const A = +input[0];
const B = +input[1];

const solution = (A, B) => {
  const arr = [];
  let num = 1;
  let count = 0;
  for (let i = 0; i < 1000; i++) {
    arr.push(num);
    count++;
    if (num == count) {
      num++;
      count = 0;
    }
  }

  const answer = arr.slice(A - 1, B).reduce((acc, cur) => acc + cur, 0);
  console.log(answer);
};

solution(A, B);