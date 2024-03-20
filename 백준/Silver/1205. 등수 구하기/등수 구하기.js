const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const [N, newScore, P] = input[0].split(" ").map(Number);
  if (N === 0) { // 점수가 아직 없는 경우
    console.log(1);
    return;
  }

  const scores = N > 0 ? input[1].split(" ").map(Number) : [];

  if (N === P && scores[N-1] >= newScore) { // 랭킹 리스트가 꽉 차있고, 새 점수가 마지막 점수보다 작거나 같은 경우
    console.log(-1);
    return;
  }

  scores.push(newScore); // 새 점수 추가
  scores.sort((a, b) => b - a); // 점수 내림차순 정렬

  const rank = scores.indexOf(newScore) + 1; // 새 점수의 등수 (인덱스+1)
  console.log(rank);
};

solution();