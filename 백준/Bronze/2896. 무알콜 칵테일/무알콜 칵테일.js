const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  let answer = '';

  const [orange, apple, pineapple] = input[0].split(' ').map(v => +v);
  const [i, j, k] = input[1].split(' ').map(v => +v);

  const min = Math.min(orange / i, apple / j, pineapple / k);

  if (orange - i * min <= 0) answer += '0 ';
  else answer += (orange - i * min).toFixed(6) + ' ';

  if (apple - j * min <= 0) answer += '0 ';
  else answer += (apple - j * min).toFixed(6) + ' ';

  if (pineapple - k * min <= 0) answer += '0';
  else answer += (pineapple - k * min).toFixed(6);

  console.log(answer);
};

solution(input);