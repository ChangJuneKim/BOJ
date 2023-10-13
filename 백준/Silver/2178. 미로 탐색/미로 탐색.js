const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");



const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const maze = input.slice(1).map(row => row.split("").map(Number));

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const min = bfs(0, 0);

  console.log(min);

  function bfs(x, y) {
    const queue = [[x, y]];

    while(queue.length > 0){
      const [curX, curY] = queue.shift();

      for(let i = 0; i < 4; i++){
        const nx = curX + dx[i];
        const ny = curY + dy[i];

        if(isIn(nx, ny) && maze[nx][ny] !== 0){
          if(maze[nx][ny] === 1){
            maze[nx][ny] = maze[curX][curY] + 1;
            queue.push([nx, ny]);
          }
        }
      }
    }

    return maze[N - 1][M - 1]
  }

  function isIn(nx, ny) {
    return 0 <= nx && nx < N && 0 <= ny && ny < M;
  }
};

solution();
