const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n")

const solution = () => {
  const [N, M, x, y, K] = input[0].split(' ').map(Number);

  const map = [];
  for (let i = 1; i <= N; i++) {
    map.push(input[i].split(' ').map(Number));
  }

  const commands = input[N + 1].split(' ').map(Number);

  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];

  let dice = [0, 0, 0, 0, 0, 0]; // top, bottom, left, right, front, back
  let currentX = x;
  let currentY = y;

  for (const command of commands) {
    const nx = currentX + dx[command - 1];
    const ny = currentY + dy[command - 1];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    if (command === 1) {
      [dice[0], dice[2], dice[1], dice[3]] = [dice[2], dice[1], dice[3], dice[0]];
    } else if (command === 2) {
      [dice[0], dice[2], dice[1], dice[3]] = [dice[3], dice[0], dice[2], dice[1]];
    } else if (command === 3) {
      [dice[0], dice[4], dice[1], dice[5]] = [dice[4], dice[1], dice[5], dice[0]];
    } else {
      [dice[0], dice[4], dice[1], dice[5]] = [dice[5], dice[0], dice[4], dice[1]];
    }

    if (map[nx][ny] === 0) {
      map[nx][ny] = dice[1];
    } else {
      dice[1] = map[nx][ny];
      map[nx][ny] = 0;
    }

    console.log(dice[0]);

    currentX = nx;
    currentY = ny;
  }
};

solution();