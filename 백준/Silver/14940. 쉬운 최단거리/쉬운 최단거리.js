const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const map = input.slice(1).map(row => row.split(" ").map(Number));
  const visited = Array.from({length: N}, () => Array.from({length: M}, () => false));

  let startX, startY;

  for(let i = 0; i < N; i ++){
    for(let j = 0; j < M; j ++) {
      if(map[i][j] === 2){
        startX = i;
        startY = j;
      }
    }
  }

  bfs(startX, startY)

  for(let i = 0; i < N; i ++){
    for(let j = 0; j < M; j ++) {
      if(map[i][j] === 1 && !visited[i][j]){
        map[i][j] = -1;
      }
    }
  }

  console.log(map.map(row => row.join(" ")).join("\n"));

  function bfs(x, y) {
    const queue = [[x, y]];
    visited[x][y] = true;
    let dis = 0;
    map[x][y] = dis;

    let head = 0;
    while(queue.length > head){
      const [curX, curY] = queue[head++];
      for(let i = 0; i < 4; i ++){
        const nx = curX + dx[i];
        const ny = curY + dy[i];

        if(isIn(nx, ny) && !visited[nx][ny] && map[nx][ny] !== 0){
          queue.push([nx, ny]);
          visited[nx][ny] = true;
          map[nx][ny] = map[curX][curY] + 1;
        }
      }
    }
  }

  function isIn(nx, ny){
    return 0 <= nx && nx < N && 0 <= ny && ny < M
  }
};

solution();
