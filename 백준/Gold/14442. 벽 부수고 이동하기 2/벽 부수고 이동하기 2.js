const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


class Queue {
  constructor() {
    this.items = [];
    this.frontIndex = 0;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const result = this.items[this.frontIndex];
    this.frontIndex++;
    if (this.frontIndex * 2 >= this.items.length) {
      this.items = this.items.slice(this.frontIndex);
      this.frontIndex = 0;
    }
    return result;
  }

  isEmpty() {
    return this.frontIndex >= this.items.length;
  }

  size() {
    return this.items.length - this.frontIndex;
  }
}


const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const solution = () => {
  const [N, M, K] = input[0].split(" ").map(Number);
  const map = input.slice(1).map(row => row.split("").map(Number));

  const result = bfs();

  console.log(result);

  function bfs() {
    const visited = Array.from({length: N}, () =>
      Array.from({length: M}, () =>
        Array(K + 1).fill(false)));
    const queue = new Queue();
    queue.enqueue([0, 0, 1, K]); // x, y, 경로 count, 남은 벽 부수기
    visited[0][0][K] = true;

    while (!queue.isEmpty()) {
      const [curX, curY, curCount, curRemain] = queue.dequeue();

      if (curX === N - 1 && curY === M - 1) return curCount;

      for (let i = 0; i < 4; i++) {
        const nx = dx[i] + curX;
        const ny = dy[i] + curY;

        if (isIn(nx, ny)) {
          if (map[nx][ny] === 1 && curRemain > 0 && !visited[nx][ny][curRemain - 1]) {
            queue.enqueue([nx, ny, curCount + 1, curRemain - 1]);
            visited[nx][ny][curRemain - 1] = true;
          } else if (map[nx][ny] === 0 && !visited[nx][ny][curRemain]) {
            queue.enqueue([nx, ny, curCount + 1, curRemain]);
            visited[nx][ny][curRemain] = true;
          }
        }
      }
    }

    return -1;
  }

  function isIn(nx, ny) {
    return 0 <= nx && nx < N && 0 <= ny && ny < M;
  }
};

solution();


