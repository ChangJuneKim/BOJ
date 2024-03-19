const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const N = parseInt(input[0]);
  const board = input.slice(1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 심장을 찾는 조건 수정: 심장 주변을 더 정확하게 검사
      if (board[i][j] === '*' && board[i][j + 1] === '*' && board[i][j - 1] === '*' && board[i + 1][j] === '*') {
        const heartX = i + 1;
        const heartY = j + 1;

        // 심장 기준으로 각 신체 부위 길이 측정
        let leftArmLength = 0, rightArmLength = 0, waistLength = 0, leftLegLength = 0, rightLegLength = 0;

        // 왼쪽 팔 길이
        for (let k = j - 1; k >= 0 && board[i][k] === '*'; k--) leftArmLength++;
        // 오른쪽 팔 길이
        for (let k = j + 1; k < N && board[i][k] === '*'; k++) rightArmLength++;
        // 허리 길이
        for (let k = i + 1; k < N && board[k][j] === '*'; k++) waistLength++;
        // 다리 길이 (허리 바로 아래부터 시작)
        let legStart = i + waistLength + 1;
        if (legStart < N) {
          // 왼쪽 다리 길이
          for (let k = legStart; k < N && board[k][j - 1] === '*'; k++) leftLegLength++;
          // 오른쪽 다리 길이
          for (let k = legStart; k < N && board[k][j + 1] === '*'; k++) rightLegLength++;
        }

        console.log(`${heartX} ${heartY}`);
        console.log(`${leftArmLength} ${rightArmLength} ${waistLength} ${leftLegLength} ${rightLegLength}`);
        return; // 찾았으면 더 이상 검색하지 않음
      }
    }
  }
};

solution();
