const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [L, C] = input[0].split(' ').map(Number);
const alphabet = input[1].split(' ').sort();

const aeiou = ['a', 'e', 'i', 'o', 'u'];

const answer = [];
const solution = (str, startIndex) => {
  if (str.length === L) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
      if (aeiou.includes(str[i])) cnt++;
    }
    if (cnt > 0 && L - cnt > 1) {
      answer.push(str);
    }
    return;
  } else {
    for (let i = startIndex; i < C; i++) {
      solution(str + alphabet[i], i + 1);
    }
  }
};

solution('', 0);

console.log(answer.join('\n'));