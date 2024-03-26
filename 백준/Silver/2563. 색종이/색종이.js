const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const N = +input[0];
  const map = Array.from({length: 100}, () => Array.from({length: 100}, () => 0));
  const papers = input.slice(1);

  papers.forEach((paper) => {
    const [leftOffset, bottomOffset] = paper.split(" ").map(Number);

    for(let i = leftOffset; i < leftOffset + 10; i++){
      for(let j = bottomOffset; j < bottomOffset + 10; j++){
        map[i][j] = 1;
      }
    }
  })

  let count = 0;
  for(let i = 0; i < 100; i++){
    for(let j = 0; j <100; j++){
      if(map[i][j] === 1) count++;
    }
  }

  console.log(count);
};

solution();