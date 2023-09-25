const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const N = +input[0];

  for(let i = 1; i <= N; i++){
    const 강산이입력 = input[i].trim();
    const leftStack = [];
    const rightStack = [];

    const leftCursor = () => {
      leftStack.length > 0 && rightStack.push(leftStack.pop());
    }
    const rightCursor = () => {
      rightStack.length > 0 && leftStack.push(rightStack.pop());
    }

    for(const char of 강산이입력){
      if(char === '<') leftCursor();
      else if(char === '>') rightCursor();
      else if(char === '-') leftStack.pop();
      else leftStack.push(char);
    }

    console.log(leftStack.concat(rightStack.reverse()).join(""));
  }
}

solution();

