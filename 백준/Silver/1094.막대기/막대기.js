const fs = require('fs');
const filePath = '/dev/stdin'

const input = fs.readFileSync(filePath).toString().trim();

const solution = input => {
  let X = +input;

  let bar = 64;
  // 막대 길이
  if (X === bar) {
    console.log(1);
  } else {
    let count = 0;
    while (true) {
      bar = bar / 2;
      // 막대길이를 반으로 나눔
      if (bar <= X) {
        // 반으로 나눈 막대 길이가 X보다 작거나 같으면 막대 길이만큼 뺴줌
        X = X - bar;
      } else {
        continue;
      }
      count++;
      if (X === 0) {
        break;
      }
    }
    console.log(count);
  }
};

solution(input);