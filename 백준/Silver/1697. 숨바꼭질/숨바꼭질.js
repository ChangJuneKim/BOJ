const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim();

const solution = () => {
  const [N, K] = input.split(" ").map(Number);

  const MAX = 100001;
  const visited = Array(MAX).fill(false);

  console.log(bfs());
  function bfs() {
    const queue = [];
    let head = 0;
    queue.push(N);
    visited[N] = true;
    let time = 0;

    while (head < queue.length) {
      let size = queue.length - head; // 현재 레벨의 노드 수 계산

      for (let i = 0; i < size; i++) {
        const current = queue[head++];

        if (current === K) {
          return time;
        }

        const move = [current - 1, current + 1, current * 2];

        for (let j = 0; j < 3; j++) {
          if (move[j] >= 0 && move[j] < MAX && !visited[move[j]]) {
            visited[move[j]] = true;
            queue.push(move[j]);
          }
        }
      }
      time++;
    }
  }

};

solution();
