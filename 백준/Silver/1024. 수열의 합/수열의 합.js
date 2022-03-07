const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs.readFileSync(filePath).toString().trim().split(' ');

const solution = input => {
  const N = +input[0];
  let L = +input[1];

  const answer = [];
  while (N >= (L * (L - 1)) / 2 && L <= 100) {
    if ((N - (L * (L - 1)) / 2) % L == 0) {
      for (let j = 0; j < L; j++) {
        answer.push((N - (L * (L - 1)) / 2) / L + j);
      }
      console.log(answer.join(' '));
      return;
    }
    //수열의 길이 L를 늘리며 반복
    L++;
  }
  console.log(-1);
};

solution(input);