const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

function solution() {
  const gears = input.slice(0, 4).map(gear => gear.split('').map(Number));
  const K = parseInt(input[4], 10);
  const rotations = input.slice(5, 5 + K).map(rotation => rotation.split(' ').map(Number));

  // 톱니바퀴 회전
  function rotateGear(gear, direction) {
    if (direction === 1) {
      return [gear[7]].concat(gear.slice(0, 7));
    } else {
      return gear.slice(1).concat([gear[0]]);
    }
  }

  // 인접 톱니바퀴 회전 결정
  function determineAdjacentRotations(gearNum, direction) {
    const toRotate = new Array(4).fill(0);
    toRotate[gearNum - 1] = direction;

    for (let j = gearNum - 1; j > 0; j--) {
      if (gears[j][6] !== gears[j - 1][2]) {
        toRotate[j - 1] = -toRotate[j];
      } else {
        break;
      }
    }
    for (let j = gearNum - 1; j < 3; j++) {
      if (gears[j][2] !== gears[j + 1][6]) {
        toRotate[j + 1] = -toRotate[j];
      } else {
        break;
      }
    }
    return toRotate;
  }

  // 점수 계산
  function calculateScore() {
    let score = 0;
    if (gears[0][0] === 1) score += 1;
    if (gears[1][0] === 1) score += 2;
    if (gears[2][0] === 1) score += 4;
    if (gears[3][0] === 1) score += 8;
    return score;
  }

  rotations.forEach(([gearNum, direction]) => {
    const toRotate = determineAdjacentRotations(gearNum, direction);
    toRotate.forEach((dir, i) => {
      if (dir !== 0) {
        gears[i] = rotateGear(gears[i], dir);
      }
    });
  });

  console.log(calculateScore());
}

solution();
