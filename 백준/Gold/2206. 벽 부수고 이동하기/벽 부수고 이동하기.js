const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


// 이동 방향: 상, 우, 하, 좌, 위, 아래
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const solution = () => {
  let inputIndex = 1;
  const [N, M] = input[0].split(" ").map(Number);
  const visited = Array.from({length: N}, () => Array.from({length: M}, () => Array(2).fill(false)));
  const map = [];

  for (let i = 0; i < N; i++) {
    const row = input[inputIndex++].split("").map(Number);
    map.push(row);
  }

  bfs();

  function bfs() {
    const queue = [[0, 0, 1, 1]]; // x, y, wall(벽 부술 기회), distance
    visited[0][0][0] = true;

    let head = 0;
    while (queue.length > head) {
      const [x, y, wall, dist] = queue[head++];

      if (x === N - 1 && y === M - 1) {
        return console.log(dist);
      }

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if(isIn(nx, ny)){
          if(map[nx][ny] === 1 && wall && !visited[nx][ny][1]) {
            visited[nx][ny][1] = true;
            queue.push([nx, ny, 0, dist + 1]);
          } else if (map[nx][ny] === 0 && !visited[nx][ny][wall]){
            visited[nx][ny][wall] = true;
            queue.push([nx, ny, wall, dist + 1]);
          }
        }
      }
    }
    return console.log(-1);
  }

  function isIn(nx, ny){
    return 0 <= nx && nx < N && 0 <= ny && ny < M
  }


};


solution();