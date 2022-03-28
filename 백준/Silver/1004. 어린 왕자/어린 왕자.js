const fs = require('fs');
const filePath = '/dev/stdin';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const isInclude = (x, y, a, b, r) => {
  // 점을 포함하고 있는지 판단
  // x y (좌표)
  // a b (행성계 중점 좌표)
  // r (반지름)
  if (Math.sqrt((x - a) ** 2 + (y - b) ** 2) > r) {
    return false;
  }
  return true;
};

const solution = input => {
  let index = 0;
  const T = +input[index++];

  for (let i = 0; i < T; i++) {
    let count = 0;
    const [x1, y1, x2, y2] = input[index++].split(' ').map(x => +x);
    const numOfPlanets = +input[index++];

    for (let j = 0; j < numOfPlanets; j++) {
      const [a, b, r] = input[index++].split(' ').map(x => +x);
        
      if (isInclude(x1, y1, a, b, r) !== isInclude(x2, y2, a, b, r)) {
        count++;
      }
    }
    console.log(count);
  }
};

solution(input);