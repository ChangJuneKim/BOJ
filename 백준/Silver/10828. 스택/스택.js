const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  const [N, ...commands] = input;

  const stack = [];
  let pointer = 0;

  let answer = '';

  for (let i = 0; i < N; i++) {
    const command = commands[i].split(' ')[0];
    const number = commands[i].split(' ')[1];
    let result = '';

    switch (command) {
      case 'pop':
        if (pointer) {
          pointer--;
          result = stack.splice(-1); // 원본배열 보존 x
          answer += result + '\n';
        } else {
          answer += '-1' + '\n';
        }
        break;

      case 'push':
        stack[pointer++] = number;
        break;

      case 'size':
        result = pointer;
        answer += result + '\n';
        break;

      case 'empty':
        result = pointer ? 0 : 1;
        answer += result + '\n';
        break;

      case 'top':
        result = pointer ? stack[pointer - 1] : -1;
        answer += result + '\n';
        break;
      default:
        break;
    }
  }
  console.log(answer.trim());
};

solution(input);