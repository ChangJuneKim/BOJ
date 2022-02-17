const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split(' ');

const N = +input[0];
const K = +input[1];

const solution = (N, K) => {
  const answer = [];
  const numberOfPeople = N;
  const killIndex = K;

  const people = Array.from({ length: numberOfPeople }, (_, i) => i + 1);

  while (people.length > 0) {
    for (let i = 0; i < killIndex - 1; i++) {
      const eliminated = people.shift();
      people.push(eliminated);
    }
    const eliminated = people.shift();
    answer.push(eliminated);
  }

  console.log(`<${answer.join(', ')}>`);
};

solution(N, K);