const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(val => +val);

// A고정비용 B가변비용 C물품가격
// A / (C - B) + 1 구하는 문제
const [A, B, C] = input;

const solution = (A, B, C) => {
  if (B >= C) {
    console.log(-1);
  } else {
    console.log(Math.trunc(A / (C - B) + 1));
  }
};

solution(A, B, C);
