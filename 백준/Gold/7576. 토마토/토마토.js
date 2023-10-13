const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const [M, N] = input[0].split(" ").map(Number);
  const tomatoes = input.slice(1).map(row => row.split(" ").map(Number));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const min = bfs();
  console.log(min);

  function bfs() {
    const queue = [];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (tomatoes[i][j] === 1) {
          queue.push([i, j]);
        }
      }
    }

    let head = 0;
    while (queue.length > head) {
      const [curX, curY] = queue[head++];

      for (let i = 0; i < 4; i++) {
        const nx = curX + dx[i];
        const ny = curY + dy[i];

        if (isIn(nx, ny) && tomatoes[nx][ny] === 0) {
          tomatoes[nx][ny] = tomatoes[curX][curY] + 1;
          queue.push([nx, ny]);
        }
      }
    }

    let maxDays = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (tomatoes[i][j] === 0) return -1;
        maxDays = Math.max(maxDays, tomatoes[i][j]);
      }
    }
    return maxDays - 1;
  }

  function isIn(nx, ny) {
    return 0 <= nx && nx < N && 0 <= ny && ny < M;
  }
};

solution();
