const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const matrix = input.slice(1).map(row => row.split(" ").map(Number));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  console.log(solve());

  function isIn(nx, ny){
    return 0 <= nx && nx < N && 0 <= ny && ny < M
  }

  function meltIceberg() {
    const melt = [];
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        if (matrix[x][y] > 0) {
          let seaCount = 0;
          for (let d = 0; d < 4; d++) {
            const nx = x + dx[d];
            const ny = y + dy[d];
            if (isIn(nx, ny) && matrix[nx][ny] === 0) {
              seaCount++;
            }
          }
          melt.push([x, y, seaCount]);
        }
      }
    }
    melt.forEach(([x, y, count]) => {
      matrix[x][y] = Math.max(matrix[x][y] - count, 0);
    });
  }

  function bfs(x, y, visited) {
    const queue = [[x, y]];
    visited[x][y] = true;
    while (queue.length > 0) {
      const [cx, cy] = queue.shift();
      for (let d = 0; d < 4; d++) {
        const nx = cx + dx[d];
        const ny = cy + dy[d];
        if (isIn(nx, ny) && matrix[nx][ny] > 0 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }

  function countIceberg() {
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    let count = 0;
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        if (matrix[x][y] > 0 && !visited[x][y]) {
          bfs(x, y, visited);
          count++;
        }
      }
    }
    return count;
  }

  function solve() {
    let year = 0;
    while (true) {
      year++;
      meltIceberg();
      const icebergCount = countIceberg();
      if (icebergCount >= 2) return year;
      if (icebergCount === 0) return 0;
    }
  }


};

solution();
