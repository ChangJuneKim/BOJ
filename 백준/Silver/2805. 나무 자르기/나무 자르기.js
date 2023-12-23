const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const heights = input[1].split(" ").map(Number);

  let low = 0;
  let high = Math.max(...heights);

  let result = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    const woodLength = getWoodLength(mid);

    if(woodLength >= M){
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  console.log(result);

  function getWoodLength(h) {
    return heights.reduce((acc, cur) => {
      if(cur - h > 0) return acc + (cur - h)
      return acc;
    }, 0)
  }
};

solution();
