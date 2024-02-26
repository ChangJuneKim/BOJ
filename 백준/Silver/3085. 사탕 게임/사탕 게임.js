const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");



function solution() {
  const N = +input[0];
  const board = input.slice(1).map(row => row.split(''));

  let answer = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 오른쪽 사탕과 교환
      if (j + 1 < N) {
        [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
        answer = Math.max(answer, getMaxCandy(board, N));
        [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
      }

      // 아래 사탕과 교환
      if (i + 1 < N) {
        [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
        answer = Math.max(answer, getMaxCandy(board, N));
        [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
      }
    }
  }

  console.log(answer);

  function getMaxCandy(board, N) {
    let maxCandy = 1;

    for (let i = 0; i < N; i++) {
      let rowCount = 1;
      let colCount = 1;

      for (let j = 1; j < N; j++) {
        // 가로 줄 검사
        if (board[i][j] === board[i][j - 1]) {
          rowCount++;
        } else {
          maxCandy = Math.max(maxCandy, rowCount);
          rowCount = 1;
        }

        // 세로 줄 검사
        if (board[j][i] === board[j - 1][i]) {
          colCount++;
        } else {
          maxCandy = Math.max(maxCandy, colCount);
          colCount = 1;
        }
      }

      // 마지막 비교를 위한 추가 검사
      maxCandy = Math.max(maxCandy, rowCount, colCount);
    }

    return maxCandy;
  }
}

solution();
