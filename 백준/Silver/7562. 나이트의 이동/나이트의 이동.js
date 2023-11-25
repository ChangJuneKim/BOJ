const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const T = +input[0];
  let inputIndex = 1;
  // 나이트의 이동 가능 방향
  const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
  const dy = [1, 2, 2, 1, -1, -2, -2, -1];

  for (let i = 0; i < T; i++) {
    const l = +input[inputIndex++];
    const [currentX, currentY] = input[inputIndex++].split(' ').map(Number);
    const [targetX, targetY] = input[inputIndex++].split(' ').map(Number);

    const visited = Array.from({length: l}, () => Array(l).fill(false));

    function bfs() {
      const queue = [[currentX, currentY, 0]];
      while (queue.length) {
        const [x, y, dist] = queue.shift();

        if (x === targetX && y === targetY) return dist;

        for (let i = 0; i < 8; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];

          if (nx >= 0 && ny >= 0 && nx < l && ny < l && !visited[nx][ny]) {
            visited[nx][ny] = true;
            queue.push([nx, ny, dist + 1]);
          }
        }
      }
    }

    const result = bfs();

    console.log(result);
  }
};

solution();