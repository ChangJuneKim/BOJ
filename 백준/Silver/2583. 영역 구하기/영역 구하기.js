const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const [M, N, K] = input[0].split(" ").map(Number);

  const paper = Array.from({ length: M }, () => Array.from({ length: N }, () => 0));

  for (let i = 1; i <= K; i++) {
    const [lx, ly, rx, ry] = input[i].split(" ").map(Number);

    for (let y = ly; y < ry; y++) {
      for (let x = lx; x < rx; x++) {
        paper[y][x] = 1;
      }
    }
  }

  const areas = [];

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (paper[i][j] === 0) {
        areas.push(bfs(i, j));
      }
    }
  }

  console.log(areas.length);
  console.log(areas.sort((a, b) => a - b).join(' '));

  function bfs(x, y) {
    let area = 0;
    const queue = [[x, y]];

    paper[x][y] = -1;

    let head = 0;
    while (queue.length > head) {
      const [curX, curY] = queue[head++];
      area++;

      for (let d = 0; d < 4; d++) {
        const nx = curX + dx[d];
        const ny = curY + dy[d];

        if (isIn(nx, ny) && paper[nx][ny] === 0) {
          paper[nx][ny] = -1;
          queue.push([nx, ny]);
        }
      }
    }

    return area;
  }

  function isIn(nx, ny) {
    return 0 <= nx && nx < M && 0 <= ny && ny < N;
  }
};

solution();
