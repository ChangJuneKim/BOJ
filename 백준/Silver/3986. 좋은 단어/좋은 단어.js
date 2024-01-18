const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const strings = input.slice(1);

  let count = 0;
  for(const str of strings){
    if(isGoodWord(str)) count++;
  }

  console.log(count);


  function isGoodWord(str){
    const stack = [];

    for(const char of str){
      if(stack.length === 0){
        stack.push(char);
      } else if(stack.length > 0){
        if(stack.at(-1) === char) stack.pop();
        else stack.push(char);
      }
    }

    return !stack.length;
  }
};

solution()

