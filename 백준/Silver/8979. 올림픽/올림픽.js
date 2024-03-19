const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split('\n');

const solution = () => {
  const [N, K] = input[0].split(' ').map(Number);
  const medals = input.slice(1).map(line => line.split(' ').map(Number));

  const K_medals = medals.find(medal => medal[0] === K);

  let rank = 1;
  for (let i = 0; i < N; i++) {
    if (medals[i][1] > K_medals[1] || (medals[i][1] === K_medals[1] && medals[i][2] > K_medals[2]) || (medals[i][1] === K_medals[1] && medals[i][2] === K_medals[2] && medals[i][3] > K_medals[3])) {
      rank++;
    }
  }
  console.log(rank);
};

solution();
