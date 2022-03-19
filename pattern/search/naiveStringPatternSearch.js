// long 문자열에서 short 문자열 찾기

const naiveSearch = (long, short) => {
  let L = long.length; // 16
  let S = short.length; // 4
  let count = 0;
  for (let i = 0; i < L - S; i++) {
    let j;
    for (j = 0; j < S; j++) {
      if (long[i + j] !== short[j]) {
        break;
      }
    }
    if (j === S) {
      console.log(`found this in index ${i}`);
      count++;
    }
  }
  console.log(count);
};

naiveSearch('lorie loled', 'lol');
