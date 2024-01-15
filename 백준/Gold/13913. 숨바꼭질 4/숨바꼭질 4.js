const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const [N, K] = input[0].split(" ").map(Number);

  bfs();


  function bfs() {
    const visited = Array(100001).fill(false);
    const from = Array(100001).fill(-1);
    const queue = [[N, 0]];
    visited[N] = true;

    let head = 0;

    while (queue.length > head) {
      const [curP, count] = queue[head++];

      if (curP === K) {
        const path = getPath(K, from);
        console.log(`${count}\n${path}`);
        return;
      }

      for (const next of [curP * 2, curP - 1, curP + 1]) {
        if (isIn(next) && !visited[next]) {
          queue.push([next, count + 1]);
          visited[next] = true;
          from[next] = curP;
        }
      }
    }
  }

  function getPath(end, from) {
    const path = [];

    while(end !== -1){
      path.push(end);
      end = from[end];
    }

    return path.reverse().join(" ");
  }


  function isIn(nx) {
    return 0 <= nx && nx <= 100000;
  }

};

solution();
