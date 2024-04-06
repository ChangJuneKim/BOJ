const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const dx = [-1, 0, 1, 0, 0, 0];
const dy = [0, 1, 0, -1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];
const solution = () => {
  const [M, N, H] = input[0].split(' ').map(Number);

  const tomatoes = makeTomatoes();

  const queue = [];
  const time = bfs();


  console.log(isPossible() ? time : -1);

  function isPossible() {
    return !tomatoes.some(layer => layer.some(row => row.some(tomato => tomato === 0)));
  }

  function bfs() {
    for (let i = 0; i < H; i++) {
      for (let j = 0; j < N; j++) {
        for (let k = 0; k < M; k++) {
          if (tomatoes[i][j][k] === 1) {
            queue.push([i, j, k]);
          }
        }
      }
    }

    let head = 0;
    let time = 0;

    while (queue.length > head) {
      const size = queue.length - head;
      for (let i = 0; i < size; i++) {
        const [curZ, curX, curY] = queue[head++];
        for (let j = 0; j < 6; j++) {
          const nx = curX + dx[j];
          const ny = curY + dy[j];
          const nz = curZ + dz[j];

          if (isIn(nx, ny, nz) && tomatoes[nz][nx][ny] === 0) {
            tomatoes[nz][nx][ny] = 1;
            queue.push([nz, nx, ny]);
          }
        }
      }
      time++;
    }
    return time - 1;
  }


  function makeTomatoes() {
    const tomatoes = Array.from({length: H}, () => Array.from({length: N}, () => Array(M)));
    let inputIndex = 1;
    for (let i = 0; i < H; i++) {
      for (let j = 0; j < N; j++) {
        tomatoes[i][j] = input[inputIndex++].split(' ').map(Number);
      }
    }

    return tomatoes;
  }

  function isIn(nx, ny, nz) {
    return 0 <= nx && nx < N && 0 <= ny && ny < M && 0 <= nz && nz < H;
  }
};

solution();