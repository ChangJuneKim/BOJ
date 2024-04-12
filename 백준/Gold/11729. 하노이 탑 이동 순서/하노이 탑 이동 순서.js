const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin').toString().trim().split('\n');

const count = +input[0]

const solution = () => {
  const [K, path] = hanoi();
  console.log(K);
  console.log(path.join("\n"));
  function hanoi() {
    const path = [];
    let K = 0;

    (function fn(count, start, temp, dest){
      if(count === 0) return;
      // temp로 옮김 n - 1 개를
      fn(count - 1, start, dest, temp);
      path.push(`${start} ${dest}`);
      fn(count - 1, temp, start, dest)
      K++;
    })(count, 1, 2, 3);

    return [K, path];
  }
};

solution();
