const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  const [N, ...arr] = input;

  for (let i = 0; i < N; i++) {
    while (arr[i].includes('()')) {
      arr[i] = arr[i].replace('()', '');
    }
    arr[i].length === 0 ? console.log('YES') : console.log('NO');
  }
};

solution(input);