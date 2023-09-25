const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [N, K] = input[0].split(" ").map(Number);

  const info = Array.from({length: 6}, () => (Array.from({length: 2}, () => 0)));

  for (let i = 1; i <= N; i++) {
    const [S, Y] = input[i].split(" ").map(Number);
    info[Y - 1][S]++;
  }

  let rooms = 0;

  info.forEach(학년정보 => {
    const [여자, 남자] = 학년정보;
    rooms += Math.ceil(여자 / K) + Math.ceil(남자 / K);
  });

  console.log(rooms);
};

solution();

