const fs = require('fs');
const filePath = '/dev/stdin';


const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  let num = Number(input[0]);

  for (let i = 1; i <= num; i++) {
    let line = input[i].split(' ').map(v => +v);
    let sum = line.reduce((acc, cur) => acc + cur, -line[0]);
    let result = sum / line[0];
    let answer = line.slice(1).filter(item => item > result).length;
    let last = Number((answer / line[0]) * 100);
    console.log(`${last.toFixed(3)}%`);
  } 
};

solution(input);