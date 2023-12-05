const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split("\n");

const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

function dfs(matrix, x, y, word, index, memo) {
    if (index === word.length - 1) {
        return 1;
    }

    if (memo[x][y][index] !== -1) {
        return memo[x][y][index];
    }

    memo[x][y][index] = 0;
    for (let i = 0; i < 8; i++) {
        let nx = (x + dx[i] + matrix.length) % matrix.length;
        let ny = (y + dy[i] + matrix[0].length) % matrix[0].length;

        if (matrix[nx][ny] === word[index + 1]) {
            memo[x][y][index] += dfs(matrix, nx, ny, word, index + 1, memo);
        }
    }

    return memo[x][y][index];
}

const solution = () => {
    const [N, M, K] = input[0].split(" ").map(Number);
    const matrix = input.slice(1, 1 + N).map(v => v.split(""));
    const strings = input.slice(1 + N, 1 + N + K);

    for (const word of strings) {
        let total = 0;
        const memo = Array.from(Array(N), () => Array.from(Array(M), () => Array(word.length).fill(-1)));
        for (let x = 0; x < N; x++) {
            for (let y = 0; y < M; y++) {
                if (matrix[x][y] === word[0]) {
                    total += dfs(matrix, x, y, word, 0, memo);
                }
            }
        }
        console.log(total);
    }
};

solution();
