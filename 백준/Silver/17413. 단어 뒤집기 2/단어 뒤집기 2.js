const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim();

const solution = input => {
  const S = input.split('');

  let stack = [];
  let queue = [];
  let answer = '';
  let isTag = false;
  let size = input.length + 1;
  for (let i = 0; i < size; i++) {
    let char = input[i];
    if (char === '<') {
      isTag = true;
      if (stack.length > 0) {
        answer += stack.reverse().join('');
        stack = [];
      }
    } else if (char === '>') {
      isTag = false;
      answer += queue.join('') + char;
      queue = [];
      continue;
    } else if ((char === ' ' && !isTag) || char === undefined) {
      answer += stack.reverse().join('').trim() + (char === ' ' ? char : '');
      stack = [];
      continue;
    }

    if (isTag) {
      queue.push(char);
    } else if (!isTag) {
      stack.push(char);
    }
  }
  console.log(answer);
};

solution(input);