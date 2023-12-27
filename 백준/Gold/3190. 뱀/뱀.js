const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
    .toString().trim().split("\n");
const solution = () => {

  const N = +input[0]
  const K = +input[1]
  const apples = input.slice(2, K + 2).map(line => line.split(' ').map(Number));
  const L = +input[K + 2]
  const moves = input.slice(K + 3, K + L + 3).map(line => {
    const [X, C] = line.split(' ');
    return [+X, C];
  });

  const dx = [0, 1, 0, -1]; // 동, 남, 서, 북
  const dy = [1, 0, -1, 0]; // 동, 남, 서, 북
  let direction = 0; // 초기 방향: 동쪽
  let time = 0;
  let snake = [[1, 1]]; // 뱀의 위치 (머리 위치부터)
  let board = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  apples.forEach(([x, y]) => board[x][y] = 1); // 사과 위치 표시

  const turn = (C) => {
    if (C === 'L') direction = (direction + 3) % 4;
    else direction = (direction + 1) % 4;
  };

  const isGameOver = (x, y) => {
    if (x < 1 || y < 1 || x > N || y > N) return true; // 벽에 부딪힘
    for (let i = 0; i < snake.length; i++) {
      if (snake[i][0] === x && snake[i][1] === y) return true; // 자신의 몸에 부딪힘
    }
    return false;
  };

  let moveIndex = 0;
  while (true) {
    time++;
    let nx = snake[0][0] + dx[direction];
    let ny = snake[0][1] + dy[direction];
    if (isGameOver(nx, ny)) break;

    if (board[nx][ny] === 1) { // 사과가 있는 경우
      board[nx][ny] = 0; // 사과 먹기
    } else { // 사과가 없는 경우
      snake.pop(); // 꼬리 줄이기
    }
    snake.unshift([nx, ny]); // 머리 이동

    if (moveIndex < moves.length && time === moves[moveIndex][0]) {
      turn(moves[moveIndex][1]);
      moveIndex++;
    }
  }

  return time;
};

console.log(solution());
