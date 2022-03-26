// 기수 정렬은 비교를 수행하지 않음
// 넣었다 뺐다

const getDigit = (num, i) => {
  // num의 i번째 자리 숫자를 리턴
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
};

const digitCount = num => {
  //숫자의 자릿수를 리턴
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = numArr => {
  // 배열 요소 중 가장 큰 자릿수를 리턴
  return Math.max(...numArr.map(num => digitCount(num)));
};

// const mostDigits = numArr => {
//   let maxDigits = 0;
//   for (let i = 0; i < numArr.length; i++) {
//     maxDigits = Math.max(maxDigits, digitCount(numArr[i]));
//   }

//   return maxDigits;
// };

const radixSort = numArr => {
  let maxDigitCount = mostDigits(numArr);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < numArr.length; i++) {
      let digit = getDigit(numArr[i], k);

      digitBuckets[digit].push(numArr[i]);
    }

    // console.log(digitBuckets);
    numArr = [].concat(...digitBuckets);
    // console.log(numArr);
  }
  return numArr;
};

console.log(getDigit(7323, 3)); // 7323의 1000의 자리 --> 7리턴
console.log(digitCount(10)); // 10은 2자리수 --> 2 리턴
console.log(mostDigits([1, 2, 11, 412, 3233, 223333])); // 223333이 6자리 수 --> 6리턴

console.log(radixSort([345, 23, 11, 2, 3233, 223333]));
