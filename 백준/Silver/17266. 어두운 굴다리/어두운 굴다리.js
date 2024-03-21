const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const N = +input[0];
  const M = +input[1];
  const locations = input[2].split(' ').map(Number);

  const leftOffset = locations[0];
  const rightOffset = N - locations.at(-1);
  const betweenMaxOffset = getBetweenMaxOffset(locations);

  console.log(Math.max(leftOffset, rightOffset, betweenMaxOffset));

  function getBetweenMaxOffset(locations){
    let max = 0;
    for(let i = 0; i < locations.length - 1; i++){
      const cur = locations[i];
      const next = locations[i + 1];

      max = Math.max(max, (next - cur) / 2);
    }

    return Math.ceil(max);
  }
};

solution();