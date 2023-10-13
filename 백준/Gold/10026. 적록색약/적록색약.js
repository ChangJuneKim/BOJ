const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const N = parseInt(input[0]);
  const picture = input.slice(1);

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  function isIn(nx, ny) {
    return 0 <= nx && nx < N && 0 <= ny && ny < N;
  }

  function dfs(x, y, matrix, visited, color) {
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (isIn(nx, ny) && !visited[nx][ny] && matrix[nx][ny] === color) {
        dfs(nx, ny, matrix, visited, color);
      }
    }
  }

  function countRegions(matrix) {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    let count = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
          dfs(i, j, matrix, visited, matrix[i][j]);
          count++;
        }
      }
    }

    return count;
  }

  const colorBlindMatrix = picture.map(row => {
    return row.split('').map(cell => {
      if (cell === 'G') return 'R';
      return cell;
    }).join('');
  });

  const normalCount = countRegions(picture);
  const colorBlindCount = countRegions(colorBlindMatrix);

  console.log(normalCount, colorBlindCount);
};

solution();
