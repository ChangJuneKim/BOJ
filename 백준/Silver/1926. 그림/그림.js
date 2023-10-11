const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const paper = input.slice(1).map(row => row.split(" ").map(Number));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  function bfs(x, y) {
    let queue = [[x, y]];
    let count = 1; // 시작점도 포함해야 하므로 1로 초기화
    paper[x][y] = 0; // 방문 표시

    while (queue.length) {
      const [cx, cy] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (nx >= 0 && ny >= 0 && nx < N && ny < M && paper[nx][ny] === 1) {
          paper[nx][ny] = 0; // 방문 표시
          queue.push([nx, ny]);
          count++;
        }
      }
    }

    return count;
  }

  let numberOfPictures = 0;
  let maxArea = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (paper[i][j] === 1) {
        const area = bfs(i, j);
        maxArea = Math.max(maxArea, area);
        numberOfPictures++;
      }
    }
  }

  console.log(numberOfPictures);
  console.log(maxArea);
};

solution();
