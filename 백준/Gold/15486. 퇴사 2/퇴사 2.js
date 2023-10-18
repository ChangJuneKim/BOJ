const path = process.platform === "linux" ? "/dev/stdin" : "input.txt"; 
let [n, ...inputsBeforeMakeUp] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

const N = +n;
const inputs = inputsBeforeMakeUp.map((input) => input.split(" ").map(Number));

function solution(N, inputs) {
  const dp = new Array(N + 1).fill(0);
  let max = 0;

  for (let i = 0; i < N; i += 1) {
    max = Math.max(max, dp[i]);

    const [day, pay] = inputs[i];
    if (i + day <= N) dp[i + day] = Math.max(dp[i + day], max + pay);
  }

  return Math.max(...dp);
}

const answer = solution(N, inputs);
console.log(answer);