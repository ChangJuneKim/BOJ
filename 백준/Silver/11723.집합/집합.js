const fs = require('fs');
// const filePath = '/dev/stdin';
const filePath = './input.txt';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .slice(1)
  .map(value => value.split(' '));

//   공집합 S
// add 1 ---> S(1) 이미 1이 있으면 연산 무시
// remove 1 ---> S안에 1 제거(없으면 연산 무시)
// check 1 ---> S안에 1이 있으면 1출력 없으면 0 출력
// toggle 1 ---> 1이 있으면 1제거 없으면 1 추가
// all ---> S를 1~20으로 바꿈
// empty ---> S를 비운다

const solution = input => {
  let S = [];
  let answer = '';
  for (let i = 0; i < input.length; i++) {
    let operator = input[i][0];
    let x = input[i][1];

    switch (operator) {
      case 'add':
        if (S.includes(x)) {
          continue;
        } else {
          S.push(x);
        }
        break;
      case 'remove':
        if (S.includes(x)) {
          S = S.filter(number => number !== x);
        } else {
          continue;
        }
        break;
      case 'check':
        if (S.includes(x)) {
          answer += '1\n';
        } else {
          answer += '0\n';
        }
        break;
      case 'toggle':
        if (S.includes(x)) {
          S = S.filter(number => number !== x);
        } else {
          S.push(x);
        }
        break;
      case 'all':
        S = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        break;
      case 'empty':
        S = [];
        break;
      default:
        break;
    }
  }
  console.log(answer.trim());
};

solution(input);
