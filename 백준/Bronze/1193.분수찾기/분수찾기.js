const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);

// 1/1
// 1/2 2/1
// 3/1 2/2 1/3
// 1/4 2/3 3/2 4/1
// 5/1 4/2 3/3 2/4 1/5

//input 번째 분수가 몇번째 줄에 위치하는지 찾는 함수
const checkLine = number => {
  let line = 0;
  let num = number;
  for (let i = 0; 0 < num; i++) {
    line++;
    num -= i;
  }
  return line - 1;
};

//그 줄의 몇번째 위치인지 찾는 함수
const positionOfNum = number => {
  let num = number;
  let numPosition = 0;
  for (let i = 0; 0 < num; i++) {
    numPosition = num;
    num -= i;
  }
  return numPosition;
};

const solution = input => {
  const number = Number(input); // input번째 수를 찾을거야

  const line = checkLine(number);
  const numPosition = positionOfNum(number);

  if (line % 2 === 1) {
    console.log(`${line - (numPosition - 1)}/${numPosition}`);
  } else {
    console.log(`${numPosition}/${line - (numPosition - 1)}`);
  }
};

solution(input);
