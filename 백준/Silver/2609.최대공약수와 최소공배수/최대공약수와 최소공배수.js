const fs = require('fs');
const filePath = '/dev/stdin';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(v => +v);

const [num1, num2] = input;

const getGcd = (num1, num2) => {
  if (num2 == 0) {
    return num1;
  } else {
    return getGcd(num2, num1 % num2);
  }
};

const getLcm = (num1, num2) => {
  gcd = getGcd(num1, num2);
  return (num1 * num2) / gcd;
};

const solution = (num1, num2) => {
  const gcd = getGcd(num1, num2);
  const lcm = getLcm(num1, num2);
  console.log(`${gcd}\n${lcm}`);
};

solution(num1, num2); 