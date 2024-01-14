const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const EMPTY = "O"
const WALL = "X"
const DOYEON = "I"
const PERSON = "P"

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const campus = input.slice(1).map(row => row.split(""));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if(campus[i][j] === DOYEON){
        const result = bfs(i, j);
        console.log(result === 0 ? 'TT' : result);
        return;
      }
    }
  }

  function bfs(startX, startY){
    let count = 0;
    const queue = [[startX, startY]];
    campus[startX][startY] = '*';

    let head = 0;
    while(queue.length > head){
      const [curX, curY] = queue[head++];

      for(let i = 0; i < 4; i++){
        const nx = curX + dx[i];
        const ny = curY + dy[i];

        if(isIn(nx, ny) && campus[nx][ny] !== '*' && campus[nx][ny] !== WALL){
          if(campus[nx][ny] === PERSON){
            count++;
          }
            queue.push([nx, ny]);
          campus[nx][ny] = "*";
        }
      }
    }

    return count;
  }

  function isIn(nx, ny){
    return 0 <= nx && nx < N && 0 <= ny && ny < M
  }
};

solution();
