const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
    const [R, C] = input[0].split(" ").map(Number);
    const board = input.slice(1).map(row => row.split(""));

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    let maxDistance = 0;

    const dfs = (x, y, visited, distance) => {
        maxDistance = Math.max(maxDistance, distance);

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && nx < R && ny >= 0 && ny < C && !visited[board[nx][ny]]) {
                visited[board[nx][ny]] = true;
                dfs(nx, ny, visited, distance + 1);
                visited[board[nx][ny]] = false;
            }
        }
    };

    const visited = {};
    visited[board[0][0]] = true;
    dfs(0, 0, visited, 1);

    console.log(maxDistance);
};

solution();
