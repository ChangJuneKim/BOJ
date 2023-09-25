const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const 커서왼쪽이동 = "L";
const 커서오른쪽이동 = "D";
const 커서왼쪽삭제 = 'B';
const 문자추가 = "P";

const solution = () => {
  let str = input[0].trim();
  const N = +input[1];
  const commands = input.slice(2).map(v => v.trim());

  const leftStack = [...str];
  const rightStack = [];

  for (const command of commands) {
    if (command.startsWith(커서왼쪽이동)) {
      if (leftStack.length > 0) rightStack.push(leftStack.pop());
    } else if (command.startsWith(커서오른쪽이동)) {
      if (rightStack.length > 0) leftStack.push(rightStack.pop());
    } else if (command.startsWith(커서왼쪽삭제)) {
      leftStack.pop();
    } else if (command.startsWith(문자추가)) {
      const [_, char] = command.split(" ");
      leftStack.push(char);
    }
  }

  console.log(leftStack.join('') + rightStack.reverse().join('')); // 최종 결과 출력
};

solution();
