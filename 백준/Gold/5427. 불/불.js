const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const solution = () => {
  const t = Number(input.shift());

  const bfs = (w, h, grid) => {
    let fire = [], sang = [], time = 0;

    // 초기 위치 파악
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (grid[i][j] === '*') fire.push([i, j]);
        if (grid[i][j] === '@') sang.push([i, j]);
      }
    }

    while (sang.length) {
      const newFire = [], newSang = [];

      // 불 확산
      for (const [x, y] of fire) {
        for (let d = 0; d < 4; d++) {
          const nx = x + dx[d];
          const ny = y + dy[d];
          if (nx >= 0 && ny >= 0 && nx < h && ny < w && grid[nx][ny] === '.') {
            grid[nx][ny] = '*';
            newFire.push([nx, ny]);
          }
        }
      }

      // 상근이 움직임
      for (const [x, y] of sang) {
        for (let d = 0; d < 4; d++) {
          const nx = x + dx[d];
          const ny = y + dy[d];
          if (nx < 0 || ny < 0 || nx >= h || ny >= w) return time + 1;  // 탈출
          if (grid[nx][ny] === '.') {
            grid[nx][ny] = '@';
            newSang.push([nx, ny]);
          }
        }
      }

      fire = newFire;
      sang = newSang;
      time++;
    }
    return "IMPOSSIBLE";
  };

  const result = [];
  for (let i = 0; i < t; i++) {
    const [w, h] = input.shift().split(" ").map(Number);
    const grid = input.splice(0, h).map(line => line.split(""));
    result.push(bfs(w, h, grid));
  }
  console.log(result.join("\n"));
}

solution();

