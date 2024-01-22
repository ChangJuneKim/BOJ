const input = require('fs').readFileSync(process.version === 'v20.9.0' ? 'input.txt' : '/dev/stdin')
  .toString().trim().split("\n");

const solution = () => {
  const [L, C] = input[0].split(" ").map(Number);
  const password = input[1].split(" ").sort();
  const aeiou = ['a', 'e', 'i', 'o', 'u'];
  const result = Array.from({length: L}, () => "");
  const answer = [];

  comb(0, 0)

  console.log(answer.join("\n"));
  function comb(depth, start) {
    if(depth === L){
      let aeiouCount = 0;

      for(const char of result){
        if(aeiou.includes(char)) aeiouCount++;
      }

      if(aeiouCount > 0 && L - aeiouCount > 1){
        answer.push(result.join(""))
      }
      return;
    }

    for(let i = start; i < C; i++){
      result[depth] = password[i];
      comb(depth + 1, i + 1);
    }
  }


};

solution();
