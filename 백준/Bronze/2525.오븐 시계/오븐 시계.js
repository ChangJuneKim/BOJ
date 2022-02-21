const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = input => {
  let [hour, min] = input[0].split(' ').map(v => +v);
  const cookingTime = +input[1];

  min = min + cookingTime;

  if (min >= 60) {
    hour += Math.floor(min / 60);
    min = min % 60;
  }

  if (hour >= 24) hour = hour % 24;

  console.log(`${hour} ${min}`);
};

solution(input);