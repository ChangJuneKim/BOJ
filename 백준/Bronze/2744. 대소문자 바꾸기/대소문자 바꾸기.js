const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim();

const solution = input => {
  const string = input;

  let answer = '';

  string.split('').forEach(char => {
    if (char === char.toLowerCase()) {
      // 원래 문자와 소문자화 시킨 문자가 같으면 소문자
      answer += char.toUpperCase();
      return;
    } else {
      // 아니면 대문자
      answer += char.toLowerCase();
      return;
    }
  });
  console.log(answer);
};

solution(input);