const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  const [N, M] = input.shift().split(' ');

  const 듣도못한사람 = new Set();
  const 보도못한사람 = new Set();

  for (let i = 0; i < input.length; i++) {
    if (i < N) {
      듣도못한사람.add(input[i]);
    } else {
      보도못한사람.add(input[i]);
    }
  }

  let answer = [];

  보도못한사람.forEach(사람 => {
    if (듣도못한사람.has(사람)) {
      answer.push(사람);
    }
  });

  answer.sort();
  console.log(`${answer.length}\n${answer.join('\n')} `);
};

solution(input);
