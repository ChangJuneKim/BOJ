const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim();

// 0이 포함되어있지 않으면 30의 배수가 아니다, 모든 자리의 수를 합해서 3으로 나누어지면 3의 배수이다.
const solution = input => {
  const isIncludeZero = input.split('').includes('0');

  if (!isIncludeZero) {
    console.log(-1);
    return;
  }

  const sum = input
    .split('')
    .map(Number)
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  if (sum % 3 !== 0) {
    console.log(-1);
    return;
  } else {
    console.log(
      input
        .split('')
        .sort((a, b) => b - a)
        .join('')
    );
  }
};

solution(input);
