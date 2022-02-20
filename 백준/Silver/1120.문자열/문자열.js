const fs = require('fs');
const filePath = '/dev/stdin'
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const solution = input => {
  const A = input[0];
  const B = input[1];

  if (A.length === B.length) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
        count++;
      }
    }
    console.log(count);
    return;
  } else {
    if (B.includes(A)) {
      console.log(0);
      return;
    } else {
      let min = A.length;
      for (let i = 0; i <= B.length - A.length; i++) {
        let curMin = 0;
        for (let j = i; j < i + A.length; j++) {
          if (A[j - i] !== B[j]) curMin++;
        }
        if (curMin < min) min = curMin;
      }
      console.log(min);
    }
  }
};

solution(input);
