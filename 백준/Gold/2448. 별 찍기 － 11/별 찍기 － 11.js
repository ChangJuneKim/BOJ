const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const N = parseInt(input[0]);
  const board = Array.from(Array(N), () => new Array(2 * N - 1).fill(' '));

  const drawStars = (x, y, size) => {
    if (size === 3) {
      board[x][y] = '*';
      board[x + 1][y - 1] = '*'; board[x + 1][y + 1] = '*';
      board[x + 2][y - 2] = '*'; board[x + 2][y - 1] = '*'; board[x + 2][y] = '*'; board[x + 2][y + 1] = '*'; board[x + 2][y + 2] = '*';
      return;
    }

    const newSize = size / 2;
    drawStars(x, y, newSize);
    drawStars(x + newSize, y - newSize, newSize);
    drawStars(x + newSize, y + newSize, newSize);
  };

  drawStars(0, N - 1, N);

  console.log(board.map(row => row.join('')).join('\n'));
};

solution();
