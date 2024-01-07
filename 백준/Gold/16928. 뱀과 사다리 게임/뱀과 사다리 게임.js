const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const board = Array(101).fill(0);
  const visited = Array(101).fill(false);

  for (let i = 1; i <= N + M; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    board[x] = y;
  }

  const queue = [[1, 0]]; // [현재 위치, 주사위 굴림 횟수]
  visited[1] = true;

  let head = 0;
  while (queue.length > head) {
    const [current, count] = queue[head++]

    if (current === 100) {
      console.log(count);
      return;
    }

    for (let i = 1; i <= 6; i++) {
      let next = current + i;
      if (next > 100) continue;

      if (board[next] !== 0) {
        next = board[next];
      }

      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, count + 1]);
      }
    }
  }
};

solution();


