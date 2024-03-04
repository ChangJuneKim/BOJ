const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

function canPlaceSlopes(line, L) {
  const visited = Array(line.length).fill(false);
  for (let i = 0; i < line.length - 1; i++) {
    if (line[i] === line[i + 1]) continue; // 높이가 같으면 계속 진행
    else if (Math.abs(line[i] - line[i + 1]) > 1) return false; // 높이 차이가 1보다 크면 경사로 설치 불가
    else if (line[i] < line[i + 1]) { // 오르막 경사로 설치 가능 여부 확인
      for (let j = 1; j <= L; j++) {
        if (i - j + 1 < 0 || line[i] !== line[i - j + 1] || visited[i - j + 1]) return false;
        visited[i - j + 1] = true;
      }
    } else { // 내리막 경사로 설치 가능 여부 확인
      for (let j = 0; j < L; j++) {
        if (i + j + 1 >= line.length || line[i + 1] !== line[i + j + 1] || visited[i + j + 1]) return false;
        visited[i + j + 1] = true;
      }
    }
  }
  return true;
}

function solution() {
  const [N, L] = input.shift().split(' ').map(Number);
  const map = input.map(line => line.split(' ').map(Number));

  let count = 0;
  // 행 검사
  for (let i = 0; i < N; i++) {
    if (canPlaceSlopes(map[i], L)) count++;
  }

  // 열 검사
  for (let i = 0; i < N; i++) {
    const column = [];
    for (let j = 0; j < N; j++) {
      column.push(map[j][i]);
    }
    if (canPlaceSlopes(column, L)) count++;
  }

  console.log(count);
}

solution();
