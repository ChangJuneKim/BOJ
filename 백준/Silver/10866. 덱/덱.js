const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");


const solution = () => {
  const N = +input[0];
  const stack = [];
  const result = [];
  for (let i = 1; i <= N; i++) {
    const [command, number] = input[i].split(" ").map(v => v.trim());

    switch (command) {
      case "push_front":
        stack.unshift(number);
        break;
      case "push_back":
        stack.push(number);
        break;
      case "pop_front":
        const front = stack.shift();
        result.push(front ?? -1);
        break;
      case "pop_back":
        const end = stack.pop();
        result.push(end ?? -1);
        break;
      case "size":
        result.push(stack.length);
        break;
      case "empty":
        result.push(stack.length > 0 ? 0 : 1);
        break;
      case "front":
        result.push(stack.at(0) ?? -1);
        break;
      case "back":
        result.push(stack.at(-1) ?? -1);
        break;
      default:
        break;
    }
  }

  console.log(result.join("\n"));
};

solution();

