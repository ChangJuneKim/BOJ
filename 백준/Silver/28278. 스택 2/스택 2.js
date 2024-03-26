const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');


const solution = () => {
  const N = +input[0];
  const commands = input.slice(1).map(row => row.split(" "));

  const stack = [];
  const result = [];
  commands.forEach(command => {
    switch (command[0]){
      case '1':{
        stack.push(command[1]);
        break;
      }
      case '2':{
        if(stack.length > 0) result.push(stack.pop());
        else result.push(-1);
        break;
      }
      case '3':{
        result.push(stack.length);
        break;
      }
      case '4':{
        if(stack.length > 0) result.push(0);
        else result.push(1);
        break;
      }
      case '5':{
        if(stack.length > 0) result.push(stack.at(-1));
        else result.push(-1);
        break;
      }
    }
  })

  console.log(result.join("\n"));
};

solution();