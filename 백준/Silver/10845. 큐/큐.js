const input = require('fs').readFileSync(process.version === 'v18.17.1' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const commands = input.slice(1);

  const queue = [];
  const result = [];

  for (const c of commands) {
    const [command, x] = c.split(" ");

    switch (command) {
      case "push":
        queue.push(x);
        break;
      case "pop":
        if(queue.length > 0) result.push(queue.shift());
        else result.push(-1);
        break;
      case "size":
        result.push(queue.length);
        break;
      case "empty":
        queue.length > 0 ? result.push(0) : result.push(1);
        break;
      case "front":
        if(queue.length > 0) result.push(queue.at(0));
        else result.push(-1);
        break;
      case "back":
        if(queue.length > 0) result.push(queue.at(-1));
        else result.push(-1);
        break;
      default:
        break;
    }
  }

  console.log(result.join('\n'));
};

solution();