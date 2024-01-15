const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const [N, K] = input[0].split(" ").map(Number);

  bfs();

  function bfs() {
    const visited = Array(100001).fill(false);

    const queue = [[N, 0]];
    visited[N] = true;

    let head = 0;

    while (queue.length > head) {
      const [curP, count] = queue[head++];

      if (curP === K) {
        console.log(count);
        return;
      }

      for (const next of [curP * 2, curP - 1, curP + 1]) {
        if (isIn(next) && !visited[next]) {
          visited[next] = true;
          if(next === curP * 2){
            queue.push([next, count])
          } else {
            queue.push([next, count + 1])
          }
        }
      }
    }
  }

  function isIn(nx) {
    return 0 <= nx && nx <= 100000;
  }

};

solution();
