const fs = require('fs');
const filePath =  '/dev/stdin';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ');

// const inputTestCase = [];

// for (let i = 1; i < inputC; i++) {
//   const arr = input[i].split(' ').map(item => +item);

//   const newArr = [];

//   for (let i = 1; i <= arr[0]; i++) {
//     newArr.push(arr[i]);
//   }

//   const testCase = {
//     N: arr[0],
//     arr: newArr,
//   };

//   inputTestCase.push(testCase);
// }

const solution = (a, b) => {
  console.log(+a - +b);
};

solution(input[0], input[1]);
