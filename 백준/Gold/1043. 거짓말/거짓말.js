const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const truth = new Set(input[1].split(" ").map(Number).slice(1));
  const parties = input.slice(2).map(line => line.split(" ").map(Number).slice(1));

  // 진실을 아는 사람들과 연결된 사람들을 찾기
  for (let i = 0; i < M; i++) {
    for (let party of parties) {
      if (party.some(person => truth.has(person))) {
        party.forEach(person => truth.add(person));
      }
    }
  }

  let result = 0;
  for (let party of parties) {
    if (!party.some(person => truth.has(person))) {
      result++;
    }
  }

  console.log(result);
};

solution();
