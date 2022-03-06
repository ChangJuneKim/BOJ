const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const gcd = (num1, num2) => {
  if (num2 <= 0) return num1;

  let tmp = num1;
  num1 = num2;
  num2 = tmp % num2;

  return gcd(num1, num2);
};

const solution = input => {
  const N = +input[0];
  const radius = input[1].split(' ').map(v => +v);

  for (let i = 1; i < N; i++) {
    let answer = '';
    let gcdNum = gcd(radius[i], radius[0]);
    answer += radius[0] / gcdNum;
    answer += '/';
    answer += radius[i] / gcdNum;

    console.log(answer);
  }
};

solution(input);