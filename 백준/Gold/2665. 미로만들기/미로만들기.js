const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

// 상 우 하 좌
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const solution = () => {
  const N = +input[0];

  const room = input.slice(1).map(row => row.split("").map(Number));
  const visited = Array.from({length: N}, () => Array(N).fill(Infinity));

  bfs();

  console.log(visited[N - 1][N - 1]);

  function bfs() {
    const queue = [[0, 0]]; // x, y
    visited[0][0] = 0;

    let head = 0;
    while (queue.length > head) {
      const [curX, curY] = queue[head++];

      for (let i = 0; i < 4; i++) {
        const nx = curX + dx[i];
        const ny = curY + dy[i];

        if (isIn(nx, ny)) {
          // 흰 방 (갈 수 있음)
          if (room[nx][ny] === 1) {
            if (visited[nx][ny] > visited[curX][curY]) {
              visited[nx][ny] = visited[curX][curY];
              queue.push([nx, ny]);
            }
          // 막힌 방
          } else {
            if (visited[nx][ny] > visited[curX][curY] + 1) {
              visited[nx][ny] = visited[curX][curY] + 1;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  function isIn(nx, ny) {
    return 0 <= nx && nx < N && 0 <= ny && ny < N;
  }
};

solution();
