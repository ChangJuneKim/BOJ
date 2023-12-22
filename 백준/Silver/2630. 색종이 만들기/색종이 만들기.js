const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const N = +input[0];
  const paper = input.slice(1).map(v => v.split(" ").map(Number));

  let white = 0, blue = 0;

  divide(0, 0, N);

  // 결과 출력
  console.log(white);
  console.log(blue);

  function divide(x, y, size) {
    // 현재 종이의 첫 번째 색깔
    let color = paper[x][y];
    // 모든 칸이 같은 색인지 확인하는 플래그
    let check = true;

    // 현재 종이의 모든 칸을 확인
    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (paper[i][j] !== color) { // 하나라도 다른 색이 있으면 check를 false로 설정
          check = false;
          break;
        }
      }
      if (!check) break;
    }

    // 모든 칸의 색이 같은 경우
    if (check) {
      color === 1 ? blue++ : white++; // 색에 따라 해당 색종이 수 증가
    } else {
      // 색이 같지 않으면 현재 종이를 4등분하여 재귀 호출
      let newSize = size / 2;
      divide(x, y, newSize); // 왼쪽 상단
      divide(x, y + newSize, newSize); // 오른쪽 상단
      divide(x + newSize, y, newSize); // 왼쪽 하단
      divide(x + newSize, y + newSize, newSize); // 오른쪽 하단
    }
  }
};

solution();