const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split(' ');
let A = input[0];
let B = input[1];

const solution = (A, B) => {
  let result;
  if (A.length > B.length) {
    B = '0'.repeat(A.length - B.length) + B;
    result = Array(A.length + 1).fill(0);
  } else if (A.length < B.length) {
    A = '0'.repeat(B.length - A.length) + A;
    result = Array(B.length + 1).fill(0);
  } else {
    result = Array(A.length + 1).fill(0);
  }

  let carry = 0; //올림수

  for (let i = A.length - 1; i >= 0; i--) {
    let a = +A[i];
    let b = +B[i];
    let sum = a + b;
    let remain = (carry + sum) % 10;
    carry = Math.floor((carry + sum) / 10);
    result[i + 1] = remain;
  }
  if (carry) {
    result[0] += carry;
  }

  if (result[0] === 0) {
    console.log(result.join('').slice(1, result.length));
  } else {
    console.log(result.join(''));
  }
};

solution(A, B);
