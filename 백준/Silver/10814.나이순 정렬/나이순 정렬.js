const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  // const N = input[0];
  const users = input.slice(1);

  users.sort((a, b) => parseInt(a) - parseInt(b));

  console.log(users.join('\n'));
};

solution(input);