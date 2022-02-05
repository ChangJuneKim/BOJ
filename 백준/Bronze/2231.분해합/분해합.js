const fs = require('fs');
const filePath =  '/dev/stdin';

const num = +fs.readFileSync(filePath).toString().trim();
let constructor = [];

const decompositionSum = num => {
  let sum = num;
  while (1) {
    if (num === 0) break;
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

for (let i = 1; i <= num; i++) {
  if (num === decompositionSum(i)) {
    constructor.push(i);
  }
}

if (constructor.length === 0) {
  console.log(0);
} else {
  console.log(constructor[0]);
}
