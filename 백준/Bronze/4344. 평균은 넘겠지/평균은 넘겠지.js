const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input[0];
let testCase = [];
for (let i = 1; i <= N; i++) {
  testCase.push(input[i].split(' ').map(val => +val));
}

const solution = (N, scores) => {
  for (let i = 0; i < N; i++) {
    let total = 0;
    let avg = 0;
    let count = 0;
    for (let j = 1; j < scores[i].length; j++) {
      total += scores[i][j];
    }

    avg = total / (scores[i].length - 1);

    for (let j = 1; j < scores[i].length; j++) {
      if (scores[i][j] > avg) {
        count++;
      }
    }

    console.log(((count / (scores[i].length - 1)) * 100).toFixed(3) + '%');
  }
};

solution(N, testCase);
