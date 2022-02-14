const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim();

const solution = input => {
  const string = input.split('');
  const length = input.length;
  const count = Math.floor(length / 10) + (Math.floor(length % 10) > 0 ? 1 : 0);
  const temp = [];

  for (let i = 0; i < count; i++) {
    temp.push(string.splice(0, 10));
  }
  const answer = temp.map(text => text.join(''));

  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
};

solution(input);