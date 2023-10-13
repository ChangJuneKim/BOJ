const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

let count = 0;
const solution = () => {
  const T = +input[0];
  let index = 1;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < T; i++) {
    const [M, N, K] = input[index++].split(" ").map(Number);
    const cabbages = Array.from({length: N}, () => Array(M).fill(0));

    for (let j = 0; j < K; j++) {
      const [Y, X] = input[index++].split(" ").map(Number);
      cabbages[X][Y] = 1;
    }

    count = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (cabbages[i][j] === 1) {
          bfs(i, j, cabbages, N, M);
          count++;
        }
      }
    }
    console.log(count);
  }

  function bfs(x, y, cabbages, N, M) {
    const queue = [[x, y]];
    cabbages[x][y] = 2;

    let head = 0;
    while(queue.length > head) {
      const [curX, curY] = queue[head++]
      for(let i = 0; i < 4; i++){
        const nx = curX + dx[i];
        const ny = curY + dy[i];

        if(isIn(nx, ny, N, M) && cabbages[nx][ny] === 1){
          cabbages[nx][ny] = 2; // 방문 표시
          queue.push([nx, ny]);
        }
      }
    }
  }

  function isIn(nx, ny, N, M) {
    return 0 <= nx && nx < N && 0 <= ny && ny < M;
  }
};

solution();
