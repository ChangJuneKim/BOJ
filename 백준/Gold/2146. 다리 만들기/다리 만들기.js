const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const gridSize = +input[0];
  const grid = input.slice(1).map(line => line.split(' ').map(Number));
  const visited = Array.from({length: gridSize}, () => Array(gridSize).fill(false));
  let islandNumber = 1;
  let minimumBridgeLength = Infinity;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const identifyIslandsBFS = (row, column) => {
    const queue = [[row, column]];
    visited[row][column] = true;
    grid[row][column] = islandNumber;
    let head = 0;
    while (queue.length > head) {
      const [curX, curY] = queue[head++];
      for (let i = 0; i < 4; i++) {
        const nx = curX + dx[i];
        const ny = curY + dy[i];
        if (nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize && !visited[nx][ny] && grid[nx][ny] === 1) {
          visited[nx][ny] = true;
          grid[nx][ny] = islandNumber;
          queue.push([nx, ny]);
        }
      }
    }
  };

  const findShortestBridgeBFS = (islandId) => {
    const queue = [];
    const distance = Array.from({length: gridSize}, () => Array(gridSize).fill(-1));

    for (let row = 0; row < gridSize; row++) {
      for (let column = 0; column < gridSize; column++) {
        if (grid[row][column] === islandId) {
          distance[row][column] = 0;
          queue.push([row, column]);
        }
      }
    }

    let head = 0;
    while (queue.length > head) {
      const [curX, curY] = queue[head++];
      for (let i = 0; i < 4; i++) {
        const nx = curX + dx[i];
        const ny = curY + dy[i];
        if (nx >= 0 && nx < gridSize && ny >= 0 && ny < gridSize) {
          if (grid[nx][ny] && grid[nx][ny] !== islandId) {
            return distance[curX][curY];
          }
          if (grid[nx][ny] === 0 && distance[nx][ny] === -1) {
            distance[nx][ny] = distance[curX][curY] + 1;
            queue.push([nx, ny]);
          }
        }
      }
    }

    return Infinity;
  };

  for (let row = 0; row < gridSize; row++) {
    for (let column = 0; column < gridSize; column++) {
      if (grid[row][column] === 1 && !visited[row][column]) {
        identifyIslandsBFS(row, column);
        islandNumber++;
      }
    }
  }

  for (let currentIslandId = 1; currentIslandId < islandNumber; currentIslandId++) {
    minimumBridgeLength = Math.min(minimumBridgeLength, findShortestBridgeBFS(currentIslandId));
  }

  console.log(minimumBridgeLength);
};

solution();
