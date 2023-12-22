const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const [N, M, B] = input[0].split(' ').map(Number);
  const land = input.slice(1).map(line => line.split(' ').map(Number));

  let minHeight = Infinity;
  let maxHeight = 0;

  // 땅의 최소 높이와 최대 높이를 찾는다
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      minHeight = Math.min(minHeight, land[i][j]);
      maxHeight = Math.max(maxHeight, land[i][j]);
    }
  }

  let minTime = Infinity;
  let resultHeight = 0;


  for (let h = minHeight; h <= maxHeight; h++) {
    let time = 0;
    let inventory = B;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        const diff = land[i][j] - h;

        if (diff > 0) { // 제거 (2초)
          time += 2 * diff;
          inventory += diff;
        } else if (diff < 0) { // 쌓기 (1초)
          time -= diff;
          inventory += diff;
        }
      }
    }

    // 인벤토리에 충분한 블록이 있는지 확인 후 시간과 높이 갱신
    if (inventory >= 0 && time <= minTime) {
      minTime = time;
      resultHeight = h;
    }
  }

  console.log(`${minTime} ${resultHeight}`);
};

solution();
