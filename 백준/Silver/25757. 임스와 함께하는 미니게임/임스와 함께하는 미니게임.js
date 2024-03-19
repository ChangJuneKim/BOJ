const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split('\n');

// Y, F, O
const solution = () => {
  const [N, game] = input[0].split(" ");
  const members = new Set(input.slice(1));

  let memberCount = getMemberCount(game);
  console.log(Math.floor(members.size / memberCount));

  function getMemberCount(game){
    let result;
    switch (game){
      case 'Y':
        result = 1;
        break;
      case 'F':
        result = 2;
        break;
      case 'O':
        result = 3;
        break;
    }
    return result
  }
};

solution();
