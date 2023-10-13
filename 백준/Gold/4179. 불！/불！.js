const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const maze = input.slice(1).map(row => row.split(""));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const time = bfs();
  console.log(time);

  function bfs() {
    let jihun = [];
    let fire = [];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (maze[i][j] === 'J') jihun.push([i, j]);
        if (maze[i][j] === 'F') fire.push([i, j]);
      }
    }

    let time = 0;
    while (jihun.length) {
      time++;
      const fireQueue = [];

      for(let [x, y] of fire){
        for(let i = 0; i < 4; i++){
          const nx = x + dx[i]
          const ny = y + dy[i]
          if(isIn(nx, ny)){
            if(maze[nx][ny] === '.' || maze[nx][ny] === 'J'){
              maze[nx][ny] = 'F';
              fireQueue.push([nx, ny]);
            }
          }
        }
      }
      fire = [...fireQueue];

      const jihunQueue = [];

      for(let [x, y] of jihun){
        for(let i = 0; i < 4; i++){
          const nx = x + dx[i]
          const ny = y + dy[i]
          if(!isIn(nx, ny)){
            return time;
          }
          if(maze[nx][ny] === '.'){
            maze[nx][ny] = 'J';
            jihunQueue.push([nx, ny]);
          }
        }
      }
      jihun = [...jihunQueue];
    }

    return "IMPOSSIBLE";
  }

  function isIn(nx, ny) {
    return 0 <= nx && nx < N && 0 <= ny && ny < M;
  }
};

solution();
