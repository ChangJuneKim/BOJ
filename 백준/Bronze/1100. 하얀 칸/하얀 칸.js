const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(''));

const solution = input => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (i % 2 === 0) {
        //흰검흰검
        if (j % 2 === 0) {
          // console.log('흰');
          if (input[i][j] === 'F') {
            count++;
          }
        } else {
          // console.log('검');
        }
      } else {
        //검흰검흰
        if (j % 2 === 0) {
          // console.log('검');
        } else {
          // console.log('흰');
          if (input[i][j] === 'F') {
            count++;
          }
        }
      }
    }
  }
  console.log(count);
};

solution(input);
