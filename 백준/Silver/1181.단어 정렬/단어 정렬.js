const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  const N = +input[0];
  const words = input.slice(1);

  const sorted = words.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });
  console.log([...new Set(sorted)].join('\n'));
};

solution(input);
