const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const N = parseInt(input[0]);
  const arr = [];

  for(let i=1; i<=N; i++) {
      arr.push(input[i].split(" ").map(Number));
  }

  let cnt = 0;

  const find = () => {
      let m = 3;
      let d = 1;
      let index = -1;

      let endMonth = 0;
      let endDay = 0;

      const visit = Array(N).fill(false);

      while(true) {
          for(let i=0; i<N; i++) {
              if(visit[i]) {
                  continue;
              }
              if(arr[i][0] < m || (arr[i][0] === m && arr[i][1] <= d)) {
                  if(arr[i][2] > endMonth || (arr[i][2] === endMonth && arr[i][3] > endDay)) {
                      index = i;
                      endMonth = arr[i][2];
                      endDay = arr[i][3];
                  }
              }
          }
          if(index === -1) {
              console.log(0);
              return;
          }
          m = arr[index][2];
          if(m === 12) {
              console.log(cnt + 1);
              return;
          }
          d = arr[index][3];
          visit[index] = true;
          cnt++;
          endMonth = 0;
          endDay = 0;
          index = -1;
      }
  }

  find();
}

solution();
