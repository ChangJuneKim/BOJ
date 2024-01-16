const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const [str, bomb] = input;
  const stack = [];

  for (const char of str) {
    stack.push(char);

    // 폭발 문자열의 마지막 문자와 현재 문자가 같고
    // 스택의 길이가 폭발 문자열의 길이 이상일 때 검사
    if (stack.length >= bomb.length && char === bomb[bomb.length - 1]) {
      let isBomb = true;

      // 폭발 문자열과 스택의 끝부분이 일치하는지 검사
      for (let i = 0; i < bomb.length; i++) {
        if (stack[stack.length - 1 - i] !== bomb[bomb.length - 1 - i]) {
          isBomb = false;
          break;
        }
      }

      // 폭발 문자열이면 스택에서 제거
      if (isBomb) {
        for (let i = 0; i < bomb.length; i++) {
          stack.pop();
        }
      }
    }
  }

  // 결과 출력
  const result = stack.join('');
  console.log(result.length > 0 ? result : 'FRULA');
};

solution();



