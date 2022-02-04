const fs = require('fs');
const filePath =  '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, maxSumOfCards] = input[0].split(' ').map(v => +v);
const cardNumberArray = input[1].split(' ').map(v => +v);

const solution = (N, maxSumOfCards, cardNumberArray) => {
  const cardSum = [];
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        cardSum.push(cardNumberArray[i] + cardNumberArray[j] + cardNumberArray[k]);
      }
    }
  }
  const answer = cardSum.filter(i => i <= maxSumOfCards).sort((a, b) => a - b);
  console.log(answer[answer.length - 1]);
};

solution(N, maxSumOfCards, cardNumberArray);
