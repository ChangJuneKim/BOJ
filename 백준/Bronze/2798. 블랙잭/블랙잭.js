const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, maxSumOfCards] = input[0].split(' ').map(v => +v);
const cardNumberArray = input[1].split(' ').map(v => +v);

const solution = (N, maxSumOfCards, cardNumberArray) => {
  let max = 0;
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        const sum = cardNumberArray[i] + cardNumberArray[j] + cardNumberArray[k];
        if (max < sum && sum <= maxSumOfCards) {
          max = sum;
        }
      }
    }
  }
  console.log(max);
};

solution(N, maxSumOfCards, cardNumberArray);
