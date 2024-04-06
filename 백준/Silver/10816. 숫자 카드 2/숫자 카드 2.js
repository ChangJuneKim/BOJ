const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const solution = () => {
  const nNumbers = input[1].split(" ").map(Number);
  const mNumbers = input[3].split(" ").map(Number);

  let result = '';

  const nNumbersMap = nNumbers.reduce((map, cur) => {
    if(!map.has(cur)){
      map.set(cur, 0);
    }

    map.set(cur, map.get(cur) + 1);

    return map;
  }, new Map());

  mNumbers.forEach(number => {
    result += `${nNumbersMap.get(number) ?? 0}\n`
  })

  console.log(result.trim());
};

solution();