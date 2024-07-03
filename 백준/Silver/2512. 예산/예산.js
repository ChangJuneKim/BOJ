const input = require('fs').readFileSync(process.version === 'v20.13.1' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const N = +input[0]
  const arr = input[1].split(' ').map(Number);
  const M = +input[2];
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  
  if(sum <= M) return console.log(Math.max(...arr));

  let low = 0;
  let high = Math.max(...arr);
  let result = 0;
  
  while(low <= high) {
    const mid = Math.floor((low + high) / 2);
    
    // mid(상한액)으로 예산을 배정했을 때 총액
    const allocated = arr.reduce((acc, cur) => acc + Math.min(cur, mid), 0);
    
    // 돈이 남으면 올려봄
    if(allocated <= M) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  console.log(result);
};

solution();
